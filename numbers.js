// Takes a number as an input and converts it to a number with commas
// eg numberWithCommas(100000) -> expected output 100,000
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Take an input and returns true if it is a number or false if it is not
// Returns false for numbers converted to strings
// eg isReallyNumber(5) -> true isReallyNumber("5") -> false
function isReallyNumber(data) {
    return typeof data === 'number' && !isNaN(data);
}

