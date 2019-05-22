module.exports = {
  add(...args) {
    return args.reduce((prev, curr) => prev + curr)
  },
  mul(...args) {
    return args.reduce((prev,  curr) => prev * curr)
  },
  // dev 分支新增的方法
  minus(...args) {
    return args.reduce((prev,  curr) => prev - curr)
  }
}
