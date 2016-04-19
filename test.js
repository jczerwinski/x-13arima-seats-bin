/**
 * Copyright (c) 2016-present, Jamie Czerwinski
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import test from 'ava';
import binCheck from 'bin-check';
import x13 from './';

test('returns path to binary and verify that it is working', async t => {
	t.true(await binCheck(x13, ['testdata.spc']));
});
