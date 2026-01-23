function login() {
    // Kunin ang values ng input
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirm_password = document.getElementById("confirm_password").value.trim();
    const error = document.getElementById("error");

    // Reset message and style
    error.style.display = "none";
    error.style.background = "#ff4d4d"; // default red

    // Check for empty fields
    if (username === "" || password === "" || confirm_password === "") {
        error.innerHTML = "sagutin mo bawat form kaya iniiwan ka e aray mo!";
        error.style.display = "block";
    }
    // Check if passwords match
    else if (password !== confirm_password) {
        error.innerHTML = "Passwords do not match parang yung babaeng pangarap mo na hindi naging sayu aray mo!";
        error.style.display = "block";
    }
    // Success
    else {
        error.innerHTML = "HEP-HEP-HUREY PASOK!";
        error.style.background = "#4cd964"; // green for success
        error.style.display = "block";

        // Optional: Clear input fields
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        document.getElementById("confirm_password").value = "";
    }
}
