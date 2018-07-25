# 用于记录一些git常用的命令

## 提交代码
git add .<br />
git commit -m '<_message>'<br />
git push<br />

## 远程仓库添加
git remote add upstream <_url><br />
git remote -v<br />

git remote rename <_upstream> <upstream_new><br />
git remote -v<br />

## 暂存 / 释放暂存
git stash<br />
git stash pop<br />

## 获取远程仓库代码
git fetch <_upstream><br />
git merge <_upstream>/<branch_name><br />
if (conflict){<br />
  git stash<br />
  git pull<br />
  (resolve conflict)<br />
  git add .<br />
}<br />
git commit -m 'merge <upstream/branch_name>'<br />
git push<br />

## 切换分支
git checkout <branch_name><br />

## 新建分支
git checkout -b <new_name><br />
git checkout -b <new_name> <origin/branch_name><br />
git checkout -b <new_name> <upstream/branch_name><br />

## 删除分支
git branch -d <branch_name><br />

...
## 暂时想到这么多 之前用TortoiseGit(win) SourceTree, 以后涉及到一些命令再来存一下...
...