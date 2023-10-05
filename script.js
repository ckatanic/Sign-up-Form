const passwordInput = document.getElementById('password');
const verifyPasswordInput = document.getElementById('verifyPassword');
const passwordDiv = document.querySelector(".password");
const button = document.querySelector(".button");

passwordInput.addEventListener('input', verifyPasswords);
verifyPasswordInput.addEventListener('input', verifyPasswords);

function verifyPasswords() {
    if (passwordInput.value === verifyPasswordInput.value &&
        passwordInput.value !== "" &&
        verifyPasswordInput.value !== "") {
        button.disabled=false;
        passwordInput.setAttribute("data-error", false);
        verifyPasswordInput.setAttribute("data-error", false);
        passwordDiv.setAttribute("data-error", false);
    } else {
        button.disabled=true;
        passwordInput.setAttribute("data-error", true);
        verifyPasswordInput.setAttribute("data-error", true);
        passwordDiv.setAttribute("data-error", true);

    }
}

