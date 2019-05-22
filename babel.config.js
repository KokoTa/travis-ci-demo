// jest 配置，使用 babel 进行语法解析
module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    "@babel/plugin-proposal-class-properties"
  ]
};
