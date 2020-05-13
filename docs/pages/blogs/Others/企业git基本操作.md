---
title: 企业git基本操作
---

# git 操作指南

## ssh认证
1. 右键桌面git bash here
2. 输入以下代码，按步骤生成ssh公钥和私钥
```
ssh-keygen -t rsa -C "你的邮箱"
```
3. 打开保存私钥的文件夹将id_rsa.pub文件用文本打开，将公钥保存到coding个人设置中的ssh公钥选项中

## 身份认证
```
git config --global user.name "Your Name"
git config --global user.email "email@example.com"
```
## 新建分支
```
git checkout -b 分支名
```
## 查看本地分支
```
Git branch -a
```
## 删除本地分支
```
Git branch -d 分支名
```
## 切换分支
```
git checkout 分支名
```
## 拉取远程分支
```
// 初始化git 
git init   
// 连接远程仓库（ssh，若没有做ssh认证就先去认证） 
git remote add origin git@e.coding.net:custouch/Custouch.TempResource.git
// 获取分支
git fetch origin 分支名
// 切换到下载的分支
Git checkout 分支名
```
## 显示git历史
```
Git log
```
## 上传到指定分支
```
// 拉取远程分支到本地并切换到本地指定分支
git fetch origin branch_name
git checkout branch_name
// 将修改内容加入缓存区
Git add .
// 添加说明
Git commit -m 说明
// 上传
Git push origin 分支名
// 本地关联远程分支
git push --set-upstream origin signBackend
```


