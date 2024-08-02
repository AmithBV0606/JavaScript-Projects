// Code written by myself

const buttons = document.querySelectorAll(".button");
// console.log(buttons);

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        // document.body.style.backgroundColor = button.id;
        document.body.style.backgroundColor = e.target.id;
        if (e.target.id === "blue") {
            document.body.style.color = "white";
        } else {
            document.body.style.color = "black";
        }
    })
});