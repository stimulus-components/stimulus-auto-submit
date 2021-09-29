import { Controller } from '@hotwired/stimulus'
import { debounce } from 'lodash'
import * as Rails from '@rails/ujs'

export default class extends Controller {
  delayValue: number

  static values = {
    delay: Number
  }

  initialize (): void {
    this.save = this.save.bind(this)
  }

  connect (): void {
    if (this.delayValue > 0) {
      this.save = debounce(this.save, this.delayValue)
    }
  }

  save (): void {
    if (!window._rails_loaded) return

    Rails.fire(this.element, 'submit')
  }
}
