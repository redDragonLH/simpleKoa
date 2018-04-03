let mocha = require('mocha');
let should = require('should');
let response = require('../src/response');
describe('ok',function(){
  it('should return ok', function() {
    should(response.body()).startWith('liuhe');
  });
})
