#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# git add .
# git commit -m 'Auto deploy commit. Never mind (<ゝω・) ☆'
# git push

# 构建
npm run build
# cd 到构建输出的目录下 
cd dist

# 部署到自定义域域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'This is auto demo deploy commit (*´∀`)~♥'


# 部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

git push -f https://github.com/0445814/week3.git master:demo

cd -