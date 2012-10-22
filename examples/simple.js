var perfTime = require('..');

// use default time provider (Date.now()) and rate (100000/sec).
var t = new perfTime();
console.log(t.get()); // outputs 1350881690560

var t3 = new perfTime(function() { return new Date; }); // bad idea because cached Date object is mutable!
