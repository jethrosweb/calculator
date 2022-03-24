const buttons = document.getElementsByClassName('calc-btn')

function getInputValue() {
    let input = event.target.innerText
    displayValue(input)
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].setAttribute("onclick", 'getInputValue()')
}

function displayValue(val) {
    const display = document.getElementById("display")
    let current = display.innerHTML

    if (display.innerHTML == "0") {
        if (val != "C" && val != "DEL") {
            display.innerHTML = ""
            display.innerHTML += val
        }
    } else {
        if (val == "DEL") {
            display.innerHTML = current.slice(0,-1)
            if (display.innerHTML.length < 1) {
                display.innerHTML = "0"
            }
        }

        if (val != "C" && val != "DEL" && val != "=") {
            display.innerHTML += val
        }

        if (val == "C") {
            display.innerHTML = "0"
        }

        if (val == "=") {
            let result = display.innerHTML;
            display.innerHTML = (eval(result)).toFixed(2)
        }
    } 
}