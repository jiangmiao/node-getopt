// examples/simple.js
// argv parse
Getopt = require('..');

// Getopt arguments options
//   '+': multi arguments
//   ':': has argument
//   '#': comment
getopt = new Getopt([
  ['s' , ''],
  [''  , 'long'],
  ['S' , 'short-with-arg' , ':'],
  ['L' , 'long-with-arg'  , ':'],
  ['m' , 'multi-with-arg' , ':+'],
  ['h' , 'help']
]);

// process.argv needs slice(2) for it starts with 'node' and 'script name'
// parseSystem is alias  of parse(process.argv.slice(2))
// opt = getopt.parseSystem();
opt = getopt.parse(process.argv.slice(2));
console.info(opt);
