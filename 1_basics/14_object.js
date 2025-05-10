/**
 * Object 객체
 */

// key : value pair
// 여기서 this 는 현재 객체를 가리킴
let yuJin = {
    name: '안유진',
    group: '아이브',
    dance: function() {
        return `${this.name}이 춤을 춥니다.`;
    }
};

console.log(yuJin); //{ name: '안유진', group: '아이브', dance: [Function: dance] }
console.log(yuJin.name); // 안유진
console.log(yuJin['name']); // 안유진

const key = 'name';
console.log(yuJin[key]); // 안유진

console.log(yuJin.dance); //[Function: dance]
console.log(yuJin.dance()); //안유진이 춤을 춥니다.

const nameKey = 'name';
const nameValue = '안유진';

const groupKey = 'group';
const groupValue = '아이브';

const yuJin2 = {
    [nameKey]: nameValue,
    [groupKey]: groupValue,
    dance: function() {
        return `${this.name}이 춤을 춥니다.`;
    } 
}
console.log(yuJin2); //{ name: '안유진', group: '아이브' }
console.log(yuJin2.dance());

yuJin2['group'] = '코드팩토리';
console.log(yuJin2); //{ name: '안유진', group: '코드팩토리', dance: [Function: dance] }

// 존재하지 않는 키값을 넣으면?
yuJin2['englishName'] = 'An Yu Jin';
console.log(yuJin2);
// {
//     name: '안유진',
//     group: '코드팩토리',
//     dance: [Function: dance],
//     englishName: 'An Yu Jin'
//   }   --> 새로 생성됨

delete yuJin2['englishName'];
console.log(yuJin2); //{ name: '안유진', group: '코드팩토리', dance: [Function: dance] }


/**
 * 객체의 특징
 * 
 * 1) const로 선언할 경우 객체 자체를 변경할 수는 없다.
 * 2) 객체 안의 프로퍼티나 메서드는 변경 할 수 있다.
 */

const wonYoung = {
    name: '장원영',
    group: '아이브',
}

console.log(wonYoung);

// wonYoung = {}; //TypeError: Assignment to constant variable. << 객체의 특징 1

wonYoung['group'] = '코드팩토리';
console.log(wonYoung); //{ name: '장원영', group: '코드팩토리' } << 객체의 특징 2

/**
 * 모든 키값 다 가져오기
 */
console.log(Object.keys(wonYoung)); //[ 'name', 'group' ]

/**
 * 모든 벨류값 다 가져오기
 */
console.log(Object.values(wonYoung)); //[ '장원영', '코드팩토리' ]

/**
 * 
 */
const name = '안유진';

const yuJin3 = {
    name, // == name: name
}
console.log(yuJin3); //{ name: '안유진' }
