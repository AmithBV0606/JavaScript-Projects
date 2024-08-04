// Generate hex values

const randomColor = function() {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        let random = Math.round(Math.random() * 16);
        color += hex[random];      
    }
    return color;
}

let intervalId;

// Start Button Functionality
const start = document.querySelector('#start');
start.addEventListener('click', () => {
    intervalId = setInterval(() => {
        document.body.style.backgroundColor = `${randomColor()}`;
    }, 1000);
})

// Stop Button Functionality
const stop = document.querySelector('#stop');
stop.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
})