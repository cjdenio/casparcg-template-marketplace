var header = document.getElementById("header");
var logo = document.getElementById("logo");
var darkLogo = document.getElementById("dark-logo");

document.body.onscroll = function() {
    if (document.body.scrollTop >= 150) {
        header.style.backgroundColor = "white";
        header.style.boxShadow = "0px 0px 7px black";

        logo.src = '/casparcg-template-marketplace/img/logo.png';

    } else {
        header.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        header.style.boxShadow = "none";

        logo.src = '/casparcg-template-marketplace/img/logo-light.png';
    }
    console.log(document.body.scrollTop);
}