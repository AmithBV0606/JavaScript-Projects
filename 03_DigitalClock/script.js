const clock = document.getElementById('clock');
console.log(clock);

setInterval(() => {
    let date = new Date();
    let digitalClock = date.toLocaleTimeString();
    clock.innerHTML = `<div>${digitalClock}</div>`
}, 1000);