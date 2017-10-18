'use strict';
import test from 'ava';

var mock = require('mock-fs');
const initManager = require('../../mods/init/init-manager');

test('find nginx config file', t => {
	// Should be false, if nginx config file not exists.
	t.is(initManager.nginxConfigExists(), false);

	// Should be true, if nginx config file exists.
	var mockConfig = {};
	mockConfig[initManager.defaultConfigPath] = 'test';
	mock(mockConfig);
	t.is(initManager.nginxConfigExists(), true);
	mock.restore();
});
