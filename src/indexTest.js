"use strict";

const assert = require('assert')
const uglify = require('./index')

describe('hs codes', function()
{
  it('should handle sections', function()
  {
    assert.equal(uglify('I'), 'I')
    assert.equal(uglify('I', true), 'Section I')
  });

  it('should handle chapters', function()
  {
    assert.equal(uglify('01'), '01')
    assert.equal(uglify('01', true), 'Chapter 01')
  });
  
  it('should handle chapters', function()
  {
    assert.equal(uglify('0101'), '0101')
    assert.equal(uglify('0101', true), 'Heading 0101')
  });
  
  it('should handle subheadings', function()
  {
    assert.equal(uglify('010203'), '0102.03')
    assert.equal(uglify('010203', true), 'Subheading 0102.03')
    assert.equal(uglify('010203', true, true), 'Item 0102.03')
  });
  
  it('should handle further', function()
  {
    assert.equal(uglify('01020304'), '0102.03.04')
    assert.equal(uglify('01020304', true), 'Subheading 0102.03.04')
    assert.equal(uglify('01020304', true, true), 'Item 0102.03.04')
  });
  
});
