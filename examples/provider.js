var perfTime = require('..');

// use custom time provider
var provider = function() { return (new Date).getMilliseconds();  };
var t2 = new perfTime(provider);
console.log(t2.get()); // outputs 29
console.log(t2.get()); // outputs 29
setTimeout(function() { console.log(t2.get()); }, 1); // outputs 30
setTimeout(function() { console.log(t2.get()); }, 10); // outputs 38
