const path = require('path')

module.exports = {
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'stimulus-rails-autosave'
    },
    rollupOptions: {
      external: ['stimulus', 'lodash', '@rails/ujs'],
      output: {
        globals: {
          stimulus: 'Stimulus',
          lodash: '_',
          '@rails/ujs': 'Rails',
        }
      }
    }
  }
}
