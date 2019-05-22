/**
 * 测试代码
 */
const { expect } = require('chai')
const { add, mul, minus } = require('../src/math')

describe('Math Test', () => {
  describe('Test Add', () => {
    it('2 + 3', () => {
      expect(add(2, 3)).to.equal(5)
    })
  })
  describe('Test Mul', () => {
    it('2 * 3', () => {
      expect(mul(2, 3)).to.equal(6)
    })
  })

  // dev 分支新增的方法
  describe('Test Minus', () => {
    it('5 - 2', () => {
      expect(minus(5, 2)).to.equal(3)
    })
  })
})
