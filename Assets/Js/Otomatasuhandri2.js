function acceptScientificNumber() {
    var input = document.getElementById('scientificInput').value;
    var result = document.getElementById('result');
    var number = parseFloat(input);

    if (!isNaN(number)) {
        result.textContent = 'Accepted number: ' + number;
    } else {
        result.textContent = 'Please enter a valid number';
    }
}
