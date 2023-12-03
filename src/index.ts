import { Controller } from '@hotwired/stimulus'
import debounce from 'lodash.debounce'

export default class extends Controller {
  // @ts-ignore
  element: HTMLFormElement
  delayValue: number

  static values = {
    delay: {
      type: Number,
      default: 150,
    },
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
    this.element.requestSubmit()
  }
}
