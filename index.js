
var jade = require('jade');
var vfs = require('vinyl-fs');
var map = require('map-stream');
var Buffer = require('buffer').Buffer;

vfs.src(['./folder1/**/**/*.jade'])
    .pipe(map( (data, callback) => {
        // console.log(data.contents);
        pre = data.contents.toString('utf8');
        html = jade.render(pre); // cambiar
        console.log(html);
        data.contents = new Buffer(html);
        // console.log(data.contents);
        callback(null, data);
    }))
    .pipe(vfs.dest('./output/'));


