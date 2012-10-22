node-perf-time
==============

Low impact date/time getters.

```
+new Date x 407,163 ops/sec ±1.22% (88 runs sampled)
Date.now() x 489,213 ops/sec ±1.22% (85 runs sampled)
process.hrtime() x 338,222 ops/sec ±0.86% (85 runs sampled)
microtime.now() x 448,378 ops/sec ±1.14% (89 runs sampled)
perfTime.get() x 17,290,252 ops/sec ±1.27% (89 runs sampled)
Fastest is perfTime.get()
```