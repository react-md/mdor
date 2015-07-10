# mdor

##How to develop

Use playgournd

first run
```
$ npm run play
```
then

1. open file `/playground/index.html`
2. coding under `src/components`
3. compose playground page in `/playground/Playground.js`
4. see result on `/playground/index.html`

build code
```
$ npm run build
```

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
