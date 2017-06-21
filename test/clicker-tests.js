var expect = chai.expect,
    CLASS_CLICKER = 'clicker',
    SELECTOR_CLICKER = '.' + CLASS_CLICKER,
    /**
     * Usuwa kontener z elementem posiadającym klasę `.clicker` z pliku HTML
     *
     * @method destroyClicker
     */
    destroyClicker = function () {
        var clicker = document.querySelector(SELECTOR_CLICKER);
 
        clicker.parentNode.replaceChild(clicker.cloneNode(false), clicker);
    },
    /**
     * Tworzy nowy element z klasą `.clicker` i wstawia go na początku sekcji <body>
     * w pliku HTML.
     *
     * @method createClicker
     * @return HTMLElement
     */
    createClickerContainer = function () {
        var clicker = document.createElement('div');
 
        clicker.classList.add(CLASS_CLICKER);
 
        if (document.body.childNodes[0]) {
            document.body.insertBefore(clicker, document.body.childNodes[0]);
        } else {
            document.body.appendChild(clicker);
        }
 
        return clicker;
    };
 
describe('Clicker', function () {
    describe('Run with default settings', function () {
        /**
         * Przed uruchomieniem każdego testu
         * utwórz nowy element z klasą `.clicker`
         */
        beforeEach(function () {
            createClickerContainer();
 
            new Clicker();
        });
 
        /**
         * Po wykonaniu każdego testu
         * usuń element z klasą `.clicker` z dokumentu HTML
         */
        afterEach(destroyClicker);
 
        /**
         * Pierwszy test. Uruchamianie funkcjonalności pluginu Clicker
         */
        it('Should implement Clicker features on element with `.clicker` CSS class', function () {
 
        });
    });
});
