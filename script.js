const passwordInput = document.getElementById('password');
const verifyPasswordInput = document.getElementById('verifyPassword');
const passwordDiv = document.querySelector(".password");

passwordInput.addEventListener('change', verifyPasswords);
verifyPasswordInput.addEventListener('change', verifyPasswords);

function verifyPasswords() {
    if (passwordInput.value === verifyPasswordInput.value &&
        passwordInput.value !== "" &&
        verifyPasswordInput.value !== "") {
        passwordInput.setAttribute("data-error", false);
        verifyPasswordInput.setAttribute("data-error", false);
        passwordDiv.setAttribute("data-error", false);
    } else {
        passwordInput.setAttribute("data-error", true);
        verifyPasswordInput.setAttribute("data-error", true);
        passwordDiv.setAttribute("data-error", true);

    }
}

