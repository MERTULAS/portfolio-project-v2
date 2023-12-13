#!/usr/bin/env sh

set -e

npm run build

cd dist

echo 'www.mertulas.dev' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/MERTULAS/portfolio-project-v2.git master:gh-pages

cd -