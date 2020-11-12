/* globals describe it expect */
const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');

describe('Ship', () => {
	it('can be instantiated', () => {
		expect(new Ship()).toBeInstanceOf(Object);
	});
	it('has a starting port', () => {
		
		const port = new Port('Dover');
		const ship = new Ship(port);

		expect(ship.currentPort).toBe(port);
	});
	
	
});

describe('setSail', () => {
it('can set sail', () => {
	
	const port = new Port('Dover');
	const ship = new Ship(port);


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