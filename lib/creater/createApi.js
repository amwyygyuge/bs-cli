const inquirer = require('inquirer')
const ora = require('ora')

module.exports = root =>
	inquirer
		.prompt([
			{
				name: 'api_url',
				message: '请输入项目的 GraphQL 地址'
			}
		])
		.then(async ({ apiUrl }) => {
			const loading = ora(`正在从 ${apiUrl} 拉取数据，请稍后。`)
			loading.start()

			// todo 处理api文件生成
		})
