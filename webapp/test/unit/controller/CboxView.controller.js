/*global QUnit*/

sap.ui.define([
	"cboxbinding/controller/CboxView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("CboxView Controller");

	QUnit.test("I should test the CboxView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
