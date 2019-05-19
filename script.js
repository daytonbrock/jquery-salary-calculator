$( readyNow );

// global variables
let employees = [];

function readyNow(){
    console.log( 'JQ' );
    // // `handleSubmitClick();`
    $( '#submitBtn' ).on( 'click', onSubmit ); 

function onSubmit(){
    console.log('submit employee');
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
    // function displayEmployeeList(){

    // }
        
    }
}








    // push to array of employees
    
    // // display employee objects to `#employeeTable`
    // loop over array, for each employee
    // append employee attributes
}

