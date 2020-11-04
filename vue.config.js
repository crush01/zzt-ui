module.exports = {
  productionSourceMap: false,
  // 暴露默认导出配置
  configureWebpack: {
    output: {
      libraryExport: 'default',
      library: "zzt-ui",
      libraryTarget: "umd",
      umdNamedDefine: true
    },
    // externals: {
    //   vue: {
    //     root: 'Vue',
    //     commonjs: 'vue',
    //     commonjs2: 'vue',
    //     amd: 'vue'
    //   }
    // }
  }
}