"use strict"

// Form validation with error displayed
function submitContact(event) {
    event.preventDefault();

    // Get each element
    let fName = document.getElementById('fName');
    let email = document.getElementById('email');
    let message = document.getElementById('message');

    // Reset error message
    document.getElementById('error').innerHTML = "<p>Thank you for reaching out to us!<p>";

    // Regex for email
    const emailRe = /.+@.+\.\w/;

    // Validate form and display error message
    let passed = true;
    let errorMessage = '<p class="redColor">';

    if (fName.value.length <= 0) {
        errorMessage += "Invalid Name<br>";
        passed = false;
    }

    if (!(emailRe.test(email.value))) {
        errorMessage += "Invalid Email<br>";
        passed = false;
    }

    if (message.value.length <= 0) {
        errorMessage += "Invalid Message<br>";
        passed = false;
    }

    // Display proper message
    if (passed) {
        // Message to confirm form submitted
        document.getElementById('error').innerHTML = "<p>Thank you for reaching out to us!<p>";

        // Reset form
        fName.value = "";
        lName.value = "";
        email.value = "";
        message.value = "";
    } else {
        errorMessage += "</p>";
        document.getElementById('error').innerHTML = errorMessage;
    }
}

// Event listeners
document.getElementById('submit').addEventListener('click', submitContact);