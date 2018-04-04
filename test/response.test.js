let should = require('should');
let response = require('../src/response');
const res = response;
describe('response body/',function(){
  it('test set body,should return liuhe', function() {
    // should(res.body= 'liuhe').be.a.String()
    should(res.body= 'liuhe').be.exactly('liuhe').and.be.a.String()
  });
  it('test get body,should return liuhe', function() {
    res.body= 'liuhe'
    should(res.body).be.exactly('liuhe').and.be.a.String()
    // should(res.body).be.a.String()
  });
})
