'use strict';

// import { expect } from 'chai'; --- once we have webpack and babel
const expect = require('chai').expect;

describe('sample test to get travis passing', function() {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});
