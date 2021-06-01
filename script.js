// read values from form and compute interest and report to user
function compute() {
    // get value of principal
    var principal = document.getElementById("principal").value;    

    // validate that the principal is greater than 0
    if (principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }

    // get value of interest rate
    var rate = document.getElementById("rate").value;

    // get value for # of years
    var years = document.getElementById("years").value;

    // compute the interest
    var interest = principal * years * rate /100;

    // convert # of years to the actual calendar year
    var year = new Date().getFullYear()+parseInt(years);

    // create string to contain the HTML for the result
    output = "If you deposit <span style=\"color: yellow;\"\>"+principal+"\</span\>,\<br\>";
    output = output + "at an interest rate of <span style=\"color: yellow;\"\>"+rate+"%\</span\>.\<br\>";
    output = output + "You will receive an amount of <span style=\"color: yellow;\"\>"+interest+"\</span\>,\<br\>";
    output = output + "in the year <span style=\"color: yellow;\"\>"+year+"\</span\>\<br\>";
    
    // store output HTML into the span which should contain result
    document.getElementById("result").innerHTML = output;
}

// whenever range input changes output new value to span
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

        
