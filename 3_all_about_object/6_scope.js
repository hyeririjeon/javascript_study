/**
 * Scope
 */
var numberOne = 20;

function levelOne(){
    console.log(numberOne);
}

// levelOne(); //20

function levelOne(){
    var numberOne = 40;

    console.log(numberOne);
}

levelOne(); //40

console.log(numberOne); //20

console.log('==========================================');

function levelOne(){
    var numberOne = 40;

    function levelTwo(){
        var numberTwo = 99;

        console.log(`levelTwo numberTwo : ${numberTwo}`);
        console.log(`levelTwo numberOne : ${numberOne}`);
    }

    levelTwo();
    console.log(`levelOne numberOne : ${numberOne}`);
}

levelOne(); // 99 40 40
console.log(numberOne); //20
// console.log(numberTwo); //ReferenceError: numberTwo is not defined

/**
 * JS -> Lexical Scope
 * 
 * 선언된 위치가 상위 스코프를 정한다.
 * 
 * Dynamic Scope
 * 
 * 실행한 위치가 상위 스코프를 정한다.
 */

var numberThree = 3;

function functionOne(){
    var numberThree = 100;

    functionTwo();
}

// Lexical Scope
function functionTwo(){
    console.log(numberThree); // 3, global scope 에서 가져옴
}

functionOne();

console.log('=========================');

/**
 * var 키워드는 함수 레벨 스코프만 만들어낸다.
 * 
 * let, const 키워드는 함수 레벨 스코프와 블록 레벨 스코프를 만들어낸다.
 */

var i = 999;

for(var i = 0; i < 10; i++){
    console.log(i);
}
console.log(`i in global scope : ${i}`)

console.log('=========================');

i = 999;
// block level scope
for(let i = 0; i < 10; i++){
    console.log(i);
}
console.log(`i in global scope : ${i}`);