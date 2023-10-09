
// selecting the temperature type from each of the dropdowns
const leftDropdownItemFahrenheit = document.getElementById('leftDropdownItemFahrenheit')
const leftDropdownItemCelsius = document.getElementById('leftDropdownItemCelsius')

// result button to add click functionality
const resultButton = document.getElementById('resultButton')

// placeholder text
const leftPlaceholderText = document.getElementById('leftPlaceholderText')

// result text
const resultText = document.getElementById('resultText')

let calculation = null;
let dropdownItems = [leftDropdownItemCelsius, leftDropdownItemFahrenheit]

// updates the result text to the desired temperature outcome
function updateResultText() {
    dropdownItems.forEach(function (item) {
        if (item.classList.contains('active')) {
            if (item.id.startsWith('left') && item.id.endsWith('Fahrenheit')) {
                calculateCelsius()
                resultText.innerText = "Fahrenheit to Celsius: " + calculation
            } else if (item.id.startsWith('left') && item.id.endsWith('Celsius')) {
                calculateFahrenheitTemperature()
                resultText.innerText = "Celsius to Fahrenheit: " + calculation
            }
        }
    })

}

// perform the temperature calculation
function calculateFahrenheitTemperature() {
    //F = (°C × 9/5) + 32
    let innerNumber = leftPlaceholderText.value
    calculation = (innerNumber * 9/5) + 32

}

function calculateCelsius() {
    // C = 5/9 x (F-32)
    let innerNumber = leftPlaceholderText.value
    calculation = 5/9 * (innerNumber - 32)
}

// depending on what the user selects in the dropdown update the placeholder text
function updatePlaceholderText() {
    leftPlaceholderText.placeholder = 'insert your temperature here'
    dropdownItems.forEach(function (item) {
        if (item.classList.contains('active')) {
            if (item.id.startsWith('left') && item.id.endsWith('Fahrenheit')) {
                leftPlaceholderText.placeholder = 'Insert your fahrenheit temperature here'
            } else if (item.id.startsWith('left') && item.id.endsWith('Celsius')) {
                leftPlaceholderText.placeholder = 'Insert your celsius temperature here'
            }
        }
    })
}


//toggle active status
function toggleActiveStatus() {

    dropdownItems.forEach(function (item) {
        item.addEventListener('click', function () {
            item.classList.toggle('active')
        })
    })
}


toggleActiveStatus()

resultButton.addEventListener('click', updateResultText)
leftDropdownItemFahrenheit.addEventListener('click', updatePlaceholderText)
leftDropdownItemCelsius.addEventListener('click', updatePlaceholderText)






