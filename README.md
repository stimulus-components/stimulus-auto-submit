# Stimulus Rails Autosave

[![](https://img.shields.io/npm/dt/stimulus-rails-autosave.svg)](https://www.npmjs.com/package/stimulus-rails-autosave)
[![](https://img.shields.io/npm/v/stimulus-rails-autosave.svg)](https://www.npmjs.com/package/stimulus-rails-autosave)
[![](https://github.com/stimulus-components/stimulus-rails-autosave/workflows/Lint/badge.svg)](https://github.com/stimulus-components/stimulus-rails-autosave)
[![](https://img.shields.io/github/license/stimulus-components/stimulus-rails-autosave.svg)](https://github.com/stimulus-components/stimulus-rails-autosave)

## Getting started

A Stimulus controller to autosubmit Rails forms.

## Before starting

You must have [@rails/ujs](https://github.com/rails/rails/tree/master/actionview/app/assets/javascripts) up and running **before** using this controller.

```bash
$ yarn add @rails/ujs
```

Somewhere in your JS file:
```js
import Rails from "@rails/ujs"

Rails.start()
```

## Installation

```bash
$ yarn add stimulus-rails-autosave
```

And use it in your JS file:
```js
import { Application } from "stimulus"
import Autosave from "stimulus-rails-autosave"

const application = Application.start()
application.register("autosave", Autosave)
```

## Usage

```html
<%= form_with model: @todo, data: { controller: 'autosave', autosave_delay: '1000' } do |f| %>
  <div class="field">
    <%= f.label :description %>

    <!-- With custom event! -->
    <%= f.text_field :description, data: { action: 'keyup->autosave#save' }  %>
  </div>

  <div class="field">
    <%= f.label :completed %>
    <!-- With default event! -->
    <%= f.check_box :completed, data: { action: 'autosave#save' } %>
  </div>

  <%= f.submit %>
<% end %>
```

## Configuration

| Attribute | Default | Description | Optional |
| --------- | ------- | ----------- | -------- |
| `data-autosave-delay` | `0` | Delay before actually submit the form. (0 to disable) | ✅ |

## Extending Controller

You can use inheritance to extend the functionality of any Stimulus component.

```js
import Autosave from "stimulus-rails-autosave"

export default class extends Autosave {
  connect() {
    super.connect()
    console.log("Do what you want here.")
  }
}
```

This controller will automatically have access to targets defined in the parent class.

If you override the `connect`, `disconnect` or any other methods from the parent, you'll want to call `super.method()` to make sure the parent functionality is executed.

## Development

### Linter
[Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) are responsible to lint and format this component:
```bash
$ yarn lint
$ yarn format
```

## Contributing

Do not hesitate to contribute to the project by adapting or adding features ! Bug reports or pull requests are welcome.

## Credits

This controller is inspired [excid3/tailwindcss-stimulus-components](https://github.com/excid3/tailwindcss-stimulus-components/blob/master/src/autosave.js).

## License

This project is released under the [MIT](http://opensource.org/licenses/MIT) license.
