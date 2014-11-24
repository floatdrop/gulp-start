# gulp-start [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

> Spawn process based on file path

Alternative for [gulp-install](https://github.com/slushjs/gulp-install) plugin.

## Usage

```js
var gulp = require('gulp');
var install = require('gulp-start');

gulp.task('default', function (cb) {
    gulp.src(['package.json', 'bower.json'])
        .pipe(install());
});
```

## API

### gulp-start([map])

Returns stream that will run commands based on file path.

#### map

Type: `array`  

By default contains install commands for `npm` and `bower`:

```js
[
    { match: /package.json$/, cmd: 'npm install' },
    { match: /bower.json$/, cmd: 'bower install' }
]
```

## License

MIT © [Vsevolod Strukchinsky](floatdrop@gmail.com)

[npm-url]: https://npmjs.org/package/gulp-start
[npm-image]: http://img.shields.io/npm/v/gulp-start.svg?style=flat

[travis-url]: http://travis-ci.org/floatdrop/gulp-start
[travis-image]: http://img.shields.io/travis/floatdrop/gulp-start.svg?branch=master&style=flat
