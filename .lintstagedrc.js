module.exports = {
  '*.{js,vue}': ['eslint --fix', 'git add'],
  '*.css': ['stylelint --fix', 'git add']
}
