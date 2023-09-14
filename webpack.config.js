const path = require('path');

module.exports = {
   entry: './src/index.tsx',
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
         },
      ],
   },
   resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      components: path.join(__dirname, 'src', 'components')
   },
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
   },
};
