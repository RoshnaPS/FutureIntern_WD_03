function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperatureInput').value);
    const unit = document.getElementById('unitInput').value;
    let result = '';

    if (isNaN(temperature))
    {
        result = 'Please enter a valid number!';
    } 
    else
     {
        if (unit === 'Celsius') {
            const fahrenheit = (temperature * 9/5) + 32;
            const kelvin = temperature + 273.15;
            result = `${temperature}°C = ${fahrenheit.toFixed(2)}°F = ${kelvin.toFixed(2)}K`;
        } else if (unit === 'Fahrenheit') {
            const celsius = (temperature - 32) * 5/9;
            const kelvin = celsius + 273.15;
            result = `${temperature}°F = ${celsius.toFixed(2)}°C = ${kelvin.toFixed(2)}K`;
        } else if (unit === 'Kelvin') {
            const celsius = temperature - 273.15;
            const fahrenheit = (celsius * 9/5) + 32;
            result = `${temperature}K = ${celsius.toFixed(2)}°C = ${fahrenheit.toFixed(2)}°F`;
        }
    }

    document.getElementById('result').innerHTML = result;
}
