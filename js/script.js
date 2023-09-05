document.addEventListener("DOMContentLoaded", function() {
    const cookiePopup = document.getElementById("cookie-popup");
    const acceptButton = document.getElementById("accept-cookies");

    if (!localStorage.getItem("cookiesAccepted")) {
        cookiePopup.style.display = "flex";
        document.body.classList.add("popup-open");
    }

    acceptButton.addEventListener("click", function() {
        cookiePopup.style.display = "none";
        document.body.classList.remove("popup-open");

        localStorage.setItem("cookiesAccepted", "true");
    });
});