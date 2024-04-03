// Prompt the user to input the speed of the car and convert it to an integer
let speed = parseInt(prompt('Please input the speed of the car'));

// Constants for speed limit, demerit points per km over the limit, and maximum demerit points allowed
const speedLimit = 70;
const kmPerDemeritPoint = 5;
const maximumDemeritPoints = 12;

// Check if the speed of the car is within the speed limit
if (speedLimit >= speed ) {
    alert("OK"); // If speed is within the limit, display "OK"
} else {
    // If speed exceeds the limit, calculate demerit points
    const demeritPoints = ((speed - speedLimit) / kmPerDemeritPoint);

    // Check if demerit points exceed the maximum allowed
    if (demeritPoints >= maximumDemeritPoints) {
        alert("License Suspended"); // If demerit points exceed the maximum, display "License Suspended"
    } else {
        alert(`Demerit Points: ${demeritPoints}`); // If demerit points are within the limit, display the calculated demerit points
    }
}