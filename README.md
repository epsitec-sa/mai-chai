# mai-chai
The [chai](http://chaijs.com) testing framework works hand in hand with
[mocha](https://mochajs.org/). It is configured by default with following
plugins:

* [chai-equal-jsx](https://github.com/echenley/chai-equal-jsx) &rarr; adds
  `equalJSX` and `includeJSX` assetions.
* [chai-spies](http://chaijs.com/plugins/chai-spies) &rarr; adds spy ability.
* [chai-string](http://chaijs.com/plugins/chai-string) &rarr; help with common
  string comparison assertions.
* [dirty-chai](https://github.com/prodatakey/dirty-chai) &rarr; provides a
  function-call form for chai _property getter_ assertions.

`mai-chai` also includes configuration files which will be written into
the `./test` folder of the including project:

* `mocha.opts` &rarr;  registers Babel as the compiler and requires the
  `./test/test-helper.js` file in every test.
* `test-helper.js` &rarr; configures the global `document`, `window` and
  `navigator` objects.
  
And for Wallaby.js users, `mai-chai` comes with a default configuration
file.

## Conventions

`mai-chai` follows these conventions:

* `./src` &rarr; source code under test.
* `./src.test` &rarr; source code for the tests.
* `./test` &rarr; mocha configuration files.

## Installing mai-chai

First install `mai-chai`:

```bash
npm install mai-chai --save-dev
```

This will also install `mocha`, `chai`, `chai-equal-jsx`, `chai-spies`,
`chai-string` and `dirty-chai`.

## Using mai-chai

Import `expect` from `mai-chai`, as you would from `chai`:

```js
import {expect} from 'mai-chai';
```

and then write your BDD assertions with [methods rather than
properties](https://github.com/prodatakey/dirty-chai#function-form-for-terminating-assertion-properties),
such as:

```js
expect (true).to.be.true ();
foo.should.be.ok ();
```

or use the various assertions added by [chai-string](http://chaijs.com/plugins/chai-string)
and spy on methods with [chai-spies](http://chaijs.com/plugins/chai-spies).

## Configuring Wallaby.js

`mai-chai` provides a default Wallaby.js configuration file. If you
stick to the conventions of `mai-chai` no other setup or configuration
is required. Just point Wallaby.js to `wallaby.conf.js`.

## Included plugins

* `String` assertions are provided by [`chai-string`](https://github.com/onechiporenko/chai-string).
* `ReactElement` comparisons are provided by [`chai-equal-jsx`](https://github.com/echenley/chai-equal-jsx).

> See also Algolia's [`react-element-to-jsx-string`](https://github.com/algolia/react-element-to-jsx-string)
which is used by `chai-equal-jsx` and provides the logic needed to convert a
`ReactElement` to the corresponding JSX string.
