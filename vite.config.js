const path = require('path')

module.exports = {
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'stimulus-rails-autosave'
    },
    rollupOptions: {
      external: ['@hotwired/stimulus', 'lodash.debounce', '@rails/ujs'],
      output: {
        globals: {
          '@hotwired/stimulus': 'Stimulus',
          'lodash.debounce': 'debounce',
          '@rails/ujs': 'Rails',
        }
      }
    }
  }
}
