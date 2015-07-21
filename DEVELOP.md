##How to develop

Use playground

first run
```
$ npm run play
```
then

1. open file `/playground/index.html`
2. coding under `src/components`
3. compose playground page in `/playground/Playground.js`
4. see result on `/playground/index.html`

### Publish steps

1. Make sure the modules you want to export have been specified in `index.js` at root folder.

2. Raise npm module version

3. run
```
$ npm publish ./
```
