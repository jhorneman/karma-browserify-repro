'use strict';

var external = require('./sub');


exports.getAValue = function getAValue() {
	return external.modify(5);
};
