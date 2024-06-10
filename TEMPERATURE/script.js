document.getElementById('convertForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const inputDegree = parseFloat(document.getElementById('inputDegree').value);
    const inputUnit = document.getElementById('selectInputDegreeType').value;
    const outputUnit = document.getElementById('selectConversionType').value;
    let convertedDegree;

    // Conversion logic
    if (inputUnit === outputUnit) {
        convertedDegree = inputDegree;
    } else if (inputUnit === 'C') {
        if (outputUnit === 'F') {
            convertedDegree = (inputDegree * 9/5) + 32;
        } else if (outputUnit === 'K') {
            convertedDegree = inputDegree + 273.15;
        }
    } else if (inputUnit === 'F') {
        if (outputUnit === 'C') {
            convertedDegree = (inputDegree - 32) * 5/9;
        } else if (outputUnit === 'K') {
            convertedDegree = ((inputDegree - 32) * 5/9) + 273.15;
        }
    } else if (inputUnit === 'K') {
        if (outputUnit === 'C') {
            convertedDegree = inputDegree - 273.15;
        } else if (outputUnit === 'F') {
            convertedDegree = ((inputDegree - 273.15) * 9/5) + 32;
        }
    }

    document.getElementById('convertedDegree').innerText = convertedDegree.toFixed(2);
    document.getElementById('convertedUnit').innerText = outputUnit;

    // Change background color based on temperature
    const resultCard = document.querySelector('.resultSection');
    if (outputUnit === 'C') {
        if (convertedDegree < 0) {
            resultCard.style.backgroundColor = '#00f'; // Blue for cold
        } else if (convertedDegree < 30) {
            resultCard.style.backgroundColor = '#0f0'; // Green for moderate
        } else {
            resultCard.style.backgroundColor = '#f00'; // Red for hot
        }
    } else if (outputUnit === 'F') {
        if (convertedDegree < 32) {
            resultCard.style.backgroundColor = '#00f'; // Blue for cold
        } else if (convertedDegree < 86) {
            resultCard.style.backgroundColor = '#0f0'; // Green for moderate
        } else {
            resultCard.style.backgroundColor = '#f00'; // Red for hot
        }
    } else if (outputUnit === 'K') {
        if (convertedDegree < 273.15) {
            resultCard.style.backgroundColor = '#00f'; // Blue for cold
        } else if (convertedDegree < 303.15) {
            resultCard.style.backgroundColor = '#0f0'; // Green for moderate
        } else {
            resultCard.style.backgroundColor = '#f00'; // Red for hot
        }
    }
});
