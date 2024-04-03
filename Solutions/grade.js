// Prompting the user to input student marks
let marks = parseInt(prompt('Please input your marks'));

// Calling the function to check the grade based on the input marks
gradeChecker();

// Function to check the grade based on the marks
function gradeChecker() {
    // Checking if the marks are between 0 and 100
    if (marks >= 0 && marks <= 100) {
        // Declaring a variable to store the grade
        let grade;
        // Checking the range of marks to determine the grade
        if (marks > 79) {
            alert('Your grade is an A');
        } else if (marks >= 60 && marks <= 79) {
            alert('Your grade is a B');
        } else if (marks >= 50 && marks <= 59) {
            alert('Your grade is a C');
        } else if (marks >= 40 && marks <= 49) {
            alert('Your grade is a D');
        } else if (marks < 40) {
            alert('Your grade is an E');
        }
    } else {
        // If marks are not between 0 and 100, prompt the user again to input a valid mark
        let newMarks = parseInt(alert('Please input a mark between 0 and 100'));
    } 
} 