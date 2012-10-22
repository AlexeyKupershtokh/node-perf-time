try {
  var microtime = require('microtime');
} catch(e) {
  console.error('microtime package not found, will skip it in benchmark');
}
var Benchmark = require('benchmark').Benchmark;

var perfTime = require('..');

var t1 = new perfTime(1000000);
var t2 = new perfTime(100000);
var t3 = new perfTime(10000);
var t4 = new perfTime(2000);
var t5 = new perfTime(900);

var suite = new Benchmark.Suite;

// add tests
suite.add('warmup', function() {
  var d = Date.now();
})
.add('+new Date', function() {
  var d = +new Date;
})
.add('Date.now()', function() {
  var d = Date.now();
})
.add('process.hrtime()', function() {
  var d = process.hrtime();
})
.add('microtime.now()', function() {
  var d = microtime.now();
})
.add('perfTime(1000000).get()', function() {
  var d = t1.get();
})
.add('perfTime(100000).get()', function() {
  var d = t2.get();
})
.add('perfTime(10000).get()', function() {
  var d = t3.get();
})
.add('perfTime(2000).get()', function() {
  var d = t4.get();
})
.add('perfTime(900).get()', function() {
  var d = t5.get();
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run();
