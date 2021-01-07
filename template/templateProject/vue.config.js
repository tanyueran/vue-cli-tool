// 是否为mock模式的
const obj = process.argv[3] ? {
  // 开启mock server数据,process.argv的第四个参数mock 表明是否为mock版本的
  before: require('./mock/index.js'),
} : {
  proxy: {
    '^/api': { // 替换代理地址名称
      target: 'http://192.168.1.3:8080',
      changeOrigin: true, // 可否跨域
      pathRewrite: {
        '^/api': '', // 重写接口
      },
    },
  },
};

module.exports = {
  publicPath: '/',
  productionSourceMap: true,
  lintOnSave: 'warning',
  ...(function () {
    console.log(`${process.env.NODE_ENV}=========================\n`);
    return process.env.NODE_ENV === 'production' ? {publicPath: '/[%projectName%]/'} : {};
  }()),

  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "~@/style/variable.scss";',
      },
    },
  },

  // 开发的代理
  devServer: {
    disableHostCheck: true,
    port: '3000',
    ...obj,
  },
};
