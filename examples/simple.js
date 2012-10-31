// examples/simple.js
Getopt = require('..');

// Getopt arguments options
//   '+': multi arguments
//   ':': has argument
getopt = new Getopt([
  ['s', 'short'],
  ['l', 'long'],
  ['S' , 'short-with-arg' , ':']  ,
  ['L' , 'long-with-arg'  , ':']  ,
  ['m' , 'multi-with-arg' , ':+']
]);

// process.argv needs slice(2) for it starts with 'node' and 'script name'
// getopt.parse(process.argv.slice(2));
result = getopt.parseSystem();
console.info(result);
