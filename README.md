# react-inclusive-components

Inclusive components for React, created with styled-components. Based on Heydon
Pickering's book, **Inclusive Components**.

The library does not include React, it's just a collection of components to make the development of accessible apps easeir.
It has a minimum styling using styled components that ensures that these elements are behaving properly and avoid different pitfalls (e.g. hiding an element from user but still making it accessible by the screen reader).

These components are not stateful and as abstract as possible to not interfere with any development that you are doing.

Enjoy.

# Usage

## Base

Base is a building block of this library that provides basic styling. **Do not
use it directly.**

Each component inherits from the Base the following properties:

* **_hidden_** — Makes the component invisible on page but still accessible by
  screen readers.

```js
<Button hidden />;
```

_to be expanded later_

## Button

Accessible button component. Can be of several types:

* **submit** — Regular form submit button
* **button** — Regular button that can handle various events
* **toggle** — A toggle button for handling the 'on/off' state of various
  interface elements. Automatically adds `aria-pressed` attribute with the
  passed values.
* **toggle-dynamic** — A toggle button for handling the alternating state of various
  interface elements. Adds the `label` element that can display the current state of the  button (e.g Play/Pause button)
* **switch** — A switcher button that has on-off texts (e.g menu tumblers). Provides CSS class `button-switch-on` and `button-switch-off` for styling.

Button component receives the following props:

* `type: String`: `submit|button|toggle-dynamic|toggle|switch`
* `pressed: Boolean`: `true|false`
* `checked: Boolean`: `true|false`
* `labelId: String`: `The id of the label you use for the button. Will apply to the aria-labeledby attribute on the button`
* `onText: String`: `Text of the ON value for the switch button`
* `offText: String`: `Text of the OFF value for the switch button`


