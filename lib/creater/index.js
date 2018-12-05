const path = require('path')
const download = require('./download')
const resolovePath = require('./resolovePath')
const createApi = require('./createApi')
const substituteTemplate = require('./substituteTemplate')
const ora = require('ora')
const chalk = require('chalk')
const logSymbols = require('log-symbols')

const creater = (choseTemplate, { name }) => {
  
  return async () => {
    try {
      // 选择项目模板
      const { gitPath, prompt, isSubstitute = false, isCreateApi = false } = await choseTemplate()
      // 目标目录处理
      const projectRoot = await resolovePath(name)
      const root = path.resolve(process.cwd(), projectRoot)

      const spinner = ora(`正在下载项目模板，源地址：${gitPath}`)
      spinner.start()

      // 拉取仓库 返回路径
      const resultPath = await download(gitPath, root)
      spinner.succeed()
      console.log(logSymbols.success, chalk.green('拉取成功:)'));
      // 是否有模板替换
      if (isSubstitute) {
        // 询问用户信息
        const info = await prompt(name)
        // 根据信息处理文件
        await substituteTemplate(info, resultPath, resultPath)
      }
      // 是否有api生成需求

      if (isCreateApi) {
        await createApi(root)
      }

      // 结束
      console.log(chalk.green('cd ' + projectRoot + '\nnpm install\nnpm run dist'))
    } catch (err) {
      // 错误处理
      console.log(logSymbols.error, chalk.red(err));
      return err
    }
  }
}
module.exports = creater