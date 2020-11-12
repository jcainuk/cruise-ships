const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js');

describe('Itinerary', () => {
	it('can have ports', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');

        const itinerary = new Itinerary(dover, calais);

		expect(itinerary.ports.toEqual([dover, calais]);
	});

});