/**
 * 基准测试
 */
const { num1, num2, num3 } = require('../src/fn')
const Benchmark = require('benchmark')

const suite = new Benchmark.Suite;

// add tests
suite.add('num1', function() {
  num1('1234567890')
})
.add('num2', function() {
  num2('1234567890')
})
.add('num3', function() {
  num3('1234567890')
})
// 每个 add 测试执行结束后会触发 cycle
.on('cycle', function(event) {
  console.log(String(event.target));
})
// 所有测试结束后会触发 complete
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });
