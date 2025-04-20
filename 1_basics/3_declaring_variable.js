/**
 * Variable 선언하기
 * 
 * 1) var - 더이상 쓰지 않는다.
 * 2) let
 * 3) const
 */

var name = '코드팩토리';
console.log(name);

// '' 안에 안넣어서 숫자로 인식
var age = 32;
console.log(age);

let ive = '아이브';
console.log(ive);

/**
 *  let과 var로 선언하면 
 * 값을 추후 변경할 수 있다.
 */

ive = '안유진';
console.log(ive);

// const 는 값을 바꿀 수 없다.
const newJeans = '뉴진스';
console.log(newJeans);

// newJeans = '코드팩토리';

/**
 * 선언과 할당
 * 
 * 1) 변수를 선언하는 것.
 * 2) 할당
 * 
 * 변수 선언만 하면 자동으로 undefined 할당
 */
var name = '코드팩토리';

let girlFriend;
console.log(girlFriend);

// const는 값이 undefined로 할당 x
// const girlFriend2;
