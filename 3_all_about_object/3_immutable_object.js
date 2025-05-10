/**
 * Immutable Object
 */
const yuJin = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}

console.log(yuJin);

/**
 * Extensible
 */

console.log(Object.isExtensible(yuJin)); //true

yuJin['position'] = 'vocal';

console.log(yuJin); //{ name: '안유진', year: 2003, age: [Getter/Setter], position: 'vocal' }

Object.preventExtensions(yuJin);

console.log(Object.isExtensible(yuJin)); //false

// false 후 값 추가 x
yuJin['groupName'] = '아이브';
console.log(yuJin); //{ name: '안유진', year: 2003, age: [Getter/Setter], position: 'vocal' }

// 삭제는 가능
delete yuJin['position'];
console.log(yuJin); // { name: '안유진', year: 2003, age: [Getter/Setter] }

console.log('------------------------');

/**
 * Seal
 */

const yuJin2 = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}
console.log(yuJin2);

console.log(Object.isSealed(yuJin)); //false

Object.seal(yuJin2);

yuJin2['groupName'] = '아이브';

// seal 후 groupName 추가 x
console.log(yuJin2); //{ name: '안유진', year: 2003, age: [Getter/Setter] }

// 삭제도 불가능 
delete yuJin2['name'];
console.log(yuJin2); //{ name: '안유진', year: 2003, age: [Getter/Setter] }

Object.defineProperty(yuJin2, 'name', {
    writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));
// {
//   value: '안유진',
//   writable: false, <--- 변경 됨
//   enumerable: true,
//   configurable: false <---- false로 변경 되어있음
// }

console.log('-----------------');

/**
 * Freezed
 * 
 * 읽기 외에 모든 기능을 불가능하게 만든다.
 */
const yuJin3 = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}
console.log(Object.isFrozen(yuJin3)); // false

Object.freeze(yuJin3);
console.log(Object.isFrozen(yuJin3)); // true

// 추가 불가
yuJin3['groupName'] = '아이브';
console.log(yuJin3); //{ name: '안유진', year: 2003, age: [Getter/Setter] }

// 삭제 불가
delete yuJin3['name'];
console.log(yuJin3); //{ name: '안유진', year: 2003, age: [Getter/Setter] }


//TypeError: Cannot redefine property: name
// Object.defineProperty(yuJin3, 'name', {
//     value: '코드팩토리',
// })


console.log(Object.getOwnPropertyDescriptor(yuJin3, 'name'));
// {
//   value: '안유진',
//   writable: false,
//   enumerable: true,
//   configurable: false
// }

console.log('============================');
// 하위 오브젝트는 freeze 되지 않음 ( seal, Extensible 도 동일)
const yuJin4 = {
    name: '안유진',
    year: 2003,
    // object 안에 object 정의
    wonYoung: {
        name: '장원영',
        year: 2002,
    },
};

Object.freeze(yuJin4);
console.log(Object.isFrozen(yuJin4)); //true
console.log(Object.isFrozen(yuJin4['wonYoung'])); //false