const nextJest = require('next/jest')
const { withGateTransformer } = require('./test/lib/gate/jest-transformer')

// 用 next/jest 创建基础 Jest 配置(内置 SWC 转换、路径别名等 Next.js 约定)
const createJestConfig = nextJest()

// 传给 Jest 的自定义配置
/** @type {import('jest').Config} */
const customJestConfig = {
  // 根据 CI 环境变量标注当前测试运行器:webpack 或 Turbopack
  displayName: process.env.IS_WEBPACK_TEST ? 'webpack' : 'Turbopack',
  // 匹配各语言的单元测试文件
  testMatch: ['**/*.test.js', '**/*.test.ts', '**/*.test.jsx', '**/*.test.tsx'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup-after-env.ts'],
  verbose: true,
  // 测试根目录指向 test/,roots 再把各包源码纳入扫描范围
  rootDir: 'test',
  roots: [
    '<rootDir>',
    '<rootDir>/../packages/next/src/',
    '<rootDir>/../packages/next-codemod/',
    '<rootDir>/../packages/eslint-plugin-internal/',
    '<rootDir>/../packages/font/src/',
    '<rootDir>/../packages/next-routing/',
  ],
  haste: {
    // 模块重名时直接抛错,避免警告日积月累污染日志输出。
    throwOnModuleCollision: true,
  },
  modulePathIgnorePatterns: [
    '/\\.next/',
    // 同一包存在多个 vendored 版本时,避免 jest-haste-map 报警告;
    // 同时也意味着 `compiled` 目录里的测试会被忽略。
    // 注意:Jest 不会在 modulePathIgnorePatterns 中规范化/解析路径,
    // 所以这里不能像 roots 那样加 <rootDir>/../ 前缀。
    'packages/next/src/compiled/',
    '<rootDir>/development/app-dir/non-context-aware-addon/bindings',
    '<rootDir>/development/app-dir/non-context-aware-addon/single-context-addon',
    '<rootDir>/development/app-dir/ssr-in-rsc/internal-pkg/',
    '<rootDir>/e2e/app-dir/self-importing-package/internal-pkg',
    '<rootDir>/e2e/app-dir/self-importing-package-monorepo/internal-pkg',
    '<rootDir>/e2e/app-dir/server-source-maps/fixtures/default/internal-pkg',
    '<rootDir>/e2e/app-dir/turbopack-reports/bindings',
    '<rootDir>/e2e/app-dir/turbopack-reports/native-addon',
    '<rootDir>/e2e/prerender-native-module/bindings',
    '<rootDir>/e2e/prerender-native-module/native-addon',
    '<rootDir>/e2e/prerender-native-module/native-addon-wrapper',
    '<rootDir>/e2e/transpile-packages-typescript-foreign/pkg',
    '<rootDir>/production/prerender-worker-threads/bindings',
    '<rootDir>/production/prerender-worker-threads/single-context-addon',
    '<rootDir>/production/standalone-mode/tracing-side-effects-false/foo',
    '<rootDir>/production/standalone-mode/tracing-static-files/foo',
    '<rootDir>/production/standalone-mode/tracing-unparsable/foo',
    '<rootDir>/production/supports-module-resolution-nodenext/pkg',
  ],
  modulePaths: ['<rootDir>/lib'],
  transformIgnorePatterns: ['/next[/\\\\]dist/', '/\\.next/'],
  moduleNameMapper: {
    '@next/font/(.*)': '@next/font/$1',
  },
}

// 检查环境变量是否要求开启测试报告;
// 若开启,则插入一个 reporter 生成 junit 报告用于上传。
//
// 重试不计入报告,避免同一条测试被重复上报;
// 我们的测试报告会把 flaky 测试(不重试时)直接上报为失败。
const enableTestReport = !!process.env.NEXT_JUNIT_TEST_REPORT

if (enableTestReport) {
  if (!customJestConfig.reporters) {
    customJestConfig.reporters = ['default']
  }

  // 按测试运行器把 junit 报告输出到不同目录
  let outputDirectory
  if (process.env.IS_TURBOPACK_TEST) {
    outputDirectory = '<rootDir>/turbopack-test-junit-report'
  } else if (process.env.NEXT_RSPACK) {
    outputDirectory = '<rootDir>/rspack-test-junit-report'
  } else {
    outputDirectory = '<rootDir>/test-junit-report'
  }

  customJestConfig.reporters.push([
    'jest-junit',
    {
      outputDirectory,
      reportTestSuiteErrors: 'true',
      uniqueOutputName: 'true',
      outputName: 'nextjs-test-junit',
      addFileAttribute: 'true',
    },
  ])
}

// 以这种方式导出 createJestConfig,确保 next/jest 能加载异步的 Next.js 配置
const createConfig = createJestConfig(customJestConfig)

module.exports = async function createConfigWithGates() {
  // `withGateTransformer` 把 `@gate` 注释指令的改写链在 next/jest 配置的
  // SWC 转换器之前,并保持 next/jest 的 SWC 选项作为唯一事实来源。
  // 参见 test/lib/gate/。
  return withGateTransformer(await createConfig())
}
