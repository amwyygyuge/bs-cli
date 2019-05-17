const inquirer = require('inquirer')
const business = require('./../config/business')
module.exports = () =>
	inquirer
		.prompt([
			{
				name: 'business',
				message: '选择你想要的项目模板。',
				type: 'list',
				choices: business
			}
		])
		.then(({ business: { gitPath, isSubstitute, prompt, isCreateApi } }) => {
			return { gitPath, isSubstitute, prompt, isCreateApi }
		})
