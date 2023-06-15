let resultG = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let ran = Math.ceil(Math.random() * 100);
console.log(ran)

function checkGuess() {
    let guess = parseInt(userInput.value);
    if (guess > ran) {
        resultG.textContent = "Too High!";
        resultG.style.backgroundColor = "#1e217c";
    } else if (guess < ran) {
        resultG.textContent = "Too Low!";
        resultG.style.backgroundColor = "#1e217c";

    } else if (guess === ran) {
        resultG.textContent = "Congratulations!";
        resultG.style.backgroundColor = "green";
        resultG.style.fontFamily = "sans-serif";

    } else {
        resultG.textContent = "invalid input";
        resultG.style.backgroundColor = "red";

    }


}