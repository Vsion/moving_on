# 用于记录一些git常用的命令

## 提交代码
git add .
git commit -m '<message>'
git push

## 远程仓库添加
git remote add upstream ~url
git remote -v

git remote rename <upstream> <upstream_new>
git remote -v

## 暂存 / 释放暂存
git stash
git stash pop

## 获取远程仓库代码
git fetch <upstream>
git merge <upstream>/<branch_name>
if (conflict){
  git stash
  git pull
  (resolve conflict)
  git add .
}
git commit -m 'merge <upstream/branch_name>'
git push

## 切换分支
git checkout <branch_name>

## 新建分支
git checkout -b <new_name>
git checkout -b <new_name> <origin/branch_name>
git checkout -b <new_name> <upstream/branch_name>

## 删除分支
git branch -d <branch_name>

...
## 暂时想到这么多 之前用TortoiseGit(win) SourceTree, 以后涉及到一些命令再来存一下...
...