function validateForm() {

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var mobile = document.getElementById("mobile").value.trim();
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var country = document.getElementById("country").value;
    var crypto = document.getElementById("crypto").value;
    var dob = document.getElementById("dob").value;
    var terms = document.getElementById("terms").checked;

    var gender = document.getElementsByName("gender");
    var genderSelected = false;

    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            genderSelected = true;
            break;
        }
    }

    // Name Validation
    if (name == "") {
        alert("Please enter your Full Name");
        return false;
    }

    if (name.length < 3) {
        alert("Name must contain at least 3 characters");
        return false;
    }

    // Email Validation
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
        alert("Please enter a valid Email Address");
        return false;
    }

    // Mobile Validation
    var mobilePattern = /^[0-9]{10}$/;

    if (!mobile.match(mobilePattern)) {
        alert("Mobile Number must contain exactly 10 digits");
        return false;
    }

    // Password Validation
    if (password.length < 8) {
        alert("Password must be at least 8 characters");
        return false;
    }

    // Confirm Password Validation
    if (password != confirmPassword) {
        alert("Password and Confirm Password do not match");
        return false;
    }

    // Country Validation
    if (country == "") {
        alert("Please select your Country");
        return false;
    }

    // Cryptocurrency Validation
    if (crypto == "") {
        alert("Please select your Favorite Cryptocurrency");
        return false;
    }

    // Date of Birth Validation
    if (dob == "") {
        alert("Please select your Date of Birth");
        return false;
    }

    // Gender Validation
    if (!genderSelected) {
        alert("Please select your Gender");
        return false;
    }

    // Terms Validation
    if (!terms) {
        alert("Please accept the Terms and Conditions");
        return false;
    }

    // Show Success Popup
    document.getElementById("successPopup").style.display = "flex";

    return true;
}

// Close Popup
function closePopup(){

    document.getElementById("successPopup").style.display = "none";

    document.getElementById("registrationForm").reset();

}