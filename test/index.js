var assert = require('assert')
var PhoneFormat = require('PhoneFormat')

describe('PhoneFormat', function() {
  it('parses numbers', function() {
    var parsed = PhoneFormat.parse('11 2345 6789', 'ar')

    assert(parsed.e164 === '+541123456789')
    assert(parsed.international === '+54 11 2345-6789')
  })

  it('exposes the number type', function() {
    var parsed = PhoneFormat.parse('11 15 2345 6789', 'ar')

    assert(parsed.e164 === '+5491123456789')
    assert(parsed.type === 'MOBILE')
  })
})
