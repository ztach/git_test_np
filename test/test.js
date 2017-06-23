//var assert = require('assert');
//var assert = require('chai').assert;
//var tab = require('../src/js/liczba.js');
//console.log(tab);

var assert = chai.assert,
	should = chai.should();

var jednTest ='dm',
	isObject = typeof przelicznikNaMetr === 'object',
	len = Object.keys(przelicznikNaMetr).length,
	wynik = przelicznikNaMetr[jednTest];

/*
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
}); 
*/


describe ('tabela jednostek',function(){
	describe('miary',function(){
		it('czy : jednostka "'+jednTest+'" jest w tabeli: ['+tabJedn+']',function(){
			//assert.isTrue(tabJedn.indexOf('km'));
			assert.isAtLeast(tabJedn.indexOf(jednTest), -1, 'jednostka jest w tabeli');
		});
		it('czy : ['+tabJedn+'] jest tabelą',function(){
			assert(Array.isArray(tabJedn), 'tabJedn - jest tabelą');
		});
	});
});


describe('test obiektu "przelicznikNaMetr"',function(){

	it('czy : "przelicznikNaMetr" jest obiektem',function(){
		assert.isTrue(isObject, 'tabJedn - jest tabelą');
	});

	it('reakcja na pustą miare',function(){
		var miara = ' ';
		assert.isNaN(przelicznikNaMetr[miara],'brak jednostki');
	});

	it('czy ma 5 elementów? = '+len,function(){
		assert.equal(len, 5, 'mamy 5 typów jednostek');
	});

	it('czy prawidłowo przeliczy "'+ jednTest + '" na "m"' ,function(){
		assert.equal(wynik, 0.1, 'powinno być 0.1');
	});

});

var wsk_test = new Wskaznik('dm','cm'),
	w_test = { poczatek: 0.1, koniec: 0.01 };


describe('test obiektu "Wskaznik"',function(){
	it('test',function(){
		assert.equal(wsk_test.znajdzWskaznik().poczatek,w_test.poczatek);
		assert.equal(wsk_test.znajdzWskaznik().koniec,w_test.koniec);

	});
});