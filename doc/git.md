# 用于记录一些git常用的命令

## 提交代码
```bash
git add .
git commit -m '<_message>'
git push
```

## 远程仓库添加
```bash
git remote add upstream <_url>
git remote -v

git remote rename <_upstream> <upstream_new>
git remote -v
```
## 暂存 / 释放暂存
```bash
git stash
git stash pop
```
## 获取远程仓库代码
```bash
git fetch <_upstream>
git merge <_upstream>/<branch_name>
if (conflict){
  git stash
  git pull
  (resolve conflict)
  git add .
}
git commit -m 'merge <upstream/branch_name>'
git push
```
## 切换分支
```bash
git checkout <branch_name>
```
## 新建分支
```bash
git checkout -b <new_name>
git checkout -b <new_name> <origin/branch_name>
git checkout -b <new_name> <upstream/branch_name>
```
## 删除分支
```bash
git branch -d <branch_name>
```
...
## 暂时想到这么多 之前用TortoiseGit(win) SourceTree, 以后涉及到一些命令再来存一下...
...