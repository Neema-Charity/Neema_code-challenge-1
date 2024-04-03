let income = parseInt(prompt('Please insert the total of your Basic Salary and Benefits'));

// Function to calculate Net Salary
function calculateNetSalary(_income) {
    const grossSalary = _income; // Calculate gross salary
    const payee = calculatePayee(grossSalary); // Calculate tax
    const NHIF = calculateNHIF(grossSalary); // Calculate NHIF deduction
    const NSSF = calculateNSSF(grossSalary); // Calculate NSSF deduction
    const netSalary = grossSalary - payee - NHIF - NSSF; // Calculate net salary
    
    alert(
        `Gross Salary: ${grossSalary}\nPayee: ${payee}\nNHIF: ${NHIF}\nNSSF: ${NSSF}\nNet Salary: ${netSalary}`
    ); // Return calculated values
}

// Constants for Payee rates, NHIF, and NSSF from the provided link
const PAYEE_RATES = [
    { min: 0, max: 24000, rate: 10 },
    { min: 24001, max: 32333, rate: 15 },
    { min: 32334, max: 40333, rate: 20 },
    { min: 40334, max: 48333, rate: 25 },
    { min: 48334, max: Infinity, rate: 30 }
];

const NHIF_RATES = [
    // NHIF rates based on income ranges
    {min:0, max:5999, deduction:150},
    {min:6000, max:7999, deduction:300},
    {min:8000, max:11999, deduction:400},
    {min:12000, max:14999, deduction:500},
    {min:15000, max:19999, deduction:600},
    {min:20000, max:24999, deduction:750},
    {min:25000, max:29999, deduction:850},
    {min:30000, max:34999, deduction:900},
    {min:35000, max:39999, deduction:950},
    {min:40000, max:44999, deduction:1000},
    {min:45000, max:49999, deduction:1100},
    {min:50000, max:59999, deduction:1200},
    {min:60000, max:69999, deduction:1300},
    {min:70000, max:79999, deduction:1400},
    {min:80000, max:89999, deduction:1500},
    {min:90000, max:99999, deduction:1600},
    {min:100000, max:Infinity, deduction:1700},
];

const NSSF_RATE = 6;
const NSSF_MAX = 1800;

// Function to calculate tax based on income
function calculatePayee(income) {
    let payee = 0; // Initialize payee
    for (const bracket of PAYEE_RATES) {
        if (income > bracket.max) {
            // If income exceeds the maximum of the current bracket, calculate tax for the entire bracket
            payee += (bracket.max - bracket.min + 1) * (bracket.rate / 100);
        } else {
            // If income falls within the current bracket, calculate tax for the portion of income within the bracket
            payee += (income - bracket.min + 1) * (bracket.rate / 100);
            break; // Exit loop as calculation is complete
        }
    }
    return Math.round(payee); // Return calculated tax
}

// Function to calculate NHIF deduction based on income
function calculateNHIF(income) {
    let NHIF = 0; // Initialize NHIF
    // NHIF deduction calculation based on income ranges
    for (const bracket of NHIF_RATES) {
        if (income >= bracket.min && income <= bracket.max) {
            NHIF = bracket.deduction;
            break;
        }
    }
    return Math.round(NHIF);
}

// Function to calculate NSSF deduction based on income
function calculateNSSF(income) {
    let NSSF = Math.floor(income * (NSSF_RATE / 100)); // Calculate NSSF
    return Math.min(NSSF, NSSF_MAX); // Return minimum of calculated NSSF and NSSF_MAX
}

// Call calculateNetSalary function with the income provided by the user
calculateNetSalary(income);
