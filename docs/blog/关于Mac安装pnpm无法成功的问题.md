---
title: 关于在Mac上使用独立脚本安装pnpm无法成功的问题
author: Koala
createTime: 2024/06/25 18:29:33
permalink: /article/e6vy0vwq/
---

### 官方的安装命令

官方安装文档地址：https://pnpm.io/zh/installation

```bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
```
如果您没有安装 curl，也可以使用 wget：
```bash
wget -qO- https://get.pnpm.io/install.sh | sh -
```


### 安装不成功的原因
安装脚本 `install.sh` 中会去GitHub上下载对应的二进制文件，这一步会一直超时，显示下面的信息（实测即使挂了梯子🪜也不行）
```bash
==> Downloading pnpm binaries 9.4.0
```


### 解决方法

1. 手动下载安装脚本到本地目录：[下载链接](https://get.pnpm.io/install.sh)

2. 手动下载对应的pnpm二进制文件到本地目录：[pnpm releases](https://github.com/pnpm/pnpm/releases) 在这里，可以自行下载需要的版本

3. 打开第一步下载好的安装脚本 `install.sh` ，替换其中的两句命令：

    * 找到`archive_url="https://github.com...` 这一句，把地址替换为你刚刚下载的二进行文件的本机目录
    ```bash
    archive_url="/Users/yourlocalpath/pnpm/pnpm-macos-x64"
    ```

    * 再找到 `download "$archive_url" > "$tmp_dir/pnpm" || return 1` 这一句，替换为：
    ```bash
    cp "$archive_url" "$tmp_dir/pnpm" || return 1
    ```

4. 依照上述步骤改好后，在`install.sh` 文件的同级目录下运行以下命令:
    ```bash
    bash install.sh
    ```


即可安装成功！


### 使用独立脚本安装的好处
不需要依赖node环境！

即使没有安装 Node.js，也可以使用脚本方式安装 pnpm

当前如果觉得脚本安装操作麻烦，也可以直接使用 npm的方式：`npm install -g pnpm`。但这样安装有个问题，就是当你开发环境中存在需要使用`nvm`切换不同的node版本进行开发的时候，每次切换版本 还得重新安装一下 pnpm 。