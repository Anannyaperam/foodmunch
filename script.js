function convertLength() {
    const value = parseFloat(document.getElementById('length-value').value);
    const fromUnit = document.getElementById('length-from').value;
    const toUnit = document.getElementById('length-to').value;

    const lengthUnits = {
        'meters': 1,
        'kilometers': 0.001,
        'centimeters': 100,
        'millimeters': 1000,
        'inches': 39.3701,
        'feet': 3.28084,
        'yards': 1.09361
    };

    const meters = value / lengthUnits[fromUnit];
    const result = meters * lengthUnits[toUnit];
    document.getElementById('length-result').innerText = `${value} ${fromUnit} = ${result.toFixed(2)} ${toUnit}`;
}

function convertTemperature() {
    const value = parseFloat(document.getElementById('temperature-value').value);
    const fromUnit = document.getElementById('temperature-from').value;
    const toUnit = document.getElementById('temperature-to').value;

    let result;

    if (fromUnit === 'celsius') {
        if (toUnit === 'fahrenheit') {
            result = (value * 9/5) + 32;
        } else if (toUnit === 'kelvin') {
            result = value + 273.15;
        }
    } else if (fromUnit === 'fahrenheit') {
        if (toUnit === 'celsius') {
            result = (value - 32) * 5/9;
        } else if (toUnit === 'kelvin') {
            result = (value - 32) * 5/9 + 273.15;
        }
    } else if (fromUnit === 'kelvin') {
        if (toUnit === 'celsius') {
            result = value - 273.15;
        } else if (toUnit === 'fahrenheit') {
            result = (value - 273.15) * 9/5 + 32;
        }
    }

    document.getElementById('temperature-result').innerText = `${value} ${fromUnit} = ${result.toFixed(2)} ${toUnit}`;
}

function convertWeight() {
    const value = parseFloat(document.getElementById('weight-value').value);
    const fromUnit = document.getElementById('weight-from').value;
    const toUnit = document.getElementById('weight-to').value;

    const weightUnits = {
        'kilograms': 1,
        'grams': 1000,
        'milligrams': 1e6,
        'pounds': 2.20462,
        'ounces': 35.274
    };

    const kilograms = value / weightUnits[fromUnit];
    const result = kilograms * weightUnits[toUnit];
    document.getElementById('weight-result').innerText = `${value} ${fromUnit} = ${result.toFixed(2)} ${toUnit}`;
}

document.getElementById('type').addEventListener('change', function() {
    const sections = document.querySelectorAll('.converter-section');
    sections.forEach(section => section.style.display = 'none');
    document.querySelector(`.${this.value}.converter-section`).style.display = 'block';
});
