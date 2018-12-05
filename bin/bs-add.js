
const program = require('commander')
const choseBusiness = require('../lib/choseBusiness')
const creater = require('../lib/creater')
program
  .usage('<module-name>')
  .parse(process.argv)

// 根据输入，获取项目名称
const module_name = program.args[0]
if (!module_name) {
  program.help()
  return
}
const execute = creater(
  choseBusiness
  , { name: module_name }
)

execute()
