# TS-UI-LIB

原生 TypeScript 开发的 UI 组件库,使用 vite 构建,rollup 打包,适用于各种前端框架.

## 解决报错

1. ts(2564) 属性“\_oAlert”没有初始化表达式，且未在构造函数中明确赋值。

> 把`tsconfig.json`文件`compilerOptions.strict`改为`false`

2. ts(2322) 不能将类型“HTMLElement | null”分配给类型“HTMLElement”。
   不能将类型“null”分配给类型“HTMLElement”。

> 通过类型断言解决 `this._oAlert = document.querySelector('.alert') as HtmlElement`

3. ts(1259) 模块 ""e:/VSCode/ts-ui-lib/node_modules/@types/jquery/index"" 只能在使用 "allowSyntheticDefaultImports" 标志时进行默认导入

> 把`tsconfig.json`文件`compilerOptions.esModuleInterop`改为`true`,然后重新运行项目
