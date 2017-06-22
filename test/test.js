//var assert = require('assert');
//var assert = require('chai').assert;
//var tab = require('../src/js/liczba.js');
//console.log(tab);

var assert = chai.assert,
	should = chai.should();

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

var jednTest ='km',
	isObject = typeof przelicznikNaMetr === 'object';


describe ('tabela jednostek',function(){
	describe('miary',function(){
		it('czy : jednostka "'+jednTest+'" jest w tabeli: ['+tabJedn+']',function(){
			//assert.isTrue(tabJedn.indexOf('km'));
			assert.isAtLeast(tabJedn.indexOf(jednTest), -1, 'jednostka jest w tabeli');
		});
		it('czy : ['+tabJedn+'] jest tabelą',function(){
			assert(Array.isArray(tabJedn), 'tabJedn - jest tabelą');
		});
		it('czy : '+przelicznikNaMetr+' jest obiektem',function(){
			assert.isTrue(isObject, 'tabJedn - jest tabelą');
		});
	});
});


var len = Object.keys(przelicznikNaMetr).length;

describe('obiekt z przelicznikem miar na 1 metr',function(){
	it('reakcja na pustą miare',function(){
		var miara = ' ';
		assert.isNaN(przelicznikNaMetr[miara],'brak jednostki');
	});
	it('czy ma 5 elementów? = '+len,function(){
		assert.equal(len, 5, 'mamy 5 typów jednostek');
		
	});
});
