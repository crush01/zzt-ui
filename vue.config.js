module.exports = {
  productionSourceMap: false,
  // 暴露默认导出配置
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  }
}