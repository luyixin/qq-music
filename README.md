# qq_music

> 为老婆写的音乐播放软件，仿QQ音乐IOS版，持续更新。
> 目前正在做view层UI部分，UI全部完成后，才加假数据，在实现组件复用，最后如果有时间才做爬虫去爬别的音乐资源。

## Build Setup

``` bash
# 安装NPM依赖包
npm install

# 在本地测试环境跑起来，我自己改的80端口，如果你们的电脑80端口被系统占用，
# 请改/config.index.js里面的dev端口
npm run dev

# 打包为静态资源文件，需要服务器环境才能正常使用。默认部署'/'根目录下，
# 如有需要请自行修改/config.index.js里面build/assetsPublicPath 目录为你的静态文件根目录
npm run build

# 运行测试环境
npm run unit

# 运行 e2e js/jsx语法检查，可配置
npm run e2e

# 运行单元测试
npm test

# 关于webpack自动化构建工具请参考
https://github.com/vuejs-templates/webpack
```

## License

[MIT](http://opensource.org/licenses/MIT) by luyixin
