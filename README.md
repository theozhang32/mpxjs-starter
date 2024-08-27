# mpxjs-starter

使用[mpxjs](https://mpxjs.cn/)增强型框架开发小程序

- [Mpxjs2.0设计思路](https://mpxjs.cn/articles/2.0.html)
- [Mpxjs2.0对比其他小程序框架的性能对比(来自Mpxjs的数据)](https://mpxjs.cn/articles/performance.html)
- [Mpx 小程序框架技术揭秘](https://mpxjs.cn/articles/mpx2.html)
- [提体积优化实践](https://mpxjs.cn/articles/size-control.html)

## 有Taro为什么还要选择它

诚然，小程序是一个非常流行的，易用的应用形式，但从很多设计细节上，我们很难说它是一个优秀的框架。换句话说，它的“坑”要比Web开发多很多，并且国内小程序的“坑”更多是靠开发者到各家的论坛去反馈，再由各家的技术人员收集、统计、解决。这个过程的效率和解决程度，相信很多开发者都不言而喻。那么如果在小程序框架上层再加一层封装，我们不仅要踩小程序的“坑”，还要踩上层封装的“坑”。这种开发过程是很恼人的。

所以抛开跨端的需求，在我个人看来理论上最优的开发方式就是小程序原生开发，“坑”我们只要踩小程序一家的就够了。但现在小程序原生开发环境还是有些不尽如人意，所以一款足够接近小程序原生开发，还能提供比较完善的前端开发环境的框架，就成为我选择它的原因。

还可以轻松使用以下小程序原生特性

- wxml模板
- wxs
- 原生自定义组件

## 开发体验

Mpx的开发体验肯定是不如Taro的，因为样式和模版本质上就是小程序原生开发，自定义组件的排布和引用方式，也完全遵照小程序原生方式。只是在js的逻辑层，Mpx帮我们用类Vue、Mobx的响应式原理，才大大改善了开发体验。对比Taro直接用React或Vue的语法来开发，肯定是有一些不便利的。好在小程序原生开发也加入了Typescript的支持，Mpx也同样支持Typescript，所以整体开发下来体验并没有那么糟糕。再结合vscode的snippets，也能减少我们重复输入的情况。

## 编译产物

Mpx的编译产物和小程序原生结构非常类似，样式和模版我们可以直接在小程序开发者工具中阅读、分析、调试。ts逻辑的依赖关系会被webpack识别和编译，最终产物和基于webpack的Web开发也非常类似。相比于Taro编译后的可读性，我更倾向于Mpx。

刚好有机会在一个项目上分别使用Taro和Mpx实现了一次，编译后的体积Mpx是要比Taro小上10%-20%，而且依赖关系也很清晰。

## Mpx的设计思路

Mpx借鉴了Vue、Mobx、axios、pinia，几乎将Vue技术栈的响应式原理和常用开发工具完全实现了一遍。选择了重新造一遍轮子，而不是直接利用Vue或React的DSL，对于小程序原生的契合性会更好。而且后续Mpx团队会将响应式重构成Vue3的Proxy方式，这样结合现在的CompositionApi能更好编写业务逻辑。

## Project setup

```javascript
pnpm install

// 若出现Unmet peer dependencies
// 尝试执行
pnpm up

// development
pnpm run serve // 小程序本地开发构建


// production
pnpm run build // 小程序生产环境构建

```
