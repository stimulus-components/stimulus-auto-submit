import { Controller } from '@hotwired/stimulus'
import debounce from 'lodash.debounce'

export default class extends Controller {
  // @ts-ignore
  element: HTMLFormElement
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
    if (window._rails_loaded) {
      // @ts-ignore
      Rails.fire(this.element, 'submit')
    } else {
      this.element.requestSubmit()
    }
  }
}
