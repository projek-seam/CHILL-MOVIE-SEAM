/* =========================================
   CHILL - MOVIE DETAIL MODAL
========================================= */


/* =========================================
   FILM SERUPA
========================================= */

function loadSimilarMovies(movie) {

    const container =
        document.getElementById(
            "similarMovies"
        );


    /* ===============================
       CEK CONTAINER
    =============================== */

    if (!container) {

        console.error(
            "Element #similarMovies tidak ditemukan."
        );

        return;
    }


    /* ===============================
       KOSONGKAN
    =============================== */

    container.innerHTML = "";


    /* ===============================
       CEK DATA
    =============================== */

    if (
        !movie.similarMovies ||
        movie.similarMovies.length === 0
    ) {

        console.log(
            "Film serupa tidak tersedia."
        );

        return;
    }


    /* ===============================
       BUAT COVER
    =============================== */

    movie.similarMovies.forEach(
        function (similarMovie) {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "similar-card";


            card.innerHTML = `

                <img
                    src="${similarMovie.poster}"
                    alt="${similarMovie.title}"
                >

            `;


            container.appendChild(
                card
            );

        }
    );

}


/* =========================================
   FUNGSI BUKA MODAL
========================================= */

window.openMovieModal =
    function (movie) {


        /* ===============================
           CEK FILM
        =============================== */

        if (!movie) {

            console.error(
                "Data film tidak ditemukan."
            );

            return;
        }


        /* ===============================
           AMBIL ELEMENT
        =============================== */

        const movieModal =
            document.getElementById(
                "movieModal"
            );


        const modalHero =
            document.getElementById(
                "modalHero"
            );


        const modalTitle =
            document.getElementById(
                "modalTitle"
            );


        const modalDescription =
            document.getElementById(
                "modalDescription"
            );


        const modalAge =
            document.getElementById(
                "modalAge"
            );


        const modalYear =
            document.getElementById(
                "modalYear"
            );


        const modalDuration =
            document.getElementById(
                "modalDuration"
            );


        const modalCast =
            document.getElementById(
                "modalCast"
            );


        const modalGenres =
            document.getElementById(
                "modalGenres"
            );


        const modalDirector =
            document.getElementById(
                "modalDirector"
            );


        /* ===============================
           CEK MODAL
        =============================== */

        if (!movieModal) {

            console.error(
                "Element #movieModal tidak ditemukan."
            );

            return;
        }


        /* ===============================
           BACKDROP
        =============================== */

        if (
            modalHero &&
            movie.backdrop
        ) {

            modalHero.style.backgroundImage =
                `url("${movie.backdrop}")`;

        }


        /* ===============================
           TITLE
        =============================== */

        if (modalTitle) {

            modalTitle.textContent =
                movie.title ||
                "Judul Film";

        }


        /* ===============================
           DESCRIPTION
        =============================== */

        if (modalDescription) {

            modalDescription.textContent =
                movie.description ||
                "Deskripsi film belum tersedia.";

        }


        /* ===============================
           AGE
        =============================== */

        if (modalAge) {

            modalAge.textContent =
                movie.age ||
                "-";

        }


        /* ===============================
           YEAR
        =============================== */

        if (modalYear) {

            modalYear.textContent =
                movie.year ||
                "-";

        }


        /* ===============================
           DURATION
        =============================== */

        if (modalDuration) {

            modalDuration.textContent =
                movie.duration ||
                "-";

        }


        /* ===============================
           CAST
        =============================== */

        if (modalCast) {

            modalCast.textContent =
                movie.cast ||
                "-";

        }


        /* ===============================
           GENRE
        =============================== */

        if (modalGenres) {

            modalGenres.textContent =
                movie.genres ||
                "-";

        }


        /* ===============================
           DIRECTOR
        =============================== */

        if (modalDirector) {

            modalDirector.textContent =
                movie.director ||
                "-";

        }


        /* ===============================
           FILM SERUPA
        =============================== */

        loadSimilarMovies(
            movie
        );


        /* ===============================
           TAMPILKAN MODAL
        =============================== */

        movieModal.classList.add(
            "active"
        );


        /* ===============================
           LOCK SCROLL
        =============================== */

        document.body.style.overflow =
            "hidden";


        console.log(
            "Modal film dibuka:",
            movie.title
        );

    };


/* =========================================
   SETUP MODAL
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* ===============================
           ELEMENT
        =============================== */

        const movieModal =
            document.getElementById(
                "movieModal"
            );


        const movieModalClose =
            document.getElementById(
                "movieModalClose"
            );


        /* ===============================
           CEK
        =============================== */

        if (!movieModal) {

            console.error(
                "Element #movieModal tidak ditemukan."
            );

            return;
        }


        /* ===============================
           CLOSE BUTTON
        =============================== */

        if (movieModalClose) {

            movieModalClose.addEventListener(
                "click",
                function () {

                    closeMovieModal();

                }
            );

        }


        /* ===============================
           KLIK LUAR MODAL
        =============================== */

        movieModal.addEventListener(
            "click",
            function (event) {

                if (
                    event.target ===
                    movieModal
                ) {

                    closeMovieModal();

                }

            }
        );


        /* ===============================
           ESC
        =============================== */

        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key ===
                    "Escape"
                ) {

                    closeMovieModal();

                }

            }
        );

    }
);


/* =========================================
   TUTUP MODAL
========================================= */

function closeMovieModal() {

    const movieModal =
        document.getElementById(
            "movieModal"
        );


    if (!movieModal) {
        return;
    }


    movieModal.classList.remove(
        "active"
    );


    document.body.style.overflow =
        "";

}