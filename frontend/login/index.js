function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    // Dummy username and password
    var dummyUsername = "dummy";
    var dummyPassword = "dummy";

    // Your validation logic goes here
    if (username === dummyUsername && password === dummyPassword) {
        // Redirect if the username and password are correct
        redirect(); // Call the redirect function
        return false; // Prevent form submission
    } else {
        // Display an error message if the username or password is incorrect
        errorMessage.style.display = "block";
        return false; // Prevent form submission
    }
}
