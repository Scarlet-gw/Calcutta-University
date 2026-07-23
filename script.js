/* ===========================================
   University of Calcutta Admission Portal
   script.js
=========================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ===========================
       Highlight Current Navigation
    =========================== */

    const currentPage = window.location.pathname.split("/").pop();

    const navLinks = document.querySelectorAll(".navbar a");

    navLinks.forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage) {

            link.style.backgroundColor = "#0B75BE";
            link.style.color = "#FFD447";

        }

    });

    /* ===========================
       Login Validation
    =========================== */

    const loginForm = document.querySelector(".login-body form");

    if (loginForm) {

        loginForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const userID = document.getElementById("userid");
            const password = document.getElementById("password");

            if (userID.value.trim() === "") {

                alert("Please enter your User ID.");

                userID.focus();

                return;

            }

            if (password.value.trim() === "") {

                alert("Please enter your Password.");

                password.focus();

                return;

            }

            alert("Login Successful (Demo Website)");

        });

    }

    /* ===========================
       Smooth Button Animation
    =========================== */

    const buttons = document.querySelectorAll(".apply-button, .login-btn, .create-account, .download-btn");

    buttons.forEach(button => {

        button.addEventListener("mouseenter", function () {

            button.style.transform = "scale(1.03)";

        });

        button.addEventListener("mouseleave", function () {

            button.style.transform = "scale(1)";

        });

    });

    /* ===========================
       External PDF Indicator
    =========================== */

    const pdfLinks = document.querySelectorAll('a[target="_blank"]');

    pdfLinks.forEach(link => {

        link.title = "Opens PDF in a new tab";

    });

    /* ===========================
       Table Hover Effect
    =========================== */

    const rows = document.querySelectorAll(".category-table tbody tr");

    rows.forEach(row => {

        row.addEventListener("mouseenter", function () {

            row.style.transition = "0.3s";

            row.style.background = "#eef7ff";

        });

        row.addEventListener("mouseleave", function () {

            row.style.background = "";

        });

    });

});