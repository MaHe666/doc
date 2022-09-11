# Host: localhost  (Version: 5.7.35)
# Date: 2022-04-07 14:17:13
# Generator: MySQL-Front 5.3  (Build 4.214)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "course"
#

CREATE TABLE `course` (
  `cid` varchar(10) DEFAULT NULL,
  `cname` varchar(10) DEFAULT NULL,
  `tid` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "course"
#

INSERT INTO `course` VALUES ('01','语文','02'),('02','数学','01'),('03','英语','03');

#
# Structure for table "sc"
#

CREATE TABLE `sc` (
  `sid` varchar(10) DEFAULT NULL,
  `cid` varchar(10) DEFAULT NULL,
  `score` decimal(18,1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "sc"
#

INSERT INTO `sc` VALUES ('01','01',80.0),('01','02',90.0),('01','03',99.0),('02','01',70.0),('02','02',60.0),('02','03',80.0),('03','01',80.0),('03','02',80.0),('03','03',80.0),('04','01',50.0),('04','02',30.0),('04','03',20.0),('05','01',76.0),('05','02',87.0),('06','01',31.0),('06','03',34.0),('07','02',89.0),('07','03',98.0),('08','01',100.0);

#
# Structure for table "student"
#

CREATE TABLE `student` (
  `sid` varchar(10) DEFAULT NULL,
  `sname` varchar(10) DEFAULT NULL,
  `sage` datetime DEFAULT NULL,
  `ssex` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "student"
#

INSERT INTO `student` VALUES ('01','赵雷','1990-01-01 00:00:00','男'),('02','钱电','1990-12-21 00:00:00','男'),('03','孙风','1990-05-20 00:00:00','男'),('04','李云','1990-08-06 00:00:00','男'),('05','周梅','1991-12-01 00:00:00','女'),('06','吴兰','1992-03-01 00:00:00','女'),('07','郑竹','1989-07-01 00:00:00','女'),('08','王菊','1990-01-20 00:00:00','女');

#
# Structure for table "teacher"
#

CREATE TABLE `teacher` (
  `tid` varchar(10) DEFAULT NULL,
  `tname` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "teacher"
#

INSERT INTO `teacher` VALUES ('01','张三'),('02','李四'),('03','王五');
