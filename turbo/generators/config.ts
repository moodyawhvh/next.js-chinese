import { type NodePlopAPI } from 'node-plop'
import path from 'path'
import * as helpers from './helpers'

// `plop test` 生成器的问答结果:应用目录、测试类型与测试名
interface TestResponse {
  appDir: string
  type: 'e2e' | 'production' | 'development' | 'unit'
  name: string
}

// `plop error` 生成器的问答结果:错误文档的四要素
interface ErrorResponse {
  name: string
  title: string
  why: string
  fix: string
}

// 校验器工厂:确保必填字段非空,否则返回 "<字段> is required" 提示
function validateNonEmptyString(field: string) {
  return function (value: string) {
    if (/.+/.test(value)) {
      return true
    }
    return `${field} is required`
  }
}

// 注册 plop 代码生成器(通过 `turbo plop` 调用)
export default function generator(plop: NodePlopAPI): void {
  // 把自定义 helper 注册为 handlebars 模板助手,供模板使用
  helpers.init(plop)

  // 生成器一:创建一个新测试脚手架
  plop.setGenerator('test', {
    description: 'Create a new test',
    prompts: [
      {
        type: 'confirm',
        name: 'appDir',
        message: 'Is this test for the app directory?',
        default: true,
      },
      {
        type: 'input',
        name: 'name',
        message: 'Test name',
        validate: validateNonEmptyString('test name'),
      },
      {
        type: 'list',
        name: 'type',
        message: 'Test type',
        choices: [
          {
            name: 'e2e - Test "next dev" and "next build && next start"',
            value: 'e2e',
          },
          {
            name: 'production - Test "next build && next start"',
            value: 'production',
          },
          { name: 'development - Test "next dev"', value: 'development' },
          { name: 'unit - Test individual files', value: 'unit' },
        ],
      },
    ],
    actions: function (answers) {
      const { appDir, type, name } = answers as TestResponse
      const basePath = plop.getDestBasePath()
      const testRoot = path.join(basePath, 'test')
      // app 目录的测试放在 app-dir/ 子目录下
      const appDirPath = appDir ? 'app-dir/' : ''

      // 单元测试模板在 test/unit,其余在 test/e2e
      const templatePath = path.join(
        testRoot,
        type === 'unit' ? 'unit' : 'e2e',
        appDirPath,
        'test-template'
      )

      const targetPath = path.join(testRoot, type, appDirPath)

      // tsconfig / next-env.d.ts 取自 create-next-app 的空模板
      const cnaTemplatePath = path.join(
        basePath,
        'packages/create-next-app/templates',
        appDir ? 'app-empty' : 'default-empty',
        'ts'
      )

      return [
        // 1. 把模板目录下的所有文件复制到目标测试目录
        {
          type: 'addMany',
          templateFiles: path.join(templatePath, '**/*'),
          base: templatePath,
          destination: targetPath,
        },
        // 2. 写入 tsconfig.json,并把测试文件加入 exclude,
        //    避免脚手架自身的 TS 检查与测试代码冲突
        {
          type: 'add',
          templateFile: path.join(cnaTemplatePath, 'tsconfig.json'),
          path: path.join(targetPath, name, 'tsconfig.json'),
          transform: (template: string) =>
            template.replace(
              '"exclude": ["node_modules"]',
              '"exclude": ["node_modules", "**/*.test.ts", "**/*.test.tsx"]'
            ),
        },
        // 3. 写入 next-env.d.ts,提供 Next.js 的全局类型声明
        {
          type: 'add',
          templateFile: path.join(cnaTemplatePath, 'next-env.d.ts'),
          path: path.join(targetPath, name, 'next-env.d.ts'),
        },
      ]
    },
  })

  // 生成器二:创建一篇新的错误文档(errors/*.mdx)
  plop.setGenerator('error', {
    description: 'Create a new error document',
    prompts: [
      {
        name: 'name',
        type: 'input',
        message: 'Url path with dashes. E.g. circular-structure',
        validate: validateNonEmptyString('path'),
      },
      {
        name: 'title',
        type: 'input',
        message: 'Title for the error. E.g. Circular Structure',
        validate: validateNonEmptyString('title'),
      },
      {
        name: 'why',
        type: 'input',
        message: 'What caused the error to happen?',
        validate: validateNonEmptyString('why'),
      },
      {
        name: 'fix',
        type: 'input',
        message: 'What are the possible ways to fix it?',
        validate: validateNonEmptyString('fix'),
      },
    ],
    actions: function (answers) {
      const { name } = answers as ErrorResponse
      const errorsRoot = path.join(plop.getDestBasePath(), 'errors')

      return [
        // 根据 errors/template.txt 模板生成 <名称>.mdx 错误文档
        {
          type: 'add',
          path: path.join(errorsRoot, `{{ toFileName name }}.mdx`),
          templateFile: path.join(errorsRoot, `template.txt`),
        },
        // 完成后打印该错误文档的线上链接
        `Url for the error: https://nextjs.org/docs/messages/${helpers.toFileName(
          name
        )}`,
      ]
    },
  })
}
