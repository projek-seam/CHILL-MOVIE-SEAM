/* =========================================
   ELEMENT
========================================= */

const registerForm =
    document.getElementById("registerForm");

const usernameInput =
    document.getElementById("username");

const passwordInput =
    document.getElementById("password");

const confirmInput =
    document.getElementById("confirm");

const passwordError =
    document.getElementById("passwordError");


/* =========================================
   SHOW / HIDE PASSWORD
========================================= */

function setupPasswordToggle(
    input,
    button
) {

    if (!input || !button) {
        return;
    }


    button.addEventListener(
        "click",
        function () {

            if (input.type === "password") {

                input.type = "text";

                button.textContent = "🙈";

            } else {

                input.type = "password";

                button.textContent = "👁";

            }

        }
    );
}


setupPasswordToggle(
    passwordInput,
    document.getElementById("passwordToggle")
);


setupPasswordToggle(
    confirmInput,
    document.getElementById("confirmToggle")
);


/* =========================================
   CHECK PASSWORD
========================================= */

function checkPassword() {

    const password =
        passwordInput.value;

    const confirm =
        confirmInput.value;

    const field =
        confirmInput.closest(".field");


    if (
        confirm !== "" &&
        password !== confirm
    ) {

        passwordError.style.display = "block";

        field.classList.add(
            "password-error"
        );

        field.classList.remove(
            "success"
        );

        return false;

    }


    if (
        confirm !== "" &&
        password === confirm
    ) {

        passwordError.style.display = "none";

        field.classList.remove(
            "password-error"
        );

        field.classList.add(
            "success"
        );

        return true;

    }


    passwordError.style.display = "none";

    field.classList.remove(
        "password-error",
        "success"
    );

    return true;
}


/* =========================================
   CHECK WHILE TYPING
========================================= */

passwordInput.addEventListener(
    "input",
    checkPassword
);


confirmInput.addEventListener(
    "input",
    checkPassword
);


/* =========================================
   REGISTER
========================================= */

registerForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const username =
            usernameInput.value.trim();

        const password =
            passwordInput.value;

        const confirm =
            confirmInput.value;


        /* ===============================
           USERNAME
        =============================== */

        if (username === "") {

            alert(
                "Username harus diisi."
            );

            usernameInput.focus();

            return;
        }


        /* ===============================
           USERNAME MINIMUM
        =============================== */

        if (username.length < 4) {

            alert(
                "Username minimal 4 karakter."
            );

            usernameInput.focus();

            return;
        }


        /* ===============================
           PASSWORD
        =============================== */

        if (password === "") {

            alert(
                "Kata sandi harus diisi."
            );

            passwordInput.focus();

            return;
        }


        /* ===============================
           PASSWORD MINIMUM
        =============================== */

        if (password.length < 6) {

            alert(
                "Kata sandi minimal 6 karakter."
            );

            passwordInput.focus();

            return;
        }


        /* ===============================
           CONFIRM PASSWORD
        =============================== */

        if (password !== confirm) {

            passwordError.style.display =
                "block";

            confirmInput
                .closest(".field")
                .classList.add(
                    "password-error"
                );

            confirmInput.focus();

            return;
        }


        /* ===============================
           DEMO REGISTER
        =============================== */

        alert(
            "Registrasi berhasil!\n\n" +
            "Username: " +
            username
        );


        /*
            Untuk sekarang kita arahkan
            ke halaman login.
        */

        window.location.href =
            "login.html";
    }
);


/* =========================================
   GOOGLE REGISTER
========================================= */

const googleRegister =
    document.getElementById(
        "googleRegister"
    );


if (googleRegister) {

    googleRegister.addEventListener(
        "click",
        function () {

            alert(
                "Daftar dengan Google belum terhubung.\n\n" +
                "Untuk Google Login asli diperlukan " +
                "Google Identity Services / OAuth."
            );

        }
    );

}


/* =========================================
   REMOVE ERROR WHEN USER EDITS
========================================= */

usernameInput.addEventListener(
    "input",
    function () {

        this.closest(".field")
            .classList.remove(
                "password-error"
            );

    }
);