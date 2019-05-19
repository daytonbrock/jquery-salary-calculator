$( readyNow );

// global variables
let employees = [];

function readyNow(){
    // activate click listeners
    // submit button
    $( '#submitBtn' ).on( 'click', handleSubmitClick ); 
    // remove button
    $( '#employeesOut' ).on( 'click', '#removeBtn', handleRemoveClick );

    // display employees and calculate monthly cost
    displayEmployees();
    calculateMonthlyCost();
} // end funk

// // the `handleSubmitClick` function
function handleSubmitClick() {
    // get user input
    let firstNameIn = $('#firstNameIn').val();
    let lastNameIn = $('#lastNameIn').val();
    let IDIn = $('#IDIn').val();
    let titleIn = $('#titleIn').val();
    let annualSalaryIn = $('#annualSalaryIn').val();
    // if inputs are filled, create a new employee
    if( firstNameIn != '' && lastNameIn != '' && IDIn != '' && titleIn != '' && annualSalaryIn != '' ){
        // create employee object
        let newEmployee = {
            firstName: firstNameIn,
            lastName: lastNameIn,
            ID: IDIn,
            title: titleIn,
            annualSalary: annualSalaryIn
        } // end obj
        // push to new employee to `employees`
        employees.push(newEmployee);
        // clear inputs 
        $( '#firstNameIn' ).val( '' );
        $( '#lastNameIn' ).val( '' );
        $( '#IDIn' ).val( '' );
        $( '#titleIn' ).val( '' );
        $( '#annualSalaryIn' ).val( '' );
        // update table
        displayEmployees();
    } else {
        alert( 'input(s) left blank. please enter all the information!' );
    } // end if else
    calculateMonthlyCost();
} // end funk

function handleRemoveClick(){
    // find employee in array that matches clicked employee
    for( let i=0; i<employees.length; i++ ){
        if( $(this).parent().siblings( '#listFirstName' ).html() === employees[i].firstName ){
            // remove that employee from array
            employees.splice( i, 1 );
        } // end if
    } // end for
    displayEmployees();
    calculateMonthlyCost();       
} // end funk

// // the `displayEmployees` function
function displayEmployees(){
    // empty the table
    $('#employeesOut').empty();
    // loop over employees and append to DOM
    for (let obj of employees) {
        // get employee info
        let firstName = obj.firstName;
        let lastName = obj.lastName;
        let ID = obj.ID;
        let title = obj.title;
        let annualSalary = obj.annualSalary;
        // add employee to the table
        $('#employeesOut').append(`
            <tr>
                <td id="listFirstName">${firstName}</td>
                <td>${lastName}</td>
                <td>${ID}</td>
                <td>${title}</td>
                <td class="annualSalaryOut">${ numeral(annualSalary).format( '$0,0.00' ) }</td>
                <td><button id="removeBtn" class="btn btn-light">Remove</button></td>
            </tr>
        `)
    } // end for
} // end funk

function calculateMonthlyCost(){
    // calculate total of employee salaries
    let totalAnnualSalary = 0;
    // loop over employees add each salary to total
    for( let employee of employees ){
        totalAnnualSalary += parseFloat( employee.annualSalary );
    } // end for
    // calculate total monthly cost
    let totalMonthly = totalAnnualSalary / 12;
    // display to DOM
    $( '#monthlyOut' ).html( numeral(totalMonthly).format( '$0,0.00' ) );
} // end funk