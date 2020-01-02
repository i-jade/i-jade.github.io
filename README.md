# VuePress Cli

## VuePress 博客搭建工具

基于 [Yur](https://github.com/cnguu/vuepress-theme-yur) 主题的 VuePress 博客快速搭建工具

## 准备

- 源码仓库（源码备份）
- 博客仓库（博客部署）

## 使用

### 下载

```bash
$ git clone https://github.com/cnguu/vuepress-cli.git
```

### 修改仓库地址

```bash
$ git remote set-url origin 源码仓库地址
```

### 保存源码

```bash
$ git add -A
$ git commit -m "commit"
$ git push
```

### 安装

```bash
$ yarn install
```

> 如果下载慢，使用下面命令全局加速

```bash
$ yarn config set registry https://registry.npm.taobao.org
```

### 部署

需要修改 `deploy.sh` 脚本

## 命令

| 命令 | 说明 |
| :-: | :-: |
| yarn start | 本地预览<br>http://127.0.0.1:2234 |
| yarn build | 编译 |
| yarn deploy | 部署 |

## 教程

- [从零开始搭建 VuePress 静态博客](https://gleehub.com/other/cong-ling-kai-shi-da-jian-vuepress-jing-tai-bo-ke.html)
- [vuepress-theme-yur 使用教程](https://gleehub.com/other/vuepress-theme-yur-shi-yong-jiao-cheng.html)

## 协议

[MIT](./LICENSE)