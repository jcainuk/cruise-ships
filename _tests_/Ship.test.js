/* globals describe it expect */
const {
Ship,
Port
	} = require('../src/Ship.js');

describe('Ship', () => {
	it('can be instantiated', () => {
		expect(new Ship()).toBeInstanceOf(Object);
	});
	it('has a starting port', () => {
		const ship = new Ship('Dover');
		expect(ship.startingPort).toBe('Dover');
	});
	it('has a current port', () => {
		const ship = new Ship('Dover');
		expect(ship.currentPort).toBe('Dover');
	});
	
});

describe('setSail', () => {
it('can set sail', () => {
	const ship = new Ship('Dover');
	ship.setSail();
	expect(ship.startingPort).toBeFalsy();
});
});


describe('Port', () => {
	it('can be instantiated', () => {
		expect(new Port()).toBeInstanceOf(Object);
	});

	it('has a name property', () => {
		const port = new Port('Calais');
		expect(port).toHaveProperty('name','Calais');
	});

});