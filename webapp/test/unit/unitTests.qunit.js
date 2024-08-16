/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sapdemoprimersapui5/app_prueba/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
