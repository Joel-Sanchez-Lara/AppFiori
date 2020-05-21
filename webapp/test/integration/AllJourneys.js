/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"asesoria2/asesoria2/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"asesoria2/asesoria2/test/integration/pages/main",
	"asesoria2/asesoria2/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "asesoria2.asesoria2.view.",
		autoWait: true
	});
});