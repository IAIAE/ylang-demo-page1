# this
采用[ylang](https://github.com/IAIAE/ylang)打包的微前端工程demo：子页面page1。

# usage
这个工程依赖父工程[ylang-demo-base](https://github.com/IAIAE/ylang-demo-base)。首先你需要将父工程clone下来并安装依赖。base和page1两个工程的文件夹的目录结构应该是同级的，例如：
```
--myworkspace
   |--ylang-demo-base
   |--ylang-demo-page1
```
目录结构不是死的，你可以任意组织目录结构，不过此工程里配置是同级结构，demo而已，最好不要去改动它。

然后安装此工程的依赖并run起来
```
cd ylang-demo-page1
npm i
npm start
```
编译后会创建dist文件夹并watch。需要自行启一个服务器，我一般用`browser-sync`
```
cd dist
browser-sync start --server --files "**/*.html, **/*.css, **/*.js"
```

然后访问localhost:3000即可看到页面。


## 生产环境
`npm run build`，然后去dist文件夹你会看到`page1.xxxx.js`和`page1.xxxx.css`。拷贝这两个文件到`ylang-demo-base/dist`中去，然后的步骤参见[ylang-demo-base的文档](https://github.com/IAIAE/ylang-demo-base)。

# why
base和page1服务于一个页面，为什么要拆开放到两个工程？当然你这里看到的demo规模很小，如果页面的规模足够大，那么拆分工程就变得有意义了。好处多多，例如：

- 工程之间相互独立，虽然保持引用，但是打包和发布是独立的(每个子组件或子页面只需要发布自己的chunk.js，提交自己的git)，不会造成误发布、搭车错误发布等等问题。
- 减小每个包的体积，你看page1.chunk.js打包出来只有一点点代码量。即使它使用了react和全量的antd。因为代码都在base里面了。
- 适合对大型前端工程做业务性的拆分，各团队管好自己的页面chunk



