/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive 값은 copy by value 이다.
 * 2) 객체는 copy by reference다.
 */

// copy by value

let original = '안녕하세요';
let clone = original;

console.log(original); // 안녕하세요
console.log(clone); // 안녕하세요

clone += ' 안유진 입니다.';
console.log('-------------------');
console.log(original); // 안녕하세요
console.log(clone); //안녕하세요 안유진 입니다.


console.log('-------------------');

// copy by reference 

let originalObj = {
    name: '안유진',
    group: '아이브',
};

let cloneObj = originalObj;

console.log(originalObj); //{ name: '안유진', group: '아이브' }
console.log(cloneObj); //{ name: '안유진', group: '아이브' }

console.log('-------------------');

originalObj['group'] = '코드팩토리';
console.log(originalObj); //{ name: '안유진', group: '코드팩토리' }
console.log(cloneObj); //{ name: '안유진', group: '코드팩토리' }

console.log(originalObj === cloneObj); // true
console.log(original === clone); // false

originalObj = {
    name:'최지호',
    group: '코드팩토리',
};
cloneObj = {
    name:'최지호',
    group: '코드팩토리',
};

console.log(originalObj === cloneObj); // false 

// -> object 는 copy by reference ! 


console.log('-------------------');

const yuJin1 = {
    name: '안유진',
    group: '아이브',
};
const yuJin2 = yuJin1;
const yuJin3 = {
    name: '안유진',
    group: '아이브',   
}

console.log(yuJin1 === yuJin2); // true
console.log(yuJin1 === yuJin3); // false
console.log(yuJin2 === yuJin3); // flase

/**
 * Spread Operator
 */
// copy by value!! 값을 복사 후 실제로 object를 선언한 것이기 때문
const yuJin4 = {
    ...yuJin3,
};
console.log(yuJin4); //{ name: '안유진', group: '아이브' }
console.log(yuJin3 === yuJin4); //false

const yuJin5 = {
    year: 2003,
    ...yuJin3,
};
console.log(yuJin5); //{ year: 2003, name: '안유진', group: '아이브' }

// name을 먼저 선언하고, spread를 하였기 때문에 코드팩토리가 아닌 안유진으로 name 값이 저장됨

const yuJin6 = {
    name: '코드팩토리',
    ...yuJin3,
};
console.log(yuJin6); // { name: '안유진', group: '아이브' }

const yuJin7 = {
    ...yuJin3,
    name: '코드팩토리',
};
console.log(yuJin7); //{ name: '코드팩토리', group: '아이브' }

const numbers = [1, 3, 5];
const numbers2 = [
    10, //[ 10, 1, 3, 5 ]
    ...numbers,
    10, //[ 10, 1, 3, 5, 10 ]
];
console.log(numbers2);