/**
 * Array Functions
 */

let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

console.log(iveMembers);

// push()
//iveMembers.push('코드팩토리');
// push 도 리턴 값이 존재
console.log(iveMembers.push('코드팩토리')); //7
console.log(iveMembers);

console.log('-------------------');

// pop()
console.log(iveMembers.pop()); //코드팩토리
console.log(iveMembers); //[ '안유진', '가을', '레이', '장원영', '리즈', '이서' ]

console.log('=====================');

// shift() 
// 첫번 째 값을 반환 받음
console.log(iveMembers.shift()); //안유진
console.log(iveMembers); //[ '가을', '레이', '장원영', '리즈', '이서' ]

console.log('----------------');

// unshift()
// 첫번 째에 값을 push
console.log(iveMembers.unshift('안유진')); //6
console.log(iveMembers); // [ '안유진', '가을', '레이', '장원영', '리즈', '이서' ]

console.log('----------------');

// splice(n, m)  n번부터 m개 삭제(반환)
console.log(iveMembers.splice(0, 3)); //[ '안유진', '가을', '레이' ]
console.log(iveMembers); //[ '장원영', '리즈', '이서' ]

console.log('------------------------------');

iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

// concat() - 새로운 array를 만들어서 반환
console.log(iveMembers.concat('코드팩토리')); //[ '안유진', '가을', '레이', '장원영', '리즈', '이서', '코드팩토리' ]
console.log(iveMembers); // [ '안유진', '가을', '레이', '장원영', '리즈', '이서' ]
console.log('------------------------------');

// slice(n, m) - index 0번부터 3번 이전까지의 새로운 array 반환
console.log(iveMembers.slice(0, 3)); //[ '안유진', '가을', '레이' ]
console.log(iveMembers); //[ '안유진', '가을', '레이', '장원영', '리즈', '이서' ]
console.log('------------------------------');

// spread operator
let iveMembers2 = [
    ...iveMembers,
];
console.log(iveMembers2); //[ '안유진', '가을', '레이', '장원영', '리즈', '이서' ]

// ... 안쓰면 list 안에 list가 들어감
let iveMembers3 = [
    iveMembers,
];
console.log(iveMembers3); //[ [ '안유진', '가을', '레이', '장원영', '리즈', '이서' ] ]

let iveMembers4 = iveMembers;
console.log(iveMembers4); //[ '안유진', '가을', '레이', '장원영', '리즈', '이서' ]
console.log(iveMembers4 === iveMembers); //true


// spread operator 는 새로운 array 생성 ( = 다른 메모리)
console.log([
    ...iveMembers,
] === iveMembers); // false


console.log('------------------');

// join()
console.log(iveMembers.join()); //안유진,가을,레이,장원영,리즈,이서 (string)
console.log(iveMembers.join('/')); //안유진/가을/레이/장원영/리즈/이서
console.log(iveMembers.join(', '));
console.log('----------------------');

// sort()
// 오름차순
iveMembers.sort(); // 반환값 x
console.log(iveMembers); //[ '가을', '레이', '리즈', '안유진', '이서', '장원영' ]

console.log(iveMembers.reverse()); //[ '장원영', '이서', '안유진', '리즈', '레이', '가을' ]

let numbers = [
    1,
    9,
    7,
    5,
    3,
];

console.log(numbers); // [ 1, 9, 7, 5, 3 ]
// a, b를 비교 했을 때
// 1) a를 b 보다 나중에 정렬하려면 (뒤에두려면) 0보다 큰 숫자를 반환
// 2) a를 b 보다 먼저 정렬하려면 (앞에 두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a, b) =>{
    return a > b ? 1 : -1;
});
console.log(numbers);

numbers.sort((a, b) =>{
    return a > b ? -1 : 1;
});

console.log(numbers); //[ 9, 7, 5, 3, 1 ]

console.log('----------------------');

// map(), 반환 값 있음, 새로운 array 반환
console.log(iveMembers.map((x) => x)); //[ '장원영', '이서', '안유진', '리즈', '레이', '가을' ]
console.log(iveMembers.map((x) => `아이브: ${x}`)); // [ '아이브: 장원영', '아이브: 이서', '아이브: 안유진', '아이브: 리즈', '아이브: 레이', '아이브: 가을' ]

console.log(iveMembers.map((x) => {
    if(x === '안유진'){
        return `아이브: ${x}`;
    } else {
        return x;
    }
}));  // [ '장원영', '이서', '아이브: 안유진', '리즈', '레이', '가을' ]

console.log(iveMembers); //[ '장원영', '이서', '안유진', '리즈', '레이', '가을' ]

console.log('----------------------');

// filter()
numbers = [1, 8, 7, 6, 3];
console.log(numbers.filter((x) => true)); //[ 1, 8, 7, 6, 3 ]
console.log(numbers.filter((x) => false)); //[]
console.log(numbers.filter((x) => x % 2 === 0)); //[ 8, 6 ]
console.log(numbers); //[ 1, 8, 7, 6, 3 ]

console.log('----------------------');

// find() - 첫번째로 찾은 '값'만 반환
console.log(numbers.find((x) => x % 2 ===0)); // 8, array x, 

console.log('----------------------');

// findIndex()
console.log(numbers.findIndex((x) => x % 2 === 0)); // 1 ( index )


console.log('----------------------');

// reduce()
// p = 반환 값이 들어감( 처음엔 두번 째 반환 값) n= p의 값이 하나씩
// 0위치가 초기값
/**
 * 1. 초기값인 0이 p에 입력된다.
 * 2. numbers 어레이의 첫번째 값인 1이 n에 입력된다.
 * 3. p+n 즉, 0 + 1 의 결과값인 1 이 반환된다.
 * 4. 3에서 반환한 값(1) 이 p에 입력된다.
 * 5. 어레이의 두번째 값인 8이 n에 입력된다.
 * 6. p+n 즉, 1 + 8의 결과값인 9가 반환된다.
 * 7. 6에서 반환한 값(9)가 p에 입력된다.
 * 8. numbers 리스트의 모든 값들을 다 순회할 떄까지 반복, 결국 모든 값을 더한 25가 반환된다.
 */

console.log(numbers.reduce((p, n) => p + n, 0));