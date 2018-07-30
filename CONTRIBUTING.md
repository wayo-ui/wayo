# Wayo贡献指南

首先感谢您在众多Vue组件库中选择Wayo，并且乐于为Wayo的成长提供一份力量。

### Issue规范
改善Wayo最直接也是最高效的方式是提交[issue](https://github.com/wayo-ui/wayo/issues)，在提交issue之前请先阅读以下规范示例：
> ### Wayo版本
> v1.0.0
> ### Vue版本
> v2.5.16
> ### 系统
> IOS 11.4
> ### 浏览器
> Safari 5.0
> ### 期望结果
> xxx
> ### 实际结果
> xxx
> ### 步骤描述
> xxx

### 开发
如果您觉得某些组件待改进的方面太多以致于issue无法准确描述，欢迎fork源代码后进行开发。

开发环境建议使用Node.js 6+版本以及npm 4+。

```bash
git@github.com:wayo-ui/wayo.git
npm install 
npm run dev
```

#### 脚手架
wayo提供开发新组件的简易脚手架工具，在wayo根目录下运行：
```bash
npm run new <component-name>
```

以上命令将创建以下文件：
- `src/components/<component-name>/` - 组件vue源码目录；
- `src/styles/components/<component-name>.scss` - 组件样式文件；
- `__tests__/components/<component-name>.test.js` - 组件单测文件。

在此之后需要在`src/index.js`中引入新开发的组件：
```javascript 
// 引入组件源码
import ComponentName from './components/<component-name>';
// 导出组件
const Components = {
  ComponentName
};
```

#### 代码规范
Wayo内置的代码规范相对比较宽松，在编写完源码之后运行：
```bash
npm run lint
```