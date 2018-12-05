const program = require('commander')
const choseTemplate = require('../lib/choseTemplate')
const creater = require('../lib/creater')
program
  .usage('<project-name>')
  .parse(process.argv)

// 根据输入，获取项目名称
const project_name = program.args[0]
if (!project_name) {
  program.help()
  return
}
const execute = creater(
  choseTemplate,
  { name: project_name }
)

execute()
