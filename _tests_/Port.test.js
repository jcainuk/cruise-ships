/* globals describe it expect */
const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js');

describe('Port', () => {
	it('can be instantiated', () => {
		expect(new Port()).toBeInstanceOf(Object);
	});

	it('has a name property', () => {
		const port = new Port('Calais');
		expect(port).toHaveProperty('name','Calais');
	});

});