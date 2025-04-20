/**
 * Hoisting
 */
console.log('Hello');
console.log('World');
console.log('===================');

// console.log(name);  <- undefined 출력됨
// var name = '코드팩토리';
// console.log(name);

/**
 * Hoisting은 무엇인가?
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기한다.
 */

var name;
console.log(name);
name = '코드팩토리';
console.log(name);

// let 과 const도 hositng이 됨
console.log(yuJin);
let yuJing = '안유진';





