```
Last login: Thu May 14 13:55:47 on ttys000
oleksandra@Oleksandras-MacBook-Air ~ % mkdir Hillel
oleksandra@Oleksandras-MacBook-Air ~ % cd Hillel 
oleksandra@Oleksandras-MacBook-Air Hillel % git clone https://github.com/oleksandra-babii/aqa-advanced.git
Cloning into 'aqa-advanced'...
warning: You appear to have cloned an empty repository.
oleksandra@Oleksandras-MacBook-Air Hillel % cd aqa-advanced 
oleksandra@Oleksandras-MacBook-Air aqa-advanced % echo "# aqa-advanced" >> README.md
oleksandra@Oleksandras-MacBook-Air aqa-advanced % git status
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
    README.md

nothing added to commit but untracked files present (use "git add" to track)
oleksandra@Oleksandras-MacBook-Air aqa-advanced % git add .
oleksandra@Oleksandras-MacBook-Air aqa-advanced % git commit -m "docs: Initial commit with README.md"
[main (root-commit) dd68ea4] docs: Initial commit with README.md
 1 file changed, 1 insertion(+)
 create mode 100644 README.md
oleksandra@Oleksandras-MacBook-Air aqa-advanced % git push -u origin main
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Writing objects: 100% (3/3), 257 bytes | 257.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/oleksandra-babii/aqa-advanced.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.
oleksandra@Oleksandras-MacBook-Air aqa-advanced % git checkout -b feat-git-basics
Switched to a new branch 'feat-git-basics'
oleksandra@Oleksandras-MacBook-Air aqa-advanced % mkdir git_basics
oleksandra@Oleksandras-MacBook-Air aqa-advanced % echo "Now I can use git" >> git_basics/README.md
oleksandra@Oleksandras-MacBook-Air aqa-advanced % git status
On branch feat-git-basics
Untracked files:
  (use "git add <file>..." to include in what must be committed)
    git_basics/

nothing added to commit but untracked files present (use "git add" to track)
oleksandra@Oleksandras-MacBook-Air aqa-advanced % git add .
oleksandra@Oleksandras-MacBook-Air aqa-advanced % git commit -m "docs: Add README.md file in git_basics folder"
[feat-git-basics 8305e9d] docs: Add README.md file in git_basics folder
 1 file changed, 1 insertion(+)
 create mode 100644 git_basics/README.md
oleksandra@Oleksandras-MacBook-Air aqa-advanced % git push
fatal: The current branch feat-git-basics has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin feat-git-basics

To have this happen automatically for branches without a tracking
upstream, see 'push.autoSetupRemote' in 'git help config'.

oleksandra@Oleksandras-MacBook-Air aqa-advanced % git push --set-upstream origin feat-git-basics
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 10 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (4/4), 383 bytes | 383.00 KiB/s, done.
Total 4 (delta 0), reused 0 (delta 0), pack-reused 0
remote: 
remote: Create a pull request for 'feat-git-basics' on GitHub by visiting:
remote:      https://github.com/oleksandra-babii/aqa-advanced/pull/new/feat-git-basics
remote: 
To https://github.com/oleksandra-babii/aqa-advanced.git
 * [new branch]      feat-git-basics -> feat-git-basics
branch 'feat-git-basics' set up to track 'origin/feat-git-basics'.
```
