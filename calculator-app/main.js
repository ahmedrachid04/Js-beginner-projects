//ahmeds notes
////////no notes


const ac = document.querySelector('#ac');
const de = document.querySelector('#de');
const period = document.querySelector('#period');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zeros = document.querySelector('#zeros');
const zero = document.querySelector('#zero');
const equal = document.querySelector('#equal');
const screen = document.querySelector('.screen');

let input = '';
const inputs = [one, two, three, four, five, six, seven, eight, nine, zero, zeros, period, plus, minus, multiply, divide];

for (const inputBtn of inputs) {
    inputBtn.addEventListener('click', (e) => {
        input += e.target.textContent;
        setInput(input);
    });
}

ac.addEventListener('click', () => (setInput('')));

de.addEventListener('click', () => {
    if (input.length > 0) setInput(input.substring(0, input.length - 1));
});

equal.addEventListener('click', evalulate);

function evalulate() {
    try {
        const result = eval(input);
        setInput(result);
    } catch (ignore) { }
}

function setInput(value) {
    input = value;
    screen.textContent = input;
}