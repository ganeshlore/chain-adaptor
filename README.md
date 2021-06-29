# Chain-Adaptor
A Node.js module that returns the RPC Url form ChainSense LTD.
## Installation 
```sh
npm install chain-adaptor --save
yarn add chain-adaptor
bower install chain-adaptor --save
```
## Usage
### Javascript
```javascript
var adaptor = require('chain-adaptor');
var eth = adaptor.adaptor('eth');
```
```sh
Output should be : new Web3('url');
```
### TypeScript
```typescript
import { adaptor } from 'chain-adapto';
console.log(adaptor('eth'))
```
```sh
Output should be rpc url
```
### AMD
```javascript
define(function(require,exports,module){
  var adaptor = require('chain-adapto');
});
```
## Test 
```sh
npm run test
```