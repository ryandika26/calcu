let display = document.getElementById('display');
let historyList = document.getElementById('historyList');
let history = [];

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        let result = eval(display.value);
        if (display.value.includes('/') && display.value.split('/').pop() === '0') {
            throw new Error("Pembagian dengan nol tidak diperbolehkan.");
        }
        history.unshift(display.value + ' = ' + result);
        if (history.length > 5) {
            history.pop();
        }
        updateHistory();
        display.value = result;
    } catch (error) {
        alert(error.message);
        clearDisplay();
    }
}

function updateHistory() {
    historyList.innerHTML = '';
    history.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item;
        historyList.appendChild(li);
    });
}