var chai = require('chai');
var expect = chai.expect;
var calculations = require('../calculations');
 
describe('command-line-project', function() {

	it('adds two numbers', function() {
			expect(calculations.add(1, 5)).to.eql(6);
		
	})


	it('subtracts two numbers', function() {
		expect(calculations.sub(59, 17)).to.eql(42);

	})

	it('multiplies two numbers', function() {
		expect(calculations.mult(6, 6)).to.eql(36);
	})

})
