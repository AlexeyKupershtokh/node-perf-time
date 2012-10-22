node-perf-time
==============

Low impact date/time getters.

```
+new Date               x  1,106,626 ops/sec ±0.80% (99 runs sampled)
Date.now()              x  1,418,551 ops/sec ±0.16% (101 runs sampled)
process.hrtime()        x    833,820 ops/sec ±0.16% (101 runs sampled)
microtime.now()         x  1,247,487 ops/sec ±1.03% (100 runs sampled)
perfTime(1000000).get() x 24,040,578 ops/sec ±1.85% (85 runs sampled)
perfTime(100000).get()  x 18,311,654 ops/sec ±0.51% (93 runs sampled)
perfTime(10000).get()   x  8,393,439 ops/sec ±0.37% (97 runs sampled)
perfTime(2000).get()    x  3,362,967 ops/sec ±0.30% (100 runs sampled)
perfTime(900).get()     x  1,375,311 ops/sec ±0.17% (101 runs sampled)
```

Installation
============
```
npm install perf-time
```

Usage
=====
```javascript
var perfTime = require('perf-time');

var t = new perfTime();
console.log(t.get()); // outputs: 1350895024399

// set custom rate
var t = new perfTime(10000);
console.log(t.get()); // outputs: 1350895024403

// set custom provider instead of default Date.now()
var provider = function() { return (new Date).getMilliseconds(); };
var t = new perfTime(provider);
console.log(t.get()); // outputs 403
```

Principles
==========
This class caches calls to time getters. This cache is flushed in two ways:
 * Every 100th iteration (by default) during blocking code.
 * Every millisecond using setTimeout(..., 1).

Pros and cons
=============
 * :smile: Works accurate enough when you don't have long blocking code.
 * :smile: Works accurate enough when you have long blocking code but calculate time often enough (at 100K/sec rate).
 * :sweat_smile: Can work inaccurate when you have long blocking code with time calculations at lower rates. Just pass the required `rate` for this case for improving accuracy. :smile:
 * :smile: You can use higher rates to trade accuracy for performance.