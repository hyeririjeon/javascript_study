/**
 * Getter and Setter
 */

class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    /**
     * 1) 데이터를 가공해서 새로운 데이터를 반환할 때
     * 2) private 한 값을 반환할 때
     */
    get nameAndYear(){
        return `${this.name}-${this.year}`;
    }

    set setName(name){
        this.name = name;

    }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin); //IdolModel { name: '안유진', year: 2003 }
// nameAndYear() 가 아님 !
console.log(yuJin.nameAndYear); //안유진-2003

yuJin.setName = '장원영';
console.log(yuJin); //IdolModel { name: '장원영', year: 2003 }

console.log('========================');

//private - #, es7

class IdolModel2{
    #name; //es7
    year;

    constructor(name, year){
        this.#name = name;
        this.year = year;
    }
    // getter를 이용해서 private 값을 가져온다
    get name(){
        return this.#name;
    }

    set name(name){
        this.#name = name;
    }
}

const yuJin2 = new IdolModel2('안유진', 2003);
console.log(yuJin2); // IdolModel2 { year: 2003 }
console.log(yuJin2.name); // 안유진

yuJin2.name = '코드팩토리';
console.log(yuJin2.name); // 코드팩토리