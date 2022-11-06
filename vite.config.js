const path = require('path')

module.exports = {
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'stimulus-rails-autosave'
    },
    rollupOptions: {
      external: ['@hotwired/stimulus', 'lodash.debounce'],
      output: {
        globals: {
          '@hotwired/stimulus': 'Stimulus',
          'lodash.debounce': 'debounce'
        }
      }
    }
  }
}
