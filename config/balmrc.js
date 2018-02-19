var balm = require('balm');
var path = require('path');
var env = require('./env');

module.exports = {
  roots: {
    source: env.useDocs ? 'docs' : 'src'
  },
  styles: {
    ext: 'scss',
    autoprefixer: ['> 0.5%', 'last 2 versions', 'Firefox ESR', 'not dead']
    // includePaths: ['node_modules']
  },
  scripts: {
    entry: env.useDocs
      ? {
          mylib: [
            'vue',
            'vue-router',
            'vue-meta',
            'axios',
            'prismjs',
            'clipboard'
          ],
          main: './docs/scripts/main.js'
        }
      : {
          'balm-ui': './src/scripts/index.js'
        },
    library: 'BalmUI',
    libraryTarget: 'umd',
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue',
        options: {
          esModule: false // For `const MyComponent = () => import('./components/my-component');`
        }
      },
      {
        test: /\.md$/,
        loader: 'html!markdown'
      }
    ],
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    },
    eslint: true,
    options: {
      compress: {
        drop_console: false
      }
    },
    include: env.useDocs
      ? [
          path.resolve('./src/material-components-web'),
          path.resolve('./src/scripts')
        ]
      : [path.resolve('./src/material-components-web')]
  },
  sprites: {
    svg: ['icon']
  },
  extras: {
    excludes: ['index.js']
  },
  assets: {
    publicUrl: env.buildDocs ? 'http://material.balmjs.com/' : ''
  },
  useDefault: env.useDefault
};
