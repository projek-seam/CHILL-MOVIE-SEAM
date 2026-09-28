/* ELEMENT HTML */

const hero =
    document.querySelector(".hero");


const trailerVideo =
    document.getElementById("trailerVideo");

    const heroCover =
    document.getElementById("heroCover");

const heroVideo =
    document.querySelector(".hero-video");


const movieTitle =
    document.getElementById("movieTitle");


const movieDescription =
    document.getElementById("movieDescription");


const movieAge =
    document.getElementById("movieAge");


const startButton =
    document.getElementById("startButton");


const detailButton =
    document.getElementById("detailButton");


const soundButton =
    document.getElementById("soundButton");


const soundIcon =
    document.getElementById("soundIcon");



/* NAVBAR SCROLL */

const navbar =
    document.querySelector(".navbar");


window.addEventListener(
    "scroll",
    function () {

        if (window.scrollY > 50) {

            navbar.classList.add(
                "scrolled"
            );

        } else {

            navbar.classList.remove(
                "scrolled"
            );

        }

    }
);



/* =========================================
   TOMBOL SELENGKAPNYA
========================================= */

if (detailButton) {

    detailButton.addEventListener(
        "click",
        function () {

            const movie =
                manualMovies[currentMovieIndex];


            if (!movie) {

                console.log(
                    "Film tidak ditemukan."
                );

                return;
            }


            if (
                typeof window.openMovieModal ===
                "function"
            ) {

                window.openMovieModal(
                    movie
                );

            } else {

                console.error(
                    "openMovieModal belum tersedia."
                );

            }

        }
    );

}

/* PILIH FILM RANDOM */

function getRandomMovie(movies) {

    if (!movies || movies.length === 0) {

        return null;

    }


    const randomIndex =
        Math.floor(
            Math.random() * movies.length
        );


    return movies[randomIndex];

}


let currentMovie = null;
let currentTrailer = null;
let currentMovieIndex = 0;


/* LOAD HERO */

function loadManualHero(movie, index) {

    currentMovie = movie;
    currentMovieIndex = index;
    currentTrailer = movie.trailer;

    movieTitle.textContent = movie.title;

    movieDescription.textContent =
        movie.description;

    movieAge.textContent =
        movie.age;


    heroVideo.classList.remove(
        "trailer-active"
    );

    trailerVideo.src = "";


    heroCover.src =
        movie.backdrop;


    setTimeout(function () {

        if (!movie.trailer) {
            return;
        }


        const youtubeURL =
            `https://www.youtube.com/embed/${movie.trailer}` +
            `?autoplay=1` +
            `&mute=1` +
            `&controls=0` +
            `&rel=0` +
            `&playsinline=1` +
            `&enablejsapi=1` +
            `&origin=${encodeURIComponent(
                window.location.origin
            )}`;


        trailerVideo.src =
            youtubeURL;


        heroVideo.classList.add(
            "trailer-active"
        );

    }, 2000);
}

/* TOMBOL MULAI */

startButton.addEventListener("click", function () {

    if (!currentTrailer) {

        alert("Trailer film ini tidak tersedia.");

        return;
    }

    const youtubeURL =
        `https://www.youtube.com/embed/${currentTrailer}` +
        `?autoplay=1` +
        `&mute=1` +
        `&controls=0` +
        `&rel=0` +
        `&playsinline=1` +
        `&enablejsapi=1` +
        `&origin=${encodeURIComponent(window.location.origin)}`;

    console.log("Memutar:", youtubeURL);

    trailerVideo.src = youtubeURL;

});

/* SOUND BUTTON */

let soundOn = false;

soundButton.addEventListener("click", function () {

    if (!trailerVideo.src) {
        return;
    }

    if (soundOn === false) {

        // NYALAKAN SUARA
        trailerVideo.contentWindow.postMessage(
            JSON.stringify({
                event: "command",
                func: "unMute",
                args: []
            }),
            "*"
        );

        soundOn = true;

        soundIcon.className =
            "fa-solid fa-volume-high";

        console.log("Suara: ON");

    } else {

        // MATIKAN SUARA
        trailerVideo.contentWindow.postMessage(
            JSON.stringify({
                event: "command",
                func: "mute",
                args: []
            }),
            "*"
        );

        soundOn = false;

        soundIcon.className =
            "fa-solid fa-volume-xmark";

        console.log("Suara: MUTE");
    }

});



/* =========================================
   PROFILE DROPDOWN
========================================= */

const profileButton =
    document.getElementById("profileButton");

const profileMenu =
    document.getElementById("profileMenu");

const profileArrow =
    document.getElementById("profileArrow");


/* =========================================
   MENU PROFILE
========================================= */

const loginBtn =
    document.getElementById("loginBtn");

const profileBtn =
    document.getElementById("profileBtn");

const premiumBtn =
    document.getElementById("premiumBtn");

const logoutBtn =
    document.getElementById("logoutBtn");


/* =========================================
   CEK STATUS LOGIN
========================================= */

const isLoggedIn =
    localStorage.getItem("isLoggedIn") === "true";


/* =========================================
   ATUR MENU PROFILE
========================================= */

if (isLoggedIn) {

    /* ===============================
       SUDAH LOGIN
    =============================== */

    loginBtn.style.display = "none";

    profileBtn.style.display = "flex";

    premiumBtn.style.display = "flex";

    logoutBtn.style.display = "flex";


} else {

    /* ===============================
       BELUM LOGIN
    =============================== */

    loginBtn.style.display = "flex";

    profileBtn.style.display = "none";

    premiumBtn.style.display = "none";

    logoutBtn.style.display = "none";

}


/* =========================================
   LANJUTKAN MENONTON
========================================= */

const continueSection =
    document.getElementById("continueSection");


if (continueSection) {

    if (isLoggedIn) {

        // SUDAH LOGIN → TAMPILKAN
        continueSection.classList.add("show");

    } else {

        // BELUM LOGIN → SEMBUNYIKAN
        continueSection.classList.remove("show");

    }

}


/* =========================================
   BUKA / TUTUP DROPDOWN
========================================= */

if (profileButton && profileMenu) {

    profileButton.addEventListener(
        "click",
        function () {

            profileMenu.classList.toggle("active");

            if (profileArrow) {

                profileArrow.classList.toggle("rotate");

            }

        }
    );

}


/* =========================================
   LOGOUT
========================================= */

if (logoutBtn) {

    logoutBtn.addEventListener(
        "click",
        function (event) {

            event.preventDefault();


            /* HAPUS STATUS LOGIN */

            localStorage.removeItem(
                "isLoggedIn"
            );

            localStorage.removeItem(
                "username"
            );


            /* KEMBALI KE HOME */

            window.location.href =
                "index.html";

        }
    );

}


/* SLIDER */

const continueContainer =
    document.getElementById(
        "continueContainer"
    );


const prevBtn =
    document.getElementById(
        "prevBtn"
    );


const nextBtn =
    document.getElementById(
        "nextBtn"
    );


nextBtn.addEventListener(
    "click",
    function () {

        continueContainer.scrollBy({

            left: 600,

            behavior: "smooth"

        });

    }
);


prevBtn.addEventListener(
    "click",
    function () {

        continueContainer.scrollBy({

            left: -600,

            behavior: "smooth"

        });

    }
);



/* =========================================
   TOP RATING SLIDER
========================================= */

const topRatingContainer =
    document.getElementById("topRatingContainer");

const ratingPrev =
    document.getElementById("ratingPrev");

const ratingNext =
    document.getElementById("ratingNext");


function getTopRatingScrollAmount() {

    const card =
        topRatingContainer?.querySelector(".rating-card");

    if (!card) return 0;

    const gap =
        parseInt(
            getComputedStyle(topRatingContainer).gap
        ) || 0;

    return (card.offsetWidth + gap) * getVisibleCards();
}


function getVisibleCards() {

    const width = window.innerWidth;

    if (width <= 600) {
        return 2;
    }

    if (width <= 1000) {
        return 4;
    }

    return 5;
}


/* NEXT */

if (ratingNext && topRatingContainer) {

    ratingNext.addEventListener("click", function () {

        const scrollAmount =
            getTopRatingScrollAmount();

        topRatingContainer.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        });

    });

}


/* PREVIOUS */

if (ratingPrev && topRatingContainer) {

    ratingPrev.addEventListener("click", function () {

        const scrollAmount =
            getTopRatingScrollAmount();

        topRatingContainer.scrollBy({
            left: -scrollAmount,
            behavior: "smooth"
        });

    });

}


/* =========================================
   FILM TRENDING SLIDER
========================================= */

const filmTrendingContainer =
    document.getElementById(
        "filmTrendingContainer"
    );

const trendingPrev =
    document.getElementById(
        "trendingPrev"
    );

const trendingNext =
    document.getElementById(
        "trendingNext"
    );


function getTrendingScrollAmount() {

    const card =
        filmTrendingContainer?.querySelector(
            ".trending-card"
        );

    if (!card) return 0;

    const gap =
        parseInt(
            getComputedStyle(
                filmTrendingContainer
            ).gap
        ) || 0;

    return (
        card.offsetWidth + gap
    ) * getVisibleCards();

}


/* NEXT */

if (
    trendingNext &&
    filmTrendingContainer
) {

    trendingNext.addEventListener(
        "click",
        function () {

            const scrollAmount =
                getTrendingScrollAmount();

            filmTrendingContainer.scrollBy({

                left: scrollAmount,

                behavior: "smooth"

            });

        }
    );

}


/* PREVIOUS */

if (
    trendingPrev &&
    filmTrendingContainer
) {

    trendingPrev.addEventListener(
        "click",
        function () {

            const scrollAmount =
                getTrendingScrollAmount();

            filmTrendingContainer.scrollBy({

                left: -scrollAmount,

                behavior: "smooth"

            });

        }
    );

}


/* =========================================
   FILM BARU SLIDER
========================================= */

const filmBaruContainer =
    document.getElementById(
        "filmBaruContainer"
    );

const baruPrev =
    document.getElementById(
        "baruPrev"
    );

const baruNext =
    document.getElementById(
        "baruNext"
    );


function getBaruScrollAmount() {

    const card =
        filmBaruContainer?.querySelector(
            ".baru-card"
        );

    if (!card) return 0;

    const gap =
        parseInt(
            getComputedStyle(
                filmBaruContainer
            ).gap
        ) || 0;

    return (
        card.offsetWidth + gap
    ) * getVisibleCards();

}


/* NEXT */

if (
    baruNext &&
    filmBaruContainer
) {

    baruNext.addEventListener(
        "click",
        function () {

            const scrollAmount =
                getBaruScrollAmount();

            filmBaruContainer.scrollBy({

                left: scrollAmount,

                behavior: "smooth"

            });

        }
    );

}


/* PREVIOUS */

if (
    baruPrev &&
    filmBaruContainer
) {

    baruPrev.addEventListener(
        "click",
        function () {

            const scrollAmount =
                getBaruScrollAmount();

            filmBaruContainer.scrollBy({

                left: -scrollAmount,

                behavior: "smooth"

            });

        }
    );

}





/* JALANKAN WEBSITE */

const randomIndex =
    Math.floor(
        Math.random() * manualMovies.length
    );

loadManualHero(
    manualMovies[randomIndex],
    randomIndex
);


