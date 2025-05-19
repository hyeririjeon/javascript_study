/**
 * Async theory
 */

// Sync Programming 예시
// function longWork() {
//     const now = new Date();

//     /**
//      * milliseconds since epoch
//      * 1970년도 1월 1일부터 지금 코드가 실행되는 순간까지의 시간을
//      * 밀리초로 반환한다.
//      */
//     const milliseconds = now.getTime();
//     const afterTwoSeconds = milliseconds + 2 * 1000;

//     while(new Date().getTime() < afterTwoSeconds){

//     }

//     console.log('완료');
// }

// // longwork();가 돌아가는 동안 다른 코드는 실행되지 않는다.
// console.log('Hello');
// longWork();
// console.log('World');
/**
 * Hello
 * 완료
 * World
 */

function longWork(){
    setTimeout(()=>{
        console.log('완료');
    }, 2000);
}

console.log('Hello');
longWork();
console.log('World');
/**
 * Hello
 * World
 * 완료
 */

// setTimeout은 비동기 함수이다.
// setTimeout은 비동기적으로 동작하기 때문에 setTimeout이 끝나기 전에 다음 코드가 실행된다.

/**
 * Event Loop
 * 
 * - 자바스크립트 런타임이 시작될 때 Event Loop도 함께 생성된다.
 * 
 * - 비동기 함수(setTimeout, Promise, 이벤트 핸들러 등)는 Web API나 백그라운드에서 먼저 처리된 후,
 *   완료되면 해당 콜백 함수가 Task Queue (또는 Event Queue)에 등록된다.
 * 
 * - Event Loop는 Call Stack이 비어 있는지 계속 확인하며,
 *   비어 있는 경우에만 Queue에 있는 콜백 함수를 Stack에 옮겨 실행한다.
 * 
 * - 이 구조를 통해 자바스크립트는 단일 스레드 환경에서도 비동기 처리가 가능하다.
 */