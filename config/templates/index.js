const projectTemplate = require('./project-template')
const reactComponentTemplate = require('./react-component-template')
const nodeServersProject = require('./node-servers-project')
module.exports = [
	{
		name: '项目模板',
		value: projectTemplate
	},
	{
		name: 'react组件',
		value: reactComponentTemplate
	},
	{
		name: 'node模板',
		value: nodeServersProject
	}
]
