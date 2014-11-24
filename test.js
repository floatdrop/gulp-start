/* global it */

var proxyquire = require('proxyquire').noCallThru();
var assert = require('assert');
var File = require('vinyl');

it('should run npm command', function (done) {
    delete require.cache[require.resolve('./')];
    proxyquire('./', { 'gulp-start-process': function (cmd) {
        assert.equal(cmd, 'npm install');
        done();
    } });

    var start = require('./');
    start().end(new File({
        path: '/some/dir/package.json'
    }));
});

it('should run bower command', function (done) {
    delete require.cache[require.resolve('./')];
    proxyquire('./', { 'gulp-start-process': function (cmd) {
        assert.equal(cmd, 'bower install');
        done();
    } });

    var start = require('./');
    start().end(new File({
        path: '/some/dir/bower.json'
    }));
});

it('should support custom commands', function (done) {
    delete require.cache[require.resolve('./')];
    proxyquire('./', { 'gulp-start-process': function (cmd) {
        assert.equal(cmd, 'lol');
        done();
    } });

    var start = require('./');
    start([{ match: /\.json$/, cmd: 'lol' }]).end(new File({
        path: '/some/dir/bower.json'
    }));
});

it('should throw on invalid argument', function () {
    assert.throws(function () { require('./')('lol'); });
});
