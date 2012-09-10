var Getopt = require('./..')

// Create Getopt instance with options format
// Options format:
//     [short_name, long_name, has_argument, multi_supported]*
getopt = new Getopt([
  ['i', 'input',  1],
  ['o', 'output', 1]
]);

result = getopt.parse(process.argv.slice(2));
console.info(result);
