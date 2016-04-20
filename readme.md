# x-13arima-seats-bin [![Build Status](https://travis-ci.org/jczerwinski/x-13arima-seats-bin.svg?branch=master)](https://travis-ci.org/jczerwinski/x-13arima-seats-bin)

> Binary wrapper for [X-13ARIMA-SEATS](https://www.census.gov/srd/www/x13as/) - The US Census Bureaus' seasonal adjustment program

Only Windows and Linux (32-bit) binaries are currently provided.


## CLI

```
$ npm install --global x-13arima-seats-bin
```

## API

```
$ npm install --save x-13arima-seats-bin
```

```js
const execFile = require('child_process').execFile;
const x13 = require('x-13arima-seats-bin');

execFile(x13, ['inputFileName'], (err, stdout) => {
	console.log(stdout);
});
```


## License

x13arima-seats-bin is MIT-licensed.
