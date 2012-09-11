node-getopt
===========

Basic Usage
-----------

code: simple.js

    // examples/simple.js
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

run

    $ node examples/simple.js foo -s --long-with-arg bar -m a -m b -- --others
    { argv: [ 'foo', '--others' ],
      options:
       { short: true,
         'long-with-arg': 'bar',
         'multi-with-arg': [ 'a', 'b' ] } }

Features
--------

short option name

    $ node simple.js -s
    { argv: [], options: { short: true } }

    $ node simple.js -S foo
    { argv: [], options: { 'short-with-arg': 'foo' } }

long option name

    $ node simple.js --long
    { argv: [], options: { long: true } }

    $ node simple.js --long-with-arg foo
    { argv: [], options: { 'long-with-arg': 'foo' } }

chain option

    $ node simple.js -slS foo
    { argv: [],
      options: { short: true, long: true, 'short-with-arg': 'foo' } }


multi option supported

    $ node simple.js -m a -m b -m c
    { argv: [], options: { 'multi-with-arg': [ 'a', 'b', 'c' ] } }

text argv supported

    $ node simple.js foo -m a bar -m b baz -m c
    { argv: [ 'foo', 'bar', 'baz' ],
      options: { 'multi-with-arg': [ 'a', 'b', 'c' ] } }

keep text after --

    $ node simple.js -s -- -s
    { argv: [ '-s' ], options: { short: true } }
