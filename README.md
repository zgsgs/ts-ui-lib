# TS-UI-LIB

原生 TypeScript 开发的 UI 组件库,使用 vite 构建,rollup 打包,适用于各种前端框架.

## 运行
```shell
# 安装依赖
npm i
# 本地运行调试
npm run dev
# 打包发布
npm run build
```

## 解决报错

1. ts(2564) 属性“\_oAlert”没有初始化表达式，且未在构造函数中明确赋值。

> 把`tsconfig.json`文件`compilerOptions.strict`改为`false`

2. ts(2322) 不能将类型“HTMLElement | null”分配给类型“HTMLElement”。
   不能将类型“null”分配给类型“HTMLElement”。

> 通过类型断言解决 `this._oAlert = document.querySelector('.alert') as HtmlElement`

3. ts(1259) 模块 ""e:/VSCode/ts-ui-lib/node_modules/@types/jquery/index"" 只能在使用 "allowSyntheticDefaultImports" 标志时进行默认导入

> 把`tsconfig.json`文件`compilerOptions.esModuleInterop`改为`true`,然后重新运行项目

4. 项目打包,运行`yarn build`生成文件无法直接打开

> 审查生成的 index.html 文件发现,js 脚本是以`type="module"`的方式引入的,这种方式只能在服务端加载,无法在本地以`file:///`的方式引入,想预览效果可以安装 VSCode 插件`Live Server`插件,以`Open With Live Server`方式打开;
> 其次,生成的引入路径为`/_assets/index.7fe30cce.js`,该方式也无法正确引入,应改为`./_assets/index.7fe30cce.js`
