#!/bin/bash

# Exit on error
set -e

# Build the project
npm run build

# Navigate into the build output directory
cd dist

# Initialize a new Git repository
git init

# Configure Git for deployment
git config user.name "MERTULAS"
git config user.email "h.mert.ulas@gmail.com"

# Commit the "dist" directory contents
git add -A
git commit -m "Deploy to github page"

# Push to the "gh-pages" branch (make sure to replace "<username>" with your GitHub username)
git push -f git@github.com:MERTULAS/portfolio-project-v2.git master:gh-pages

# Cleanup: Remove the temporary Git repository and the "dist" directory
cd ..
rm -rf dist .git