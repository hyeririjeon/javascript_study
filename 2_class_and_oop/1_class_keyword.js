/**
 * Class Keyword
 */


/**
 * 
 * 클래스
 * - 객체지향 프로그래밍에서 특정 객체(인스턴스)를 생성하기 위한 변수와 메소드(함수)를 정의하는 일종의 틀
 * 
 */

class IdolModel{
    // name; // 프로퍼티 정의는 optional 이다 이렇게 해도 실행이 됨 대신 생성자를 통해 값은 저장은 해야함
    // year; // 프로퍼티 정의 하고, 생성자를 통한 값 저장이 없으면 IdolModel { name: '레이', year: undefined } 이런식으로 undefined 출력

    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    
    sayName(){
        return `안녕하세요 저는 ${this.name} 입니다.`;
    }
}

// constructor - 생성자

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin); 
// IdolModel { name: '안유진', year: 2003 } 
// 값 안넣고 생성하면 IdolModel { name: undefined, year: undefined }

const gaeul = new IdolModel('가을', 2002);
console.log(gaeul);
const ray = new IdolModel('레이', 2004);
console.log(ray);

console.log(yuJin.name); // 안유진
console.log(yuJin.year); // 2003

console.log(yuJin.sayName()); //안녕하세요 저는 안유진 입니다.
console.log(gaeul.sayName()); // 안녕하세요 저는 가을 입니다.

console.log(typeof IdolModel); //function
console.log(typeof yuJin); //object


