const path = require('path');

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: "./src/server.ts",
    target: 'node',
    module: {
      exprContextCritical: false,
      rules: [
        {
          test: /\.ts?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: [ '.ts', '.js' ]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    }
};