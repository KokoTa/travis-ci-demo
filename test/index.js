/**
 * 测试代码
 */
const { expect } = require('chai')
const { add, mul } = require('../src/math')

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
})
