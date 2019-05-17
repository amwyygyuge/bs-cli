const fs = require('fs')
const glob = require('glob')
const path = require('path')
const inquirer = require('inquirer')
const resolovePath = projectName => {
	let next = undefined
	const list = glob.sync('*') // 遍历当前目录
	const rootName = path.basename(process.cwd())
	// 如果当前目录不为空
	if (list.length) {
		const file = list.filter(name => {
			const fileName = path.resolve(process.cwd(), path.join('.', name))
			const isDir = fs.statSync(fileName).isDirectory()
			return name === projectName && isDir
		})

		// 存在同名文件夹
		if (file.length !== 0) {
			next = Promise.reject(`项目${projectName}已经存在`)
		} else {
			next = Promise.resolve(projectName)
		}
	} else if (rootName === projectName) {
		// 当前目录为空
		// 目录名和项目名相同
		next = inquirer
			.prompt([
				{
					name: 'buildInCurrent',
					message: '当前目录为空，且目录名称和项目名称相同，是否直接在当前目录下创建新项目？',
					type: 'confirm',
					default: true
				}
			])
			.then(({ buildInCurrent }) => Promise.resolve(buildInCurrent ? '.' : projectName))
	} else {
		// 目录名和不相同
		next = Promise.resolve(projectName)
	}
	return next
}
module.exports = resolovePath
