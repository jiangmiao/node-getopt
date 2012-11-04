// examples/help.js
// Works with help
Getopt = require('..');

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
  "Usage: node help.js [OPTION]\n" +
  "node-getopt help demo.\n" +
  "\n" +
  "[[OPTIONS]]\n" +
  "\n" +
  "Installation: npm install node-getopt\n" +
  "Respository:  https://github.com/jiangmiao/node-getopt"
);

getopt.showHelp();
