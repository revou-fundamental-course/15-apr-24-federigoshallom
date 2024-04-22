function convert() {
    let fahrenheitInput = parseFloat(document.getElementById('input-fahrenheit').value);
    let conversionType = document.getElementById('conversion-type').value;

    if (!isNaN(fahrenheitInput)) {
        let result, method;

        switch (conversionType) {
            case 'celsius':
                result = (fahrenheitInput - 32) * 5 / 9;
                method = '(' + fahrenheitInput + '°F - 32) * (5 / 9)';
                break;
            case 'kelvin':
                result = (fahrenheitInput + 459.67) * 5 / 9;
                method = '(' + fahrenheitInput + '°F + 459.67) * (5 / 9)';
                break;
            case 'reaumur':
                result = (fahrenheitInput - 32) * 4 / 9;
                method = '(' + fahrenheitInput + '°F - 32) * (4 / 9)';
                break;
        }

        document.getElementById('result').textContent = result.toFixed(2);
        document.getElementById('method-output').textContent = method + ' = ' + result.toFixed(2);
    } else {
        document.getElementById('result').textContent = '';
        document.getElementById('method-output').textContent = '';
    }
}

function reset() {
    document.getElementById('input-fahrenheit').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('method-output').textContent = '';
}
