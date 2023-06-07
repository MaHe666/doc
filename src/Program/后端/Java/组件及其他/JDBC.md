---
title: JDBC
order: 10
---

```xml
<!--mysql驱动-->
<dependency>
	<groupId>mysql</groupId>
	<artifactId>mysql-connector-java</artifactId>
	<version>5.1.49</version>
</dependency>
```

## 用法

```java
import java.sql.*;

public class Main {
    public static void main(String[] args) throws ClassNotFoundException, SQLException {
        /*
         * 1，加载驱动
         * 常规加载驱动语法
         * DriverManager.registerDriver(new com.mysql.jdbc.Driver());
         *
         * 推荐使用下面的固定写法，这个写法与 注解和反射 知识有关
         */
        Class.forName("com.mysql.jdbc.Driver");

        /*
         * 2，用户信息和URL
         * useUnicode=true           使用中文编码
         * characterEncoding=utf8    字符集使用UTF-8
         * useSSL=true               使用安全的链接
         * */
        String url = "jdbc:mysql://localhost:3306/test?useUnicode=true&characterEncoding=utf8&useSSL=true";
        String username = "root";   //数据库用户名
        String password = "root";       //数据库密码

        /*
         * 3，连接成功，返回一个数据库对象，
         * 连接成功，connection代表数据库
         */
        Connection connection = DriverManager.getConnection(url, username, password);

        // sql
        String sql = "select * from test";

        /*
         * 4，执行SQL的对象，执行SQL的对象
         *
         * 以下语句不安全
         * Statement statement = connection.createStatement();
         *
         * PreparedStatement 防止 SQL 注入的本质，把传递进来的参数当做字符
         * 假设其中存在转义字符，比如说 ' 会被直接转义
         * 
         * 获取对象时直接传入sql，进行预编译
         */
        PreparedStatement prepareStatement = connection.prepareStatement(sql);

        /*
         * 5，执行SQL
         * sql已经预编译过了，直接使用就可以
         */
        ResultSet resultSet = prepareStatement.executeQuery();//查询操作，返回结果集 ResultSet
        prepareStatement.executeUpdate();//插入，更新，删除都可以用这个，返回一个受影响的行数
        prepareStatement.execute(); //可以操作任何语句
        prepareStatement.executeBatch(); //同时操作多个语句
        
        while(resultSet.next()){
            //getObject()   参数是字段名
            System.out.println("id="+resultSet.getObject("id"));
            System.out.println("id="+resultSet.getObject("name"));
            System.out.println("id="+resultSet.getObject("password"));
        }
        
        //释放连接（关闭连接），先开后关原则
        resultSet.close();
        prepareStatement.close();
        connection.close();

    }
}
```

## 封装配置文件并读取

**db.properties**

```
driver=com.mysql.jdbc.Driver
url=jdbc:mysql://localhost:3306/test?useUnicode=true&characterEncoding=utf8&useSSL=true
username=root
password=root
```

**JdbcUtils.java**
```java
import java.io.IOException;
import java.io.InputStream;
import java.sql.*;
import java.util.Properties;

public class JdbcUtils {

    private static String driver = null;
    private static String url = null;
    private static String username = null;
    private static String password = null;

    //src目录下的配置文件都可以通过反射来拿到
    static{

        try{
            //获取类加载器，获取资源
            InputStream in = JdbcUtils.class.getClassLoader().getResourceAsStream("db.properties");
            Properties properties = new Properties();
            //配置文件的信息现在就在 properties 对象里面了
            properties.load(in);

            driver = properties.getProperty("driver");
            url = properties.getProperty("url");
            username = properties.getProperty("username");
            password = properties.getProperty("password");

            //驱动只用加载一次
            Class.forName(driver);

        } catch (IOException i) {
            i.printStackTrace();
        } catch (ClassNotFoundException c) {
            c.printStackTrace();
        }

    }

    //获取连接
    public static Connection getConnection() throws SQLException{
        return DriverManager.getConnection(url,username,password);
    }

    //释放连接
    public static void release(Connection conn, Statement st, ResultSet rs){
        if (rs!=null){
            try {
                rs.close();
            } catch (SQLException throwables) {
                throwables.printStackTrace();
            }
        }
        if (st!=null){
            try {
                st.close();
            } catch (SQLException throwables) {
                throwables.printStackTrace();
            }
        }
        if (conn!=null){
            try {
                conn.close();
            } catch (SQLException throwables) {
                throwables.printStackTrace();
            }
        }
    }
}
```

## 操作事务

通知数据库开启事务，关闭自动提交

```java
connection.setAutoCommit(false);
```

事务提交

```java
connection.commit();
```

事务回滚

```java
connection.rollback();
```

