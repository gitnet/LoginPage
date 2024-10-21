function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    errorMessage.textContent = ""; // Clear any previous error messages

    if (username === "" || password === "") {
        errorMessage.textContent = "All fields are required.";
        return false;
    }

    // Add your actual login validation logic here

    return true; // Proceed with form submission
}
