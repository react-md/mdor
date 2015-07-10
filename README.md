# mdor

## Why mdor?

1. Make [Google Material Design Lite](http://www.getmdl.io/) be npm modulized.
2. That is, can be used at server-side, you can do things like isomorphic.
3. React Components!!
4. We can provide more features than MDL.

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
