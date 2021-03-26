const path = require(`path`);
const SRC_DIR = path.join(__dirname, `/client/src`);
const DIST_DIR = path.join(__dirname, `/public`);


module.exports = {
  devtool: "eval-source-map",
  // for production:
  // devtool: "source-map",
  mode: 'development',
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'headBundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
        {
          test: /\.jsx?/,
          include: `${SRC_DIR}`,
          exclude: [path.resolve(__dirname, `node_modules`)],
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        },
        {
          test: /\.(css|scss)$/,
          include: path.join(__dirname, 'client/src'),
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                // discardDuplicates: true,
                importLoaders: 1,
                modules: {
                  localIdentName: '[name]__[local]___[hash:base64:5]',
                },
                sourceMap: process.env.NODE_ENV !== 'production',
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: process.env.NODE_ENV !== 'production',
              },
            },
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
          include: `${SRC_DIR}`,
          loader: "file-loader",
          options: {
            name: '[name].[ext]',
            outputPath: '/fonts',
          },
        },
    ]
  },
}