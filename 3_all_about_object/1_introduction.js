/**
 * All about objects
 * 
 * 객체를 선언할 때 사용할 수 있는 방법들
 * 
 * 1) object를 생성해서 객체 생성 - 기본기 {}
 * 2) class 를 인스턴스화 해서 생성 - class와 oop
 * 3) function을 사용해서 객체 생성
 */

//1)
const yuJin = {
    name: '안유진',
    year: 2003,
};
console.log(yuJin);

//2)
class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}
console.log(new IdolModel('안유진', 2003));

//3)
// 생성자 함수
function IdolFunction(name, year){
    this.name = name;
    this.year = year;
}

// this 키워드 있을 때만 new 
const gaEul = new IdolFunction('가을', 2002);
console.log(gaEul);