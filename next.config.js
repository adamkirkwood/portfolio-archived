const path = require('path')
const fs = require('fs')
const glob = require('glob')

module.exports = {
  webpack: (config, { dev }) => {

    config.resolve = {
      extensions: ['.js', '.scss', '.json'],
      symlinks: false
    }

    config.module.rules.push(
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /.*node_modules\/((?!sketchpacks-fieldguide).)*$/,
        query: {
          presets: [
            'react',
            'es2015',
            'stage-0'
          ]
        }
      }
    ,
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      }
    ,
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader']
      }
    ,
      {
        test: /\.s(a|c)ss$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader',
          { loader: 'sass-loader',
            options: {
              includePaths: ['styles', 'node_modules']
                .map((d) => path.join(__dirname, d))
                .map((g) => glob.sync(g))
                .reduce((a, c) => a.concat(c), [])
            }
          }
        ]
      }
    )

    return config
  }
}
