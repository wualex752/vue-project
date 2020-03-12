set -e

npm run build
cd dist
git init
git add -A
git commit -m 'Deploy'
git push -f https://github.com/wualex752/vue-project.git master:gh-pages
cd -