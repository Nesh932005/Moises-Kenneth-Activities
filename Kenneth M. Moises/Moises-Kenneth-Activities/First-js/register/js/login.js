function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirm_password = document.getElementById("confirm_password").value;

    if (username === "" || password === "" || confirm_password === "") {
        alert("pls fill out all fields");
    }
    else if (password === confirm_password) {
        alert("you are logg in");
    }
    else {
        alert("invalid username or password")
    }
}  