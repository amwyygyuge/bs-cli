#!/usr/bin/env node
const program = require('commander')

program
	.version('1.0.0')
	.usage('<command> [project-name]')
	.command('init [project-name]', '创建新项目')
	.command('add [module-name]', '新增业务文件模板')
	.command('api', '新增graphiql接口文件')
	.command('config', '脚手架配置')
	.parse(process.argv)
