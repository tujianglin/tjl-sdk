const { resolve, join } = require('path')
const fs = require('fs')

const rootPath = resolve(__dirname, '../')
const remotePath = resolve(rootPath, 'packages')
const outputFile = join(resolve(__dirname, '../'), `README.md`)

// API目录
const reg = new RegExp('(?<=@Description:)(.|\n)*?(?=(\n.\\*.@FilePath))')
// 方法名称
const regName = new RegExp('(?<=export.const.)(.|\n)*?(?=(.=.))', 'g')
// 方法描述
const regDes = new RegExp('(?<=@description:)(.|\n)*?(?=(\n.\\*.@author))', 'g')
// 方法案例
const regExample = new RegExp('(?<=@example)(.|\n)*?(?=(\\*/))', 'g')


fs.unlinkSync(outputFile)


const baseContent =
  fs.readFileSync(
    join(resolve(rootPath, 'build'), 'base.md'),
    'utf-8'
  ) + '\n'

fs.appendFileSync(outputFile, baseContent)

fs.readdir(remotePath, function (err, files) {
  if (err) {
    console.log(err)
    return
  }
  const filterFiles = files.filter(v => v !== 'index.ts')
  fs.appendFileSync(outputFile, `## API 目录` + '\n')
  filterFiles.forEach(function (filename) {
    const filedir = join(remotePath, `${filename}/index.ts`)
    fs.stat(filedir, function (err, stats) {
      if (!err) {
        if (stats.isFile()) {
          let content = fs.readFileSync(filedir, 'utf-8') + '\n\n'
          // 获取到 数据流 中满足正则部分内容
          console.log(content)
          const catalogue = '\n' + `### ${content.match(reg)[0]}` + '\n\n'
          const names = content.match(regName)
          const des = content.match(regDes)
          fs.appendFileSync(outputFile, catalogue)
          if (names) {
            names.forEach((v, i) => {
              fs.appendFileSync(outputFile, `- [${v}](#${v}) ${des[i]}` + '\n')
            })
          }
        } else if (stats.isDirectory()) {
          return false
        }
      }
    })
  })
  setTimeout(() => {
    fs.appendFileSync(outputFile, '\n' + `## API 说明` + '\n')
  }, 1000 * 2)
  setTimeout(() => {
    filterFiles.forEach(function (filename) {
      const filedir = join(remotePath, `${filename}/index.ts`)
      fs.stat(filedir, function (err, stats) {
        if (!err) {
          if (stats.isFile()) {
            let content = fs.readFileSync(filedir, 'utf-8') + '\n\n'
            const names = content.match(regName)
            const des = content.match(regDes)
            const examples = content.match(regExample)
            names && names.forEach((v, i) => {
              fs.appendFileSync(
                outputFile,
                '\n' +
                `### ${v}
              
${des[i]}

` +
                '```javascript' +
                `
${examples[i].trim()}` +
                '\n' +
                '```' +
                '\n'
              )
            })
          } else if (stats.isDirectory()) {
            return false
          }
        }
      })
    })
  }, 1000 * 4)
})