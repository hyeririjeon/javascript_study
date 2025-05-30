/**
 * Callback
 */
function waitAndRun() {
    setTimeout(() => {
        console.log('끝');
    }, 2000);
}

// waitAndRun();

function waitAndRun2() {
    setTimeout(
        () => {
            console.log('1번 콜백 끝');
            setTimeout(() => {
                console.log('2번 콜백 끝');
                setTimeout(() => {
                    console.log('3번 콜백 끝');
                }, 2000);
            }, 2000);
        }, 2000);
}

// waitAndRun2();


/**
 * Promise
 */

const timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('완료');
    }, 2000);
});

// timeoutPromise.then((res) => {
//     console.log('---then---');
//     console.log(res);
// });

const getPromise = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        // if(xxx){
        //     resolve('성공')
        // }else{
        //     reject('에러');
        // }
        resolve('에러');
    }, seconds * 1000);
});

// getPromise(3)
//     .then((res) => {
//         console.log('--- first then ---');
//         console.log(res);
//     })
//     .catch((res)=>{
//         console.log('--- first catch ---');
//         console.log(res);
//     })
//     .finally(()=>{
//         console.log('--- finally ---');
//     });

/**
 * 모든 Promise가 동시에 실행되며,
 * 가장 느린 Promise가 끝날 때까지 기다린 뒤
 * 모두 성공하면 then, 하나라도 실패하면 catch가 실행된다.
 */
Promise.all([
    getPromise(1),
    getPromise(4),
    getPromise(1),
]).then((res)=>{
    console.log(res); // 4초 뒤 [ '에러', '에러', '에러' ]
});