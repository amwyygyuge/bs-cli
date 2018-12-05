const inquirer = require('inquirer')
const templates = require('./../config/templates')
module.exports = () =>
  inquirer
    .prompt([
      {
        name: 'template',
        message: '选择你想要的项目模板。',
        type: 'list',
        choices: templates
      }
    ])
    .then(({ template: { gitPath, isSubstitute, prompt, isCreateApi } }) => { return { gitPath, isSubstitute, prompt, isCreateApi } })