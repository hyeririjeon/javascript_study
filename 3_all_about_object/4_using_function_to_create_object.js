/**
 * Using function to create objects
 */
function IdolModel(name, year){
    
    // if(!new.target){ // !undefined == true
    //     return new IdolModel(name, year);
    // }
    
    this.name = name;
    this.year = year;

    //return {}; // {}, 객체는 객체값 반환
    //return 123; //IdolModel { name: '안유진', year: 2003 }

    this.dance = function(){
        return `${this.name}이 춤을 춥니다.`;
    }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
console.log(yuJin.dance());

const yuJin2 = IdolModel('안유진', 2003);
console.log(yuJin2); //undefined, 값이 global로 감
console.log(global.name); //안유진

console.log('------------------');

// arrow 함수에서는 new 금지

const IdolModelArrow = (name, year) => {
    this.name = name;
    this.year = year;
}

//TypeError: IdolModelArrow is not a constructor
const yuJin3 = new IdolModelArrow('안유진', 2003);