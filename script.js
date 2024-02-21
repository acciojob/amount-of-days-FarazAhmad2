//your JS code here. If required.
function daysOfAYear(year) {
    year = parseInt(year);
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return 366; // Leap year
    }
    return 365; // Non-leap year
}

const year  = prompt("Enter a year:");
alert(daysOfAYear(year));