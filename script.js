/* ================================
   PORTFOLIO LOADED
================================ */

console.log(
    "Devansh Pandey Portfolio Loaded!"
);


/* ================================
   NAVIGATION ACTIVE EFFECT
================================ */

const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


navLinks.forEach(link => {

    link.addEventListener(
        "click",
        function () {

            navLinks.forEach(item => {

                item.style.color =
                    "white";

            });


            this.style.color =
                "#00ffcc";

        }
    );

});


/* ================================
   SECTION SCROLL EFFECT
================================ */

const sections =
    document.querySelectorAll(
        ".section"
    );


sections.forEach(section => {

    section.style.opacity = "0";

    section.style.transform =
        "translateY(30px)";

    section.style.transition =
        "0.8s ease";

});


function revealSections() {

    sections.forEach(section => {

        const position =
            section.getBoundingClientRect().top;

        const screenPosition =
            window.innerHeight - 100;


        if (position < screenPosition) {

            section.style.opacity = "1";

            section.style.transform =
                "translateY(0)";

        }

    });

}


window.addEventListener(
    "scroll",
    revealSections
);


/* Run once when page loads */

revealSections();