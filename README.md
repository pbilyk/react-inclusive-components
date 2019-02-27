# react-inclusive-components

Inclusive components for React. Based on Heydon
Pickering's book, **Inclusive Components**.

The library does not include React, it's just a collection of components to make the development of accessible apps easeir.

It has a minimum stylings that ensures that these elements are behaving properly and avoid different pitfalls (e.g. hiding an element from user but still making it accessible by the screen reader).

These components are not stateful and as abstract as possible to not interfere with any development that you are doing.

You can submit issues or Pull Requests at the [GitHub repo](https://github.com/pbilyk/react-inclusive-components).

Enjoy.

# Usage

## Button

Accessible button component. Can be of several types:

- **submit** — Regular form submit button
- **button** — Regular button that can handle various events
- **toggle** — A toggle button for handling the 'on/off' state of various
  interface elements. Automatically adds `aria-pressed` attribute with the
  passed values.
- **toggle-dynamic** — A toggle button for handling the alternating state of various
  interface elements. Adds the `label` element that can display the current state of the button (e.g Play/Pause button)
- **switch** — A switcher button that has on-off texts (e.g menu tumblers). Provides CSS class `button-switch-on` and `button-switch-off` for styling.

Button component receives the following props:

- `type: String`: `submit|button|toggle-dynamic|toggle|switch`
- `pressed: Boolean`: `true|false`
- `checked: Boolean`: `true|false`
- `labelId: String`: `The id of the label you use for the button. Will apply to the aria-labeledby attribute on the button`
- `onText: String`: `Text of the ON value for the switch button`
- `offText: String`: `Text of the OFF value for the switch button`
- `classNameToggleActive:String`: `The classname for styling the active half of the switch button`.
- `classNameToggleInActive:String`: `The classname for styling the inactive half of the switch button`.

Default props are the following:

```
{
  type: "button",
  pressed: false,
  checked: false
}
```

## Heading

A heading element. Receives the following props:

- `element: String`: `Responsilble for rendering the appropriate element(e.g. <Heading element="h1" /> will render the h1 element)`

Default value is for `element` prop is `h1`

## Section

A section element. Renders the heading element, as required pes W3 specs, with an option to hide it from view, preserving it for screen readers.

Receives the following props:

- `label: String`: `The text for the heading element`
- `labelId: String` `The ID, which would be applied to the heading and referenced in aria-labeledby attribute`
- `level: String`: `The Section level, responsible for level of heading applied. By convention each nested section is recomended to have lower level than its parent`
- `noHeading: Boolean`: `Decides whether to hide the heading from the view`

Default props are:

```
{
    level: 1,
    noHeading: false,
}
```

## List

A list element that is hidden and inacessible, when empty.

Receives the following props:

- `type: String`: `Decides the type of list (e.g. <List type="ul">...</List> will render the <ul> element)`

Default props are:

```
{
    type: "ul",
}
```

## Fieldset

A fieldset component for grouping inputs within forms.

Receives the following props:

- `legend: String`: `The text for the legend that appears in fieldset.`
- `hideLegend: Boolean`: `If set to TRUE, hides the legend from the view`

Default Props are:

```
{
    hideLegend: false
}
```

## Input

Input element used in forms. Can have all the types that can be applied to `<input>` element.

Receives the following props:

- `label: String`: `The text for input label`
- `id: String` `The input ID. Also referenced in label [for] atribute`
- `placeholder: String`: `The text for input placeholder`,
- `type: String`: `Input type`,
- `labelPosition: String`: `before|after — Determines the label placement related to the <input> element`,
- `custom: Boolean`: `If set to TRUE, will render the hidden input with the span for applying custom styles. The span will have the "input-custom-element" class name for styling`
- `customClassname: String`: `The external classname for styling the custom radio buttons and checboxes`
- `labelClassName: String`: `The external classname for styling the labels`
- `labelHidden: Boolean`: `If set to TRUE, will hide the label element from the view`

Default Props are

```
{
    placeholder: "",
    type: "text",
    labelPosition: "before",
    custom: false,
}
```

## Text Area

Text area element used in forms. Can have all the types that can be applied to `<textarea>` element.

Receives the following props:

- `label: String`: `The text for input label`
- `id: String` `The input ID. Also referenced in label [for] atribute`
- `placeholder: String`: `The text for input placeholder`,
- `labelPosition: String`: `before|after — Determines the label placement related to the <input> element`,
- `labelClassName: String`: `The external classname for styling the labels`
- `labelHidden: Boolean`: `If set to TRUE, will hide the label element from the view`

Default Props are

```
{
    placeholder: "",
    labelPosition: "before",
}
```

## Label

A simple `<label>` element.

## LiveArea

Renders the `<div>` with `aria-live="polite" role="status"`. Can wrap any component and content.
Used for screen readers to track for content changes within it, and announce them.
