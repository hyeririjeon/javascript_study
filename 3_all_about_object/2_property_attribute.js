/**
 * Property Attribute
 * 
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고있는 프로퍼티
 * 2) 액세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나
 *                  설정할때 호출되는 함수로 구성된 프로퍼티
 *                  예를들면 getter와 setter
 */
const yuJin = {
    name: '안유진',
    year: 2003,
};

//static 함수 
//{ value: 2003, writable: true, enumerable: true, configurable: true }
console.log(Object.getOwnPropertyDescriptor(yuJin, 'year'));

/**
 * 1) value - 실제 프로퍼티의 값
 * 2) writable - 값을 수정 할 수 있는지 여부. false로 설정하면 프로퍼티 값을
 *               수정 할 수 없다.
 * 3) enumerable - 열거가 가능한지 여부이다. for...in 룹 등을 사용 할 수 있으면
 *                 true를 반환한다.
 * 4) configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단한다.
 *                   false 일 경우 프로퍼티 삭제나 어트리뷰트
 *                   변경이 금지된다. 단, writable이 true인 경우
 *                   값 변경과 writable을 변경하는건 가능하다.
 */
console.log(Object.getOwnPropertyDescriptor(yuJin, 'name'));

// getOwnPropertyDescriptors
console.log(Object.getOwnPropertyDescriptors(yuJin));
/**
 *
 *  {
  name: {
    value: '안유진',
    writable: true,
    enumerable: true,
    configurable: true
  },
  year: { value: 2003, writable: true, enumerable: true, configurable: true }
}
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

console.log(yuJin2); //{ name: '안유진', year: 2003, age: [Getter/Setter] }
console.log(yuJin2.age); //22

yuJin2.age = 29;
console.log(yuJin2.age); //29
console.log(yuJin2.year); //1996


// 액세서 프로퍼티
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'age'));
// {
//   get: [Function: get age],
//   set: [Function: set age],
//   enumerable: true,
//   configurable: true
// }


// writable, enumerable, configurable 지정 안하면 false로 들어감
Object.defineProperty(yuJin2, 'height', {
    value: 172,
    writable: true,
    enumerable: true,
    configurable: true,
})
console.log(yuJin2); //{ name: '안유진', year: 1996, age: [Getter/Setter], height: 172 }
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height')); //{ value: 172, writable: true, enumerable: true, configurable: true }

yuJin2.height = 180;
console.log(yuJin2);


console.log('--------------------------------');

/**
 * Writable
 */

// 이미 존재하는 property를 다시 재정의 했을 때 기존에 있던 값들은 그대로 유지
Object.defineProperty(yuJin2, 'height', {
    writable:false,
});

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

console.log('-------------');
yuJin2.height = 172;
console.log(yuJin2); //{ name: '안유진', year: 1996, age: [Getter/Setter], height: 180 }, height 변경 안됨


console.log('-------------');
/**
 * Enumerable
 */

console.log(Object.keys(yuJin2)); //[ 'name', 'year', 'age', 'height' ]
for(let key in yuJin2){
    console.log(key);
    // name
    // year
    // age
    // height
}

Object.defineProperty(yuJin2, 'name', {
    enumerable:false,
});

//{ value: '안유진', writable: true, enumerable: false, configurable: true }
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));

console.log('-------------');
console.log(Object.keys(yuJin2)); //[ 'year', 'age', 'height' ], name이 사라짐
for(let key in yuJin2){
    console.log(key);
    // year
    // age
    // height
}
console.log(yuJin2); //{ year: 1996, age: [Getter/Setter], height: 180 }
console.log(yuJin2.name); //안유진, 열거만 안됨

console.log('-------------');

/**
 * Configurable
 */
Object.defineProperty(yuJin2, 'height', {
    writable: true,
    configurable: false,
});

//{ value: 180, writable: true, enumerable: true, configurable: false }
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));


//TypeError: Cannot redefine property: height, -> configurable: false
// Object.defineProperty(yuJin2, 'height', {
//     enumerable: false,
// });

console.log('-------------');
Object.defineProperty(yuJin2, 'height', {
    value: 172,
});
//{ value: 172, writable: true, enumerable: true, configurable: false }
// value는 바꿀 수 있다. writable: true
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));
console.log('-------------');


// writable을 true -> false로 바꾸는 것도 가능
Object.defineProperty(yuJin2, 'height', {
    writable: false,
});
//{ value: 172, writable: false, enumerable: true, configurable: false }
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));



// TypeError: Cannot redefine property: height
// writable을 false -> true 불가능!!
Object.defineProperty(yuJin2, 'height', {
    writable: true,
});