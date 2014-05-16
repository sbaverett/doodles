var chai = require('chai');
var expect = chai.expect;
var calculations = require('../calculations');
 
describe('command-line-project', function() {

	it('adds two numbers', function() {
			expect(calculations.add(1, 5)).to.eql(6);
		
	})
})

