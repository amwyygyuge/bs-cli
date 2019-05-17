const program = require('commander')
const choseBusiness = require('../lib/choseBusiness')
const creater = require('../lib/creater')
program.usage('<module-name>').parse(process.argv)

// 根据输入，获取项目名称
const { moduleName } = program.args
const [a, b] = program.args

if (!moduleName) {
	program.help()
	return
}
const execute = creater(choseBusiness, { name: moduleName })

execute()
