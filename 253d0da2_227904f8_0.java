import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class IconUtil {

    //设置解析网页favicon.ico的link的正则表达式
    private static final Pattern[] ICON_PATTERNS = new Pattern[]{
            Pattern.compile("rel=[\"']shortcut icon[\"'][^\r\n>]+?((?<=href=[\"']).+?(?=[\"']))"),
            Pattern.compile("((?<=href=[\"'])[^\r\n\"']+?(?=[\"']))[^\n\r<]+?rel=[\"']shortcut icon[\"']"),
            Pattern.compile("property=[\"']og:image[\"'][^\n\r>]+?((?<=content=[\"“]).+?(?=[\"']))"),
            Pattern.compile("sizes=[\"'](192x192|96x96|32x32|16x16)[\"'][^\n\r>]+?((?<=href=[\"']).+?(?=[\"']))"),
            Pattern.compile("((?<=href=[\"'])[^\n\r\"']+?(?=[\"']))\"sizes=[\"'](192x192|96x96|32x32|16x16)[\"']"),
            Pattern.compile("rel=[\"']icon[\"'][^\r\n>]+?((?<=href=[\"']).+?(?=[\"']))")
    };
    //设置解析网页head标签结尾的正则表达式
    private static final Pattern HEAD_END_PATTERN = Pattern.compile("</head>");

    /**
     * 功能描述：
     * 获取favicon.ico地址的静态方法
     * 也是本工具类的入口
     *
     * @param:网页地址
     * @return:图标地址
     */
    public static String getIconUrl(String webUrl) {
        webUrl = getFinalUrl(webUrl);
        return getIconUrlByRegex(webUrl);
    }

    /**
     * 功能描述：
     * getIconUrlByRegex是根据正则表达式从html中获取Icon地址，
     * getHead方法是获取网页的head结束标签之前的文本，
     * 然后用正则表达式匹配内容，
     * 这里的正则表达式是ICON_PATTERNS数组，
     * 这是因为rel和href的顺序是不固定的。
     * 匹配到以后判断一下是否为相对路径，
     * 如果是的话做进一步处理。
     *
     * @param:网页地址
     * @return:图标地址
     */
    private static String getIconUrlByRegex(String webUrl) {
        System.out.println("进入 getIconUrlByRegex 方法");
        try {
            String headString = getHead(webUrl);
            System.out.println(headString);
            int i = 0;
            for (Pattern iconPattern : ICON_PATTERNS) {
                Matcher matcher = iconPattern.matcher(headString);
                i++;
                System.out.println(i+"-------判断是否拿到原icon地址");
                if (matcher.find()) {
                    //这个时候已经拿到原始的icon地址了
                    String iconUrl = matcher.group(1);
                    System.out.println("拿到原始icon地址");
                    //判断是否为http或https路径
                    if (iconUrl.contains("http")) {
                        return iconUrl;
                    }
                    //判断是否为相对路径或根路径
                    if (iconUrl.charAt(0) == '/') {
                        URL url = new URL(webUrl);
                        if (iconUrl.charAt(1) == '/'){
                            iconUrl = url.getProtocol() + ":" + iconUrl;
                        }else{
                            iconUrl = url.getProtocol() + "://" + url.getHost() + iconUrl;
                        }
                    } else {
                        iconUrl = webUrl + "/" + iconUrl;
                    }
                    return iconUrl;
                }
            }
        } catch (MalformedURLException m) {
            System.out.println("MalformedURLException 异常");
            m.printStackTrace();
        }
        return null;
    }

    /**
     * 功能描述：
     * 获取稳定的url
     * getFinalUrl是获取网址经过跳转之后的url地址，
     * 如果没有跳转就返回原来的url。
     * 防止有些网址会出现跳转的情况，
     * 所以先搞到跳转之后的网址在进行获取。
     *
     * @param:网页地址
     * @return:网页地址
     */
    public static String getFinalUrl(String webUrl) {
        HttpURLConnection connection = null;
        try {
            connection = getConnection(webUrl);
            connection.connect();

            // 是否跳转，若跳转则跟踪到跳转页面
            if (connection.getResponseCode() == HttpURLConnection.HTTP_MOVED_PERM
                    || connection.getResponseCode() == HttpURLConnection.HTTP_MOVED_TEMP) {

                String location = connection.getHeaderField("location");
                if (!location.contains("http")) {
                    location = webUrl + "/" + location;
                }
                return location;
            }
        } catch (Exception e) {
            System.err.println("获取跳转链接超时，返回原链接" + webUrl);
        } finally {
            if (connection != null) {
                connection.disconnect();
            }
        }
        return webUrl;
    }

    // 获取一个连接
    private static HttpURLConnection getConnection(String webUrl) throws IOException {
        URL url = new URL(webUrl);
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
        connection.setInstanceFollowRedirects(false);
        connection.addRequestProperty("User-Agent",
                "Mozilla/5.0 (Windows; U; Windows NT 5.1; zh-CN; rv:1.9.2.8) Firefox/3.6.8");
        connection.setConnectTimeout(5000);
        connection.setReadTimeout(5000);

        return connection;
    }

    // 获取截止到head尾标签的文本
    private static String getHead(String webUrl) {
        HttpURLConnection connection = null;
        BufferedReader reader = null;

        try {
            connection = getConnection(webUrl);
            connection.connect();
            reader = new BufferedReader( new InputStreamReader( connection.getInputStream() ) );

            StringBuilder headBuilder = new StringBuilder();
            String line;

            while ( ( line = reader.readLine() ) != null ) {
                Matcher matcher = HEAD_END_PATTERN.matcher( line );
                if (matcher.find()) {
                    break;
                }
                headBuilder.append(line);
            }

            return headBuilder.toString();

        } catch (IOException i) {
            i.printStackTrace();
            return null;
        } finally {
            try {
                if ( reader != null ) {
                    reader.close();
                }
                if ( connection != null ) {
                    connection.disconnect();
                }
            }
            catch ( IOException e ) {
                e.printStackTrace();
            }
        }
    }
}



