//var assert = require('assert');
var assert = require('chai').assert;

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

var tabJedn=['km','m','dcm','cm','mm'],
	jednTest ='km' ;


describe ('jednostki',function(){
	describe('miary',function(){
		it('czy jednostka "'+jednTest+'" jest w tabeli: ['+tabJedn+']',function(){
			//assert.isTrue(tabJedn.indexOf('km'));
			assert.isAtLeast(tabJedn.indexOf(jednTest), -1, 'jednostka jest w tabeli');
		});
	});
});