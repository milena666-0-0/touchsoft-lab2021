// 1


const debounceBtn = document.getElementById('1');
const debounceGreeting = debounce(() => { console.log('Hello world')}, 5000 );

function debounce (func, delay) {

    let timeout;

    return (...args) => {

        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
};

debounceBtn.addEventListener('click' , debounceGreeting);


// 2


const throttleBtn = document.getElementById('2');
const throttledGreeting = throttle(() => console.log('You are welcome'), 2000);

let throttlePaused = false;
let called = false;

function throttle (func, delay) {

    return function wrapper(...args) {

        if(throttlePaused) return;
        
        throttlePaused = called;

        setTimeout(() => {

            throttlePaused = !called;

            func.apply(this, ...args);
            wrapper.apply(this, ...args);

        }, delay);

    };
};

throttleBtn.addEventListener('click', () => {
    
    throttledGreeting();   

    if(!called) {
        throttleBtn.textContent = 'stop';
        called = true;
        
    } else {
        throttleBtn.textContent = 'start';
        called = false;
    }

});


// 3

const delayedBtn = document.getElementById('3');
const span = document.querySelector('.seconds');


function throttleClick (func) {

    let delay;

    return function wrapper(...args) {

        delay = Math.floor(Math.random() * 4000 + 1000);
        const seconds = Math.floor(delay / 1000);

        if(throttlePaused) return;
        
        throttlePaused = called;

        setTimeout(() => {

            throttlePaused = !called;

            func.call(this, seconds);
            wrapper.call(this, ...args);

        }, delay);

    };

};

const delayedClickBtn = throttleClick((seconds) => span.textContent = ` ${seconds}`);

delayedBtn.addEventListener('click', () => {
    
    delayedClickBtn();

    if(!called) {
        delayedBtn.textContent = 'stop';
        called = true;
        
    } else {
        delayedBtn.textContent = 'start';
        called = false;
    }
});


// 4


const textarea = document.getElementById('floatingTextarea');
const debounceInput = debounce((e) => console.log(e.target.value), 1000);

textarea.addEventListener('input', debounceInput);

