// Generated by ToffeeScript 1.6.3-4
(function() {
  var Getopt, assert, e, eq, getopt, opt, res, throws,
    _this = this;

  try {
    Getopt = require('./..');
    assert = require('assert');
    eq = function(a, b) {
      return assert.deepEqual({
        argv: a.argv,
        options: a.options
      }, b);
    };
    throws = assert.throws;
    getopt = new Getopt([['a', 'has-argument=']]);
    eq(getopt.parse(['-a', 'a-value']), {
      argv: [],
      options: {
        'has-argument': 'a-value',
        'a': 'a-value'
      }
    }, 'has-argument');
    eq(getopt.parse(['--has-argument', 'a-value']), {
      argv: [],
      options: {
        'has-argument': 'a-value',
        'a': 'a-value'
      }
    }, 'has-argument');
    eq(getopt.parse(["--has-argument=one\ntwo"]), {
      argv: [],
      options: {
        'has-argument': "one\ntwo",
        'a': "one\ntwo"
      }
    }, 'has-argument');
    getopt = new Getopt([['a', 'has-argument='], ['b', 'no-argument']]);
    eq(getopt.parse(['-aone two three']), {
      argv: [],
      options: {
        'has-argument': 'one two three',
        'a': 'one two three'
      }
    });
    eq(getopt.parse(['-baone two three']), {
      argv: [],
      options: {
        'has-argument': 'one two three',
        'no-argument': true,
        'a': 'one two three',
        'b': true
      }
    }, 'has-argument');
    eq(getopt.parse(['-ba<a >']), {
      argv: [],
      options: {
        'has-argument': '<a >',
        'no-argument': true,
        'a': '<a >',
        'b': true
      }
    }, 'has-argument');
    getopt = new Getopt([['A', 'A'], ['B', 'B'], ['C', 'C']]);
    eq(getopt.parse(['-ABC']), {
      argv: [],
      options: {
        'A': true,
        'B': true,
        'C': true
      }
    }, 'no-argument');
    getopt = new Getopt([['a', 'a='], ['A', 'A'], ['B', 'B'], ['C', 'C']]);
    eq(getopt.parse(['-ABCa', 'foo']), {
      argv: [],
      options: {
        'A': true,
        'B': true,
        'C': true,
        'a': 'foo'
      }
    }, 'no-argument');
    getopt = new Getopt([]).error(function(e) {
      throw e;
    });
    throws(function() {
      return getopt.parse(['-A']);
    }, function(err) {
      return err.message === 'invalid option A';
    });
    getopt = new Getopt([['h', 'help']]);
    eq(getopt.parse(['--help']), {
      argv: [],
      options: {
        'help': true,
        'h': true
      }
    }, 'long option');
    getopt = new Getopt([]);
    eq(getopt.parse('-- hello world'.split(' ')), {
      argv: ['hello', 'world'],
      options: {}
    });
    getopt = new Getopt([['h', 'help'], ['m', 'multi=+'], ['s', 'short']]);
    eq(getopt.parse('foo --help --multi a -m b -sm c -- --help'.split(' ')), {
      argv: ['foo', '--help'],
      options: {
        'help': true,
        'multi': ['a', 'b', 'c'],
        'short': true,
        'h': true,
        'm': ['a', 'b', 'c'],
        's': true
      }
    });
    opt = new Getopt([['c', 'constructor', 'constructor']]).parse(['-c']);
    eq(opt, {
      argv: [],
      options: {
        'constructor': true,
        c: true
      }
    });
    opt = new Getopt([['c', 'constructor', 'constructor'], ['', 'toString']]).parse([]);
    eq(opt, {
      argv: [],
      options: {
        'constructor': void 0,
        c: void 0,
        toString: void 0
      }
    });
    getopt = new Getopt([['A', '=+'], ['R', '=+'], ['c', 'constructor'], ['', 'long=']]);
    res = [];
    getopt.on('A', function(arg) {
      return res.push(arg);
    }).on('R', function(arg) {
      return res.push(arg);
    }).on('c', function(arg) {
      return res.push(arg);
    }).on('long', function(arg) {
      return res.push(arg);
    }).on('', function(arg) {
      return res.push(arg);
    });
    getopt.parse(['n1', '-A', 'a1', '-R', 'r1', '-A', 'a2', '--constructor', '--long=l1', '--', 'n2']);
    assert.deepEqual(res, ['n1', 'a1', 'r1', 'a2', true, 'l1', 'n2']);
    opt = new Getopt([['a', '=', '', 'a'], ['M', '=+', '', ['m1', 'm2']]]).parse([]);
    eq(opt, {
      argv: [],
      options: {
        'a': 'a',
        'M': ['m1', 'm2']
      }
    });
    opt = new Getopt([['s', ''], ['', 'long'], ['b', 'both']]);
    assert.deepEqual(opt.long_names, ['s', 'long', 'both']);
    console.info("\x1b[32mTest passed.\x1b[0m");
  } catch (_error) {
    e = _error;
    console.info(e);
    console.info('\n--- STACK TRACE ---\n');
    console.info(e.stack);
  }

}).call(this);
