$( readyNow );

// global variables
let employees = [];

function readyNow(){
    console.log( 'JQ' );
    // // `handleSubmitClick();`
    $( '#submitBtn' ).on( 'click', handleSubmitClick ); 
    
    // // display employee objects to `#employeeTable`
    // loop over array, for each employee
    // append employee attributes
} // end funk

function handleSubmitClick() {
    // get user input
    let firstNameIn = $('#firstNameIn').val();
    let lastNameIn = $('#lastNameIn').val();
    let IDIn = $('#IDIn').val();
    let titleIn = $('#titleIn').val();
    let annualSalaryIn = $('#annualSalaryIn').val();
    // create employee object
    let newEmployee = {
        firstName: firstNameIn,
        lastName: lastNameIn,
        ID: IDIn,
        title: titleIn,
        annualSalary: annualSalaryIn
    } // end obj
    // push to array of employees
    employees.push(newEmployee);
    console.log(employees);
} // end funk