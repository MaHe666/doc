/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50735
 Source Host           : localhost:3306
 Source Schema         : mybatis_plus_test

 Target Server Type    : MySQL
 Target Server Version : 50735
 File Encoding         : 65001

 Date: 20/11/2021 20:22:21
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` bigint(20) NOT NULL COMMENT '主键',
  `name` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '名字',
  `age` int(11) NULL DEFAULT NULL COMMENT '年龄',
  `email` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '邮箱',
  `create_time` datetime(0) NULL DEFAULT NULL,
  `update_time` datetime(0) NULL DEFAULT NULL,
  `version` int(11) NOT NULL DEFAULT 1,
  `deleted` int(1) NOT NULL DEFAULT 0 COMMENT '逻辑删除',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, '456', 456, '456', NULL, '2021-11-13 13:55:42', 1, 0);
INSERT INTO `user` VALUES (2, 'mahe666', 2, 'm13234666930@163.com', NULL, '2021-11-13 14:47:10', 3, 0);
INSERT INTO `user` VALUES (3, '3', 3, '3', '1899-12-30 03:00:00', '1899-12-30 03:00:00', 1, 1);
INSERT INTO `user` VALUES (4, '4', 32, '4', '1899-12-30 04:00:00', '1899-12-30 04:00:00', 1, 0);
INSERT INTO `user` VALUES (5, '5', 22, '5', '1899-12-30 05:00:00', '1899-12-30 05:00:00', 1, 0);
INSERT INTO `user` VALUES (1459351681995825153, '123', 12, 'giaogiao', NULL, NULL, 1, 0);

SET FOREIGN_KEY_CHECKS = 1;
