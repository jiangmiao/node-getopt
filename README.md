node-getopt
===========

Basic Usage
-----------

code: simple.js

    // examples/simple.js
    Getopt = require('node-getopt');

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
      ['h' , 'help'           , '  # Show this help']
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

run

    $ node examples/simple.js foo -s --long-with-arg bar -m a -m b -- --others
    { argv: [ 'foo', '--others' ],
      options:
       { short: true,
         'long-with-arg': 'bar',
         'multi-with-arg': [ 'a', 'b' ] } }

    $ node examples/simple.js -h
    Usage: node simple.js [OPTION]
    node-getopt simple demo.

      -s                     short option.
          --long             long option.
      -S, --short-with-arg   option with argument
      -L, --long-with-arg    long option with argument
      -m, --multi-with-arg   multiple option with argument
          --no-comment
      -h, --help             Show this help

    Installation: npm install node-getopt
    Respository:  https://github.com/jiangmiao/node-getopt


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

References
----------

    require('node-getopt') returns class Getopt

Getopt Methods:

    constructor(Array options)
        options is a set of option. each option contains 3 fields.
        [short_name, long_name, definitions]

        Definitions:
            * ':' - The option has argument
            * '+' - Multiple option supported
            * '#' - Comment

    parse(Array argv)
        parse argv

        Returns: {argv: '...', options: {...}}

    parseSystem()
        alias of parse(process.argv.slice(2))


    setHelp(String helpTemplate)
        Set help template. the placeholders will be replaced by getopt.

        Placeholders:
            * [[OPTIONS]] - The options list

        Returns: String

    getHelp()
        Get the help generated.

    showHelp()
        console.info(getopt.getHelp());

Others:

    default help template:

        "Usage: node #{process.argv[1].match(/(?:.*[\/\\])?(.*)$/)[1]}\n\n[[OPTIONS]]"