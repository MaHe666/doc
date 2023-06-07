---
title: VMware
order: 40
---

17版本许可证

>MC60H-DWHD5-H80U9-6V85M-8280D
>
>JU090-6039P-08409-8J0QH-2YR7F
>
>5Y012-8HL8P-0J8U0-032Q6-93KKF

## 安装完系统，启动时如果出现如下错误

`无法打开内核设备“\\.\VMCIDev\VMX”...	`

进入到对应虚拟机安装目录

编辑对应的`.vmx`文件

`vmci0.present = "TRUE"` 将TRUE 改为 FALSE 或者 直接将这行删除。

## Windows虚拟机 联网

虚拟机选择NAT连接

点击VMware菜单栏上面的编辑

查看哪个连接是NAT网络

回到物理机，进入网络和共享中心

更改适配器设置

让VMware的连接，连接物理机的提供网络

