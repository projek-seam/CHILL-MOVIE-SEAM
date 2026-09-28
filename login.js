/* =========================================
   LOGIN FORM
========================================= */

const loginForm = 
    document.getElementById("loginForm");

loginForm.addEventListener(
    "submit", 
    function (event) {

    event.preventDefault();

    const username =
        document.getElementById("username").value.trim();

    const password =
        document.getElementById("password").value.trim();


    // ================================
    // VALIDASI USERNAME
    // ================================

    if (username === "") {

        alert("Username harus diisi.");

        document.getElementById("username").focus();

        return;
    }


    // ================================
    // VALIDASI PASSWORD
    // ================================

    if (password === "") {

        alert("Password harus diisi.");

        document.getElementById("password").focus();

        return;
    }
    

    // ================================
        // LOGIN BERHASIL
        // ================================

        localStorage.setItem(
            "isLoggedIn",
            "true"
        );

        localStorage.setItem(
            "username",
            username
        );

    // ================================
    // KEMBALI KE HOME
    // ================================

    window.location.href = "index.html";

});


/* =========================================
   SHOW / HIDE PASSWORD
========================================= */

const passwordInput =
    document.getElementById("password");

const passwordToggle =
    document.getElementById("passwordToggle");


if (passwordToggle) {

    passwordToggle.addEventListener(
        "click",
        function () {

            if (passwordInput.type === "password") {

                passwordInput.type = "text";

                passwordToggle.textContent = "🙈";

                passwordToggle.setAttribute(
                    "aria-label",
                    "Sembunyikan password"
                );

            } else {

                passwordInput.type = "password";

                passwordToggle.textContent = "👁";

                passwordToggle.setAttribute(
                    "aria-label",
                    "Tampilkan password"
                );

            }

        }
    );

}


/* =========================================
   LUPA PASSWORD
========================================= */

const forgotPassword =
    document.getElementById("forgot");


if (forgotPassword) {

    forgotPassword.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            const usernameOrEmail =
                prompt(
                    "Masukkan username atau email kamu:"
                );


            if (usernameOrEmail) {

                alert(
                    "Demo reset password.\n\n" +
                    "Permintaan reset untuk: " +
                    usernameOrEmail
                );

            }

        }
    );

}


/* =========================================
   GOOGLE LOGIN
========================================= */

const googleLogin =
    document.getElementById("googleLogin");


if (googleLogin) {

    googleLogin.addEventListener(
        "click",
        function () {

            alert(
                "Login dengan Google belum terhubung.\n\n" +
                "Untuk login Google asli diperlukan " +
                "Google Identity Services / OAuth."
            );

        }
    );

}


/* =========================================
   INPUT EFFECT
========================================= */

const inputs =
    document.querySelectorAll(".field input");


inputs.forEach(function (input) {

    input.addEventListener(
        "focus",
        function () {

            const field =
                this.closest(".field");

            if (field) {

                field.classList.remove(
                    "error"
                );

            }

        }
    );

});