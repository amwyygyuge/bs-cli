const inquirer = require('inquirer')
const latestVersion = require('latest-version')
const gitPath = `amwyygyuge/react-component-template`
const isSubstitute = true

const prompt = (projectName) =>
  inquirer.prompt([
    {
      name: 'projectName',
      message: '项目的名称',
      default: projectName
    },
    {
      name: 'projectVersion',
      message: '项目的版本号',
      default: '1.0.0'
    },
    {
      name: 'projectDescription',
      message: '项目的简介',
      default: `A project named ${projectName}`
    },
    {
      name: 'projectUseIgroot',
      message: '使用igroot',
      default: true,
      type: 'confirm'
    }
  ]).then(async ({ projectName, projectVersion, projectDescription, projectUseIgroot }) => {
    if (projectUseIgroot) {
      const igrootVersion = await latestVersion('igroot')
      return {
        projectName,
        projectVersion,
        projectDescription,
        projectUseIgroot,
        igrootVersion
      }
    } else {
      return {
        projectName,
        projectVersion,
        projectDescription,
        projectUseIgroot
      }
    }
  })


module.exports = { gitPath, prompt, isSubstitute }