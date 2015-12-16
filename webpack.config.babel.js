import path from "path";

export default  {
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
