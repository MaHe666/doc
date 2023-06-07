import { navbar } from "vuepress-theme-hope";

export const defaultNavbar = navbar([
  {
    text: "前端", prefix: "/Program/前端",
    children: [
      {
        text: "HTML",
        icon: "HTML5",
        link: "/HTML",
      },
      {
        text: "CSS",
        icon: "CSS3",
        link: "/CSS",
      },
      {
        text: "JavaScript",
        icon: "JavaScript",
        link: "/JavaScript",
      },
      {
        text: "Vue.js",
        icon: "Vue-js",
        link: "/Vue.js",
      },
      {
        text: "React.js",
        icon: "React-js",
        link: "/React.js",
      },
      {
        text: "uni-app",
        link: "/uni-app",
      },
      {
        text: "Node.js",
        icon: "Node-js",
        link: "/Node.js",
      },
      {
        text: "TypeScript",
        icon: "TypeScript",
        link: "/TypeScript",
      },
      {
        text: "UI框架及组件",
        link: "/UI框架及组件",
      },
      {
        text: "Android",
        icon: "Android",
        link: "/Android",
      },
      {
        text: "IOS",
        icon: "Apple",
        link: "/IOS",
      },
    ]
  },
  {
    text: "后端", prefix: "/Program/后端",
    children: [
      {
        text: "Java",
        icon: "Java",
        link: "/Java",
      },
      {
        text: "Python",
        icon: "Python",
        link: "/Python",
      },
      {
        text: "C语言",
        icon: "C",
        link: "/C语言",
      },
      {
        text: "C++",
        icon: "Cpp",
        link: "/Cpp",
      },
      {
        text: "C#",
        icon: "CSharp",
        link: "/CSharp",
      },
    ]
  },
  {
    text: "数据库", prefix: "/Program/数据库",
    children: [
      {
        text: "RDBMS",
        prefix: "/RDBMS",
        children: [
          {
            text: "MySQL",
            icon: 'MySQL',
            link: '/MySQL'
          },
          {
            text: "Oracle",
            icon: "Oracle",
            link: '/Oracle'
          },
          {
            text: "KingBaseES",
            link: '/KingBaseES'
          },
          {
            text: "SQL Server",
            icon: "SQLServer",
            link: '/SQLServer'
          },
          {
            text: "PostgreSQL",
            icon: "PostgreSQL",
            link: '/PostgreSQL'
          },
        ]
      },
      {
        text: "NoSQL",
        prefix: "/NoSQL",
        children: [
          {
            text: "Redis",
            icon: 'Redis',
            link: '/Redis'
          },
          {
            text: "ElasticSearch",
            icon: "ElasticSearch",
            link: '/ElasticSearch'
          },
          {
            text: "MongoDB",
            icon: "MongoDB",
            link: '/MongoDB'
          },
        ]
      }
    ]
  },
  {
    text: "运维相关", prefix: "/Program/运维相关",
    children: [
    
      {
        text: "Git",
        icon: "Git",
        link: "/Git",
      },
      {
        text: "SVN",
        icon: "Subversion",
        link: "/SVN",
      },
      {
        text: "Ngrok",
        link: "/Ngrok",
      },
      {
        text: "Tomcat",
        icon: "Tomcat",
        link: "/Tomcat",
      },
      {
        text: "JMeter",
        icon: "Apache",
        link: "/JMeter",
      },
      {
        text: "Jad",
        link: "/Jad",
      },
      {
        text: "Nginx",
        icon: "Nginx",
        link: "/Nginx",
      },
      {
        text: "Docker",
        icon: "Docker",
        link: "/Docker",
      },
      {
        text: "操作系统",
        prefix: "/操作系统",
        children: [
          {
            text: "Linux",
            icon: "Linux",
            link: "/Linux",
          },
          {
            text: "Windows",
            icon: "Windows",
            link: "/Windows",
          },
          {
            text: "MacOS",
            icon: "Apple",
            link: "/MacOS",
          },
          {
            text: "中标麒麟",
            link: "/中标麒麟",
          },
        ]
      },
    ]
  },
  {
    text: "其他", prefix: "/Other",
    children: [
      {
        text: "网站收藏",
        link: "/网站收藏",
      },
      {
        text: "软件使用",
        link: "/软件使用",
      },
      {
        text: "编程相关",
        link: "/编程相关"
      },
      {
        text: "文档框架",
        link: "/文档框架"
      },
      {
        text: "Screeps:World",
        link: "/ScreepsWorld"
      },
      {
        text: "帆软",
        link: "/帆软",
      }
    ]
  },

]);
