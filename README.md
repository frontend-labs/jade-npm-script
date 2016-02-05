# jade-npm-script
jade for npm scripts

## Install

```bash
sudo npm install -d
```

## Test

```bash
node index.js
```


## Code 

```js
var jade = require('jade');
var vfs = require('vinyl-fs');
var map = require('map-stream');
var Buffer = require('buffer').Buffer;

vfs.src(['./folder1/**/**/*.jade'])
    .pipe(map( (data, callback) => {
        preHtml = data.contents.toString('utf8');
        html = jade.render(preHtml);
        data.contents = new Buffer(html);
        callback(null, data);
    }))
    .pipe(vfs.dest('./output/'));
```
