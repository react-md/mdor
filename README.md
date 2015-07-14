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

### Slider
```javascript
var Slider = require('mdor').Slider;
...

render: function () {
  return <Slider width="30vw" maxWidth="260" value="0" min="0" max="100" />;
} 
```
