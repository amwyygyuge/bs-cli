const program = require('commander')
const choseTemplate = require('../lib/choseTemplate')
const creater = require('../lib/creater')
program.usage('<project-name>').parse(process.argv)

// 根据输入，获取项目名称
const [projectName] = program.args
if (!projectName) {
	program.help()
	return
}
const execute = creater(choseTemplate, { name: projectName })

execute()
