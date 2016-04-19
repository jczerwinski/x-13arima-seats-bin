/**
 * Copyright (c) 2016-present, Jamie Czerwinski
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';
var log = require('logalot');
var bin = require('./');

bin.run(['testairline.spc'], function (err) {
	if (err) {
		log.error(err.message);
		log.error('x13 binary test failed');
		return;
	}

	log.success('x13 binary test passed successfully');
});
