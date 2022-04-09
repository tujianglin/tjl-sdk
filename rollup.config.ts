import { defineConfig } from 'rollup'
import { join } from 'path'
import alias from '@rollup/plugin-alias' // 将模块中’@'别名替换为’packages’目录；
import commonjs from '@rollup/plugin-commonjs' // 支持 commonjs
import { nodeResolve } from '@rollup/plugin-node-resolve' // 帮助 Rollup 查找外部模块，然后导入（rollup无法识别 node_modules 里面的包）
import ts from 'rollup-plugin-typescript2' // 处理 ts
import babel from '@rollup/plugin-babel' // 兼容老版本语法
import { terser } from 'rollup-plugin-terser' // 压缩代码
import pkg from './package.json'

function resolve(pathName) {
  return join(__dirname, '.', pathName)
}

const isProd = process.env.NODE_ENV === 'prod'

const plugins = [
  commonjs(),
  nodeResolve(),
  babel({
    exclude: 'node_modules/**', // 防止打包 node_modules 下文件
    babelHelpers: "bundled"
  }),
  alias({
    entries: [{ find: '@', replacement: resolve('packages') }]
  }),
  ts({
    tsconfig: resolve('tsconfig.json') // 导入 ts 配置
  })
]

if (isProd) {
  plugins.push(terser())
}

export default defineConfig({
  input: resolve('packages/main.ts'),
  output: {
    file: resolve(pkg.main),
    name: 'tjl-sdk',
    format: 'umd'
  },
  plugins
})