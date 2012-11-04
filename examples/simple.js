// examples/simple.js
Getopt = require('..');

// Getopt arguments options
//   '+': multi arguments
//   ':': has argument
//   '#': comment
getopt = new Getopt([
  ['s' , ''               , '  # short option.'],
  [''  , 'long'           , '  # long option.'],
  ['S' , 'short-with-arg' , ': # option with argument'],
  ['L' , 'long-with-arg'  , ': # long option with argument'],
  ['m' , 'multi-with-arg' , ':+# multiple option with argument'],
  [''  , 'no-comment'     , ''],
  ['h' , 'help'           , '  # display this help']
]);

// Use custom help template instead of default help
// [[OPTIONS]] is the placeholder for options list
getopt.setHelp(
  "Usage: node simple.js [OPTION]\n" +
  "node-getopt simple demo.\n" +
  "\n" +
  "[[OPTIONS]]\n" +
  "\n" +
  "Installation: npm install node-getopt\n" +
  "Respository:  https://github.com/jiangmiao/node-getopt"
);

// process.argv needs slice(2) for it starts with 'node' and 'script name'
// parseSystem is alias  of parse(process.argv.slice(2))
// opt = getopt.parseSystem();
opt = getopt.parse(process.argv.slice(2));
if (opt.options.help) {
  getopt.showHelp();
  process.exit(0)
}

console.info(opt);
