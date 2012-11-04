// examples/simple.js
// argv parse
Getopt = require('..');

// Getopt arguments options
//   '=':   has argument
//   '[=]': has argument but optional
//   '+':   multiple option supported
getopt = new Getopt([
  ['s' , ''],
  [''  , 'long'],
  ['S' , 'short-with-arg='],
  ['L' , 'long-with-arg=ARG'],
  ['m' , 'multi-with-arg=ARG+'],
  [''  , 'color[=COLOR]'],
  ['h' , 'help']
]);

// process.argv needs slice(2) for it starts with 'node' and 'script name'
// parseSystem is alias  of parse(process.argv.slice(2))
// opt = getopt.parseSystem();
opt = getopt.parse(process.argv.slice(2));
if (opt.options.help) {
  getopt.showHelp();
  process.exit(0);
}
console.info(opt);
