# mdor

## Why mdor?

1. Align [Google Material Design Lite](http://www.getmdl.io/) and make it be npm modulized.
2. That is, can be used at server-side, you can do things like isomorphic.
3. React Components!!
4. Use original Google Material Design Lite styles.
5. Easily hackable and ES6 friendly.
6. We can provide more features than MDL.

## Install
```
$ npm install mdor --save
```

## Components
Current components included:
 - Badge
 - Button
 - Checkbox
 - Radio Button
 - Ripple Effect
 - Slider
 - Tooltip

Please checkout: [demo link](http://react-md.github.io/mdor/)

### Slider
```javascript
var Slider = require('mdor').Slider;
...

render: function () {
  return <Slider width="30vw" maxWidth="260" value="0" min="0" max="100" />;
} 
```

### Badge

```javascript
var Badge = require('mdor').Badge;
...

render: function () {
  return <Badge icon="1" iconify>account_box</Badge>;
} 
```

 Props Name | Props Type | Required | description
 --- | --- | --- | ---
 class | string | no | custom classes that you want to bind on 
 icon | ( string \| number ) | yes | text that shows on the badge
 iconify | bool | no | determine the content of badge is an material icon or not
 style | object | no | custom styles that you want to bind on


### Button

```javascript
var Button = require('mdor').Button;
...

render: function () {
  var onButtonClick = function () {
    console.log('clicked');
  }; 
  return <Button type="fab" colored onClick={onButtonClick} ><i className="material-icons">mood</i></Button>;
} 
```

 Props Name | Props Type | Required | description
 --- | --- | --- | ---
 colored | bool | no | make button colored
 disabled | bool | no | make button disabled
 type | string | no | type of button, value can be `fab`, `mini-fab` or just don't give this props
 onClick | func | no | for listening on the click event
