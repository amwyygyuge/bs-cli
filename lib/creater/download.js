const download = require('download-git-repo')
module.exports = function (gitPath, path) {
  return new Promise((resolve, reject) => {
    download(gitPath, path, { clone: true }, (err) => {
      if (err) {
        reject(err)
      } else {
        resolve(path)
      }
    })
  })
}