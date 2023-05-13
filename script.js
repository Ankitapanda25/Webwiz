function validateForm() {
    let fullName = document.forms["inductionForm"]["fullName"].value;
    let email = document.forms["inductionForm"]["email"].value;
    let instituteEmail = document.forms["inductionForm"]["instituteEmail"].value;
    let rollNumber = document.forms["inductionForm"]["rollNumber"].value;
    let phoneNumber = document.forms["inductionForm"]["phoneNumber"].value;
    
    // Check if name contains first and last name
    if (fullName.split(' ').length < 2) {
        alert("Please enter your first and last name.");
        return false;
    }
    
    // Check if email is from Gmail, Hotmail, or Outlook
    if (!email.endsWith("@gmail.com") && !email.endsWith("@hotmail.com") && !email.endsWith("@outlook.com")) {
        alert("Please enter a valid Gmail, Hotmail, or Outlook email address.");
        return false;
    }
    
    // Check if institute email has the right format
    if (!instituteEmail.endsWith("@nitrkl.ac.in")) {
        alert("Please enter a valid institute email address.");
        return false;
    }
    
    // Check if roll number is of a first year BTech/DD student
    if (!rollNumber.startsWith("122")) {
        alert("Please enter a valid roll number.");
        return false;
    }
    
    // Check if phone number is a valid Indian phone number
    if (!phoneNumber.match(/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/)) {
        alert("Please enter a valid Indian phone number.");
        return false;
    }
    
    alert("Great job! You've officially taken the first step.");
    return true;
}