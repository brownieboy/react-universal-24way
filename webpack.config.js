var path = require('path');
console.log("path = " + path);
module.exports = {
    entry: path.join(process.cwd(), 'client-render.js'),
    output: {
        path: './public/',
        filename: 'build.js'
    },
    module: {
        loaders: [{
            test: /.js$/,
            loader: 'babel'
        }]
    }
}
