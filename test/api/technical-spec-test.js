'use strict';

const expect = require('chai').expect;
const getProducts = require('../helpers/get-products');
const MagazineLuizaAPI = require('../../index');
const PARTNER_ID = process.env.PARTNER_ID;
const magazineLuiza = new MagazineLuizaAPI(PARTNER_ID);

describe('# [API] MAGAZINE LUIZA - CATALOG - TECHNICAL SPEC', function() {
	this.timeout(90000);

	it('Should return technical spec of the first product', function() {
		const catalog = magazineLuiza.catalog;
		return getProducts(magazineLuiza)
			.then(data => catalog.getTechnicalSpec(data[0].id, data[0].model))
			.then(techSpec => expect(techSpec).to.be.an('object'))
		;
	});
});
