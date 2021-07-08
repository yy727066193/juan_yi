const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    devServer: {
        // port: 3000,

        // 跨域配置
        // proxy: {
        //     '/api': {
        //         target: 'https://devadmin.wisdomep.com/',
        //         secure: false,
        //         changeOrigin: true,   
        //         pathRewrite: {
        //         }     
        //     },
        //     '/admin/img': {
        //         target: 'https://devadmin.wisdomep.com/',
        //         secure: false,
        //         changeOrigin: true,   
        //         pathRewrite: {}
        //     }
        // },
    },

    // 部署应用包时的基本 URL。用法和 webpack 本身的 output.publicPath 一致
    publicPath: process.env.NODE_ENV === 'production'
        ? '/order/'
        : '/',
        
    // build时构建文件的目录 构建时传入 --no-clean 可关闭该行为
    outputDir: 'dist',

    // build时放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
    assetsDir: 'static',

    // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
    indexPath: 'index.html',

    // 默认在生成的静态资源文件名中包含hash以控制缓存
    filenameHashing: true,
    
    // build是不生成.map文件
    productionSourceMap: false,
}