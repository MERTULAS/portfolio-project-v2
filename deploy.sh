#!/bin/bash

set -e

npm run build

cd dist

git init

git config user.name "MERTULAS"
git config user.email "h.mert.ulas@gmail.com"

git add -A
git commit -m "Deploy to github page"

git push -f git@github.com:MERTULAS/portfolio-project-v2.git master:gh-pages

cd ..
rm -rf dist
