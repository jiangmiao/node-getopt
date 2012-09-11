// simple.js
Getopt = require('node-getopt');

// Getopt constants
//   HAS_ARGUMENT    = true
//   NO_ARGUMENT     = false
//   MULTI_SUPPORTED = true
//   SINGLE_ONLY     = false
getopt = new Getopt([
  ['s', 'short'],
  ['l', 'long'],
  ['S', 'short-with-arg', Getopt.HAS_ARGUMENT],
  ['L', 'long-with-arg', Getopt.HAS_ARGUMENT],
  ['m', 'multi-with-arg', Getopt.HAS_ARGUMENT, Getopt.MULTI_SUPPORTED]
]);

// process.argv needs slice(2) for it starts with 'node' and 'script name'
result = getopt.parse(process.argv.slice(2));
console.info(result);
