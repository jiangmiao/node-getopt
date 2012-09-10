node-getopt
===========

Basic Usage
-----------

code: simple.js

	# simple.js
	Getopt = require('node-getopt');
	getopt = new Getopt([
	  ['i', 'input',  Getopt.HAS_ARGUMENT],
	  ['o', 'output', Getopt.HAS_ARGUMENT]
	]);

	result = getopt.parse(process.argv.slice(2));
	console.info(result);

run

	$ node simple.js -i src -o dest
	{ argv: [], options: { input: 'src', output: 'dest' } }
