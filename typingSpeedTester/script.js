const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");



function spellCheck() {
    let textEntered = testArea.value;
    console.log(textEntered);
}

function start() {
    let textEnterdLength = testArea.value.length;
    console.log(textEnterdLength);
}

function reset() {
    console.log("reset button has been pressed!");
}

testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);
