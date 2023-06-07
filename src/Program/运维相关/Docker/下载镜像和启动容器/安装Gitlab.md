---
title: Gitlab
order: 30
---

```bash
docker pull gitlab/gitlab-ce:latest
```

在宿主机递归创建目录，即使上级目录不存在，会按目录层级自动创建目录

```bash
mkdir -p /usr/local/gitlab/config

mkdir -p /usr/local/gitlab/logs

mkdir -p /usr/local/gitlab/data
```

创建并编辑 `gitlab_start.sh` 文件

```bash
touch gitlab_start.sh

vim gitlab_start.sh
```

将以下内容复制进去

```sh
#!/bin/sh
GITLAB_HOME=/usr/local/gitlab
sudo docker run -dp 443:443 -p 8088:80 -p 10080:22 -h localhost \
    --name gitlab \
    --restart always \
    --volume $GITLAB_HOME/config:/etc/gitlab \
    --volume $GITLAB_HOME/logs:/var/log/gitlab \
    --volume $GITLAB_HOME/data:/var/opt/gitlab \
    gitlab/gitlab-ce:latest
```

在该文件目录下，授予 `gitlab_start.sh` 执行权限

```bash
chmod +x gitlab_start.sh
```

执行脚本

```bash
./gitlab_start.sh
```

修改gitlab配置文件

```bash
vi /usr/local/gitlab/config/gitlab.rb

gitlab_rails['gitlab_shell_ssh_port'] = 10080

external_url 'http://localhost'
```
## 应用配置，重启服务

进入gitlab bash

```bash
docker exec -it gitlab bash
```

重新应用gitlab的配置

```bash
gitlab-ctl reconfigure
```

重启gitlab服务

```bash
gitlab-ctl restart
```

查看gitlab运行状态

```bash
gitlab-ctl status
```

## GitLab默认密码

初次安装Gitlab时，密码放在了一个临时文件中了

在container里面： `/etc/gitlab/initial_root_password`

这个文件将在首次执行reconfigure后24小时自动删除

进去之后需要修改密码