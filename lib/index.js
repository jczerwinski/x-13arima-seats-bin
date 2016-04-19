/**
 * Copyright (c) 2016-present, Jamie Czerwinski
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';
var path = require('path');
var BinWrapper = require('bin-wrapper');

var BASE = 'https://www.census.gov/ts/x13as/';

module.exports = new BinWrapper()
	.src(BASE + 'unix/x13as_V1.1_B26.tar.gz', 'linux')
	.src(BASE + 'pc/x13as_V1.1_B26.zip', 'win32')
	.dest(path.join(__dirname, '../vendor'))
	.use(process.platform === 'win32' ? 'x13as.exe' : 'x13as');
