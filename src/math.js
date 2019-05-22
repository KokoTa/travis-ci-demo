module.exports = {
  add(...args) {
    return args.reduce((prev, curr) => prev + curr)
  },
  mul(...args) {
    return args.reduce((prev, curr) => prev * curr)
  }
}
