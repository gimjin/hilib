module.exports = {
  '*.{js,vue}': ['cross-env NODE_ENV=production eslint --fix', 'git add'],
  '*.css': ['stylelint --fix', 'git add']
}
