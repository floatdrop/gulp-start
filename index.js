'use strict';

var through = require('through2');
var start = require('gulp-start-process');
var path = require('path');

function find(map, path) {
    for (var i = 0; i < map.length; i++) {
        var matcher = map[i];

        if (!matcher.match || !matcher.cmd) { throw new Error('Matcher should contain `map` and `cmd` properties'); }

        if (matcher.match.test(path)) { return matcher; }
    }
}

var plugin = function (map) {
    map = map || [
        { match: /package.json$/, cmd: 'npm install' },
        { match: /bower.json$/, cmd: 'bower install' }
    ];

    if (!Array.isArray(map)) {
        throw new Error('map argument must be array, not ' + (typeof map));
    }

    return through.obj(function (file, enc, cb) {
        var match = find(map, file.path);

        if (!match) { return cb(null); }

        start(match.cmd, { cwd: path.dirname(file.path) }, function (err) {
            cb(err);
        });
    });
};

module.exports = plugin;
