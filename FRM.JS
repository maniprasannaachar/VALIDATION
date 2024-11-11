document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let isValid = true;

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    nameError.textContent = emailError.textContent = phoneError.textContent = passwordError.textContent = confirmPasswordError.textContent = "";

    // Full Name validation
    if (fullName.length < 5) {
        nameError.textContent = "Name must be at least 5 characters.";
        isValid = false;
    }

    // Email validation
    if (!email.includes("@")) {
        emailError.textContent = "Enter a valid email.";
        isValid = false;
    }

    // Phone Number validation
    if (phone.length !== 10 || phone === "123456789" || isNaN(phone)) {
        phoneError.textContent = "Enter a valid 10-digit phone number.";
        isValid = false;
    }

    // Password validation
    if (password.toLowerCase() === "password" || password.length < 8 || password.toLowerCase() === fullName.toLowerCase()) {
        passwordError.textContent = "Password is not strong enough.";
        isValid = false;
    }

    // Confirm Password validation
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match.";
        isValid = false;
    }

    if (isValid) {
        alert("Registration Successful!");
        document.getElementById("registrationForm").reset();
    }
});
