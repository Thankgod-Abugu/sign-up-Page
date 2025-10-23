const passwordInput = document.getElementById("password-input");
const toggleCheckbox = document.getElementById("showPasswordToggle");

toggleCheckbox.addEventListener("change", function() {
    if (this.checked) {
        passwordInput.setAttribute("type", "text");
    } else {
        passwordInput.setAttribute("type", "password");
    }
});