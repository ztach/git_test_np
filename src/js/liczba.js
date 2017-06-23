var zJedn = 'cm',
	naJedn = 'mm';

var tabJedn=['km','m','dm','cm','mm'];

var przelicznikNaMetr = {
	'km':1000,
	'm':1,
	'dm':0.1,
	'cm':0.01,
	'mm':0.001
};
 

var Wskaznik = function (x,y){
	this.x = x;
	this.y = y;
	this.znajdzWskaznik = function(){
		var key = this.x,
			kej = this.y;
		return {
				'poczatek':(przelicznikNaMetr.hasOwnProperty(key)? przelicznikNaMetr[key] :0 ),
				'koniec':(przelicznikNaMetr.hasOwnProperty(kej)? przelicznikNaMetr[kej] :0 )
				};
	};
};


var wsk = new Wskaznik(zJedn,naJedn),
 	zz = wsk.znajdzWskaznik().poczatek,
 	nna = wsk.znajdzWskaznik().koniec,
 	wwsk = 1;

var wsk_test = new Wskaznik('dm','cm');


var Obliczenie = function(z,na,wsk) {
	this.z = z;
	this.na = na;
	this.wsk = wsk;
	this.przelicz = function(){
		return this.z / this.na * this.wsk;
	};
};

var oblicz = new Obliczenie(zz,nna,wwsk);

console.log(oblicz.przelicz());