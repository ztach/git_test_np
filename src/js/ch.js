export class PrimeChecker {
    constructor(){};
 
    check(val){
        if(isNaN(val) || val === undefined){
            throw new Error('Invalid argument')
        } else {
            if(val === 1) {
                return false;
            } else {
                for(var i = 2; i < Math.sqrt(val); i++) {
                    if(val % i === 0) {
                        return false;
                    }
                }
                return true;
            }
        }
    }
}