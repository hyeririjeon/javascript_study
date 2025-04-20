/**
 * Operators
 * 
 * 연산자
 * 
 */

/**
 * 산술 연산자
 * 
 * 1) 덧셈
 * 2) 뺼셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 *
 */

console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10);
console.log(10 % 3);

console.log('========================');

console.log(10 * (10 + 10));

/**
 * 증가와 감소
*/
let number = 1;
number ++;
console.log(number);

number --;
console.log(number);

console.log('========================');
/**
 * 연산자의 위치
 */
let result = 1;
console.log(result);

// 저장 후 number ++
result = number ++;
console.log(result, number); // 1 2

result = number --;
console.log(result, number); // 2 1

result = ++ number;
console.log(result, number); // 2 2

result = -- number;
console.log(result, number); // 1 1 

/**
 * 숫자 타입이 아닌 타입에 +, - 사용하면 어떻게 될까?
 */
let sample = '99';

console.log(+sample); // 99
console.log(typeof +sample); // number
// string 99(숫자 값인 string)에 + 붙이면 number로 인식 but 기존 값이 num 으로 변경되는 것은 아님
console.log(sample); // 99
console.log(typeof sample) // string

sample = true;
console.log(+sample); // 1  true + 하면 ( 숫자로 변환하면 ) 1이 됨
console.log(typeof +sample); //number

sample = false;
console.log(+sample); // 0
console.log(typeof +sample); //number

// 숫자가 아닌 string 을 숫자로 변환하려고 한다면 ?
sample = '안유진'; 
// NaN -> Not a Number
console.log(+sample);

sample = '99';
console.log(-sample); // -99
console.log(typeof -sample); //number
console.log(typeof sample); //string


/**
 * 할당 연산자 ( assignment operator)
 */

number = 100;
console.log(number);

number += 10;
console.log(number);

number -= 10;
console.log(number);

number *= 10;
console.log(number);

number /= 10;
console.log(number);

number %= 10;
console.log(number);

/**
 * 비교 연산자
 * 
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 */

// 값의 비교
console.log(5 == 5); //true
console.log(5 == '5'); //true
console.log(0 == ''); //true
console.log(true == 1);//true
console.log(true  == '1');//true
console.log(false == 0); //true

console.log('============================');

// 값과 타입의 비교
console.log(5 === 5); //true
console.log(5 === '5'); //false
console.log(0 === ''); //false
console.log(true === 1);//false
console.log(true ==='1');//false
console.log(false === 0); //false

console.log('============================');

// 값의 비교
console.log(5 != 5); //false
console.log(5 !='5'); //false
console.log(0 != ''); //false
console.log(true != 1);//false
console.log(true != '1');//false
console.log(false != 0); //false

console.log('============================');

// 값과 타입의 비교
console.log(5 !== 5); //false
console.log(5 !== '5'); //true
console.log(0 !== ''); //true
console.log(true !== 1);//true
console.log(true !=='1');//true
console.log(false !== 0); //true

console.log('============================');

/**
 * 대소 관계 비교 연산자
 */

console.log(100 > 1); //true
console.log(100 < 1); //false
console.log(100 <= 1); //fasle
console.log(100 >= 1); //true

console.log('============================');

/**
 * 삼항 조건 연산자 (ternary operator)
 */
console.log(10 > 0 ? '10이 0보다 크다' : '10이 0보다 작다');

/**
 * 논리 연산자
 * 
 * 1) && (and)
 * 2) || (or)
 */

// $&& 조건은 모두 true여야 true를 반환한다.
console.log(true && true); // true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

// ||는 하나만 true 여도 true를 반환한다.
console.log(true || true); // true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false
console.log('============================');
/**
 * 단축평가 (short circuit evaluation)
 * 
 * &&를 사용했을때 좌측이 true면 우측 값 반환
 * &&를 사용했을때 좌측이 false면 좌측 값 반환
 * ||를 사용했을때 좌측이 true면 좌측 값 반환
 * ||를 사용했을때 좌측이 false면 우측 값 반환
 * 
 */

console.log(true || '아이브'); // true
console.log(false || '아이브'); // 아이브
console.log(false && '아이브'); // false
console.log(true && '아이브'); // 아이브

// true && true 계산 -> true && 아이브 계산 -> 아이브
console.log(true && true && '아이브'); // 아이브
// true && false 계산 -> false && 아이브 계산 -> false
console.log(true && false && '아이브'); // false

/**
 * 지수 연산자
 */

console.log(2 ** 2); //4
console.log(10 ** 3); //1000
console.log('============================');
/**
 * null 연산자
 */
let name; // undefined
// 좌측값이 null 이거나 undefined 일때 우측값을 반환
name = name ?? '코드팩토리';
console.log(name);
// name의 값이 코드팩토리라 코드팩토리 반환
name = name ?? '아이브';
console.log(name);

let name2;
name2 ??= '코드팩토리';
console.log(name2);
