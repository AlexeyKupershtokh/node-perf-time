var microtime = require('microtime');
var Benchmark = require('benchmark').Benchmark;

var perfTime = require('..');

var t = new perfTime();

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
.add('perfTime.get()', function() {
  var d = t.get();
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run();
