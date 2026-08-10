document.getElementById("coupleNames").innerHTML =
    wedding.groom + " & " + wedding.bride;


document.getElementById("groomName").innerHTML =
    wedding.groom;


document.getElementById("brideName").innerHTML =
    wedding.bride;

document.getElementById("weddingDate").innerHTML =
    wedding.date;

document.getElementById("akadDate").innerHTML =
    wedding.date;

document.getElementById("akadTime").innerHTML =
    wedding.akadTime;

document.getElementById("venue").innerHTML =
    wedding.venue;

document.getElementById("city").innerHTML =
    wedding.city;

const params =
    new URLSearchParams(window.location.search);

const guest =
    params.get("to");

if (guest) {

    document.getElementById("guestName").innerHTML =
        guest;

if (guest) {

    document.getElementById("name").value =
        guest;

}

} else {

    document.getElementById("guestName").innerHTML =
        "Tamu Undangan";

}

const weddingDate = new Date("December 20, 2026 08:00:00").getTime();


    function updateCountdown() {

        const now = new Date().getTime();

        const distance = weddingDate - now;


        const days = Math.floor(
            distance / (1000 * 60 * 60 * 24)
        );


        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24))
            / (1000 * 60 * 60)
        );


        const minutes = Math.floor(
            (distance % (1000 * 60 * 60))
            / (1000 * 60)
        );


        const seconds = Math.floor(
            (distance % (1000 * 60))
            / 1000
        );


        document.getElementById("days").innerHTML = days;

        document.getElementById("hours").innerHTML = hours;

        document.getElementById("minutes").innerHTML = minutes;

        document.getElementById("seconds").innerHTML = seconds;

    }


    updateCountdown();


    setInterval(updateCountdown, 1000);

const openButton = document.getElementById("openInvitation");

const mainContent = document.getElementById("mainContent");

const couple = document.querySelector(".couple");

const eventSection = document.querySelector(".event");

const countdown = document.querySelector(".countdown");

const gallery = document.querySelector(".gallery");

const closing = document.querySelector(".closing");
const music = document.getElementById("weddingMusic");

const musicButton = document.getElementById("musicButton");


openButton.addEventListener("click", function() {

    mainContent.style.display = "flex";
    couple.style.display = "flex";
    eventSection.style.display = "flex";
    countdown.style.display = "flex";
    gallery.style.display = "flex";
    closing.style.display = "flex";
    music.play();

    mainContent.style.animation = "fadeIn 1s ease";
    couple.style.animation = "fadeIn 1s ease";
    eventSection.style.animation = "fadeIn 1s ease";
    countdown.style.animation = "fadeIn 1s ease";
    gallery.style.animation = "fadeIn 1s ease";
    closing.style.animation = "fadeIn 1s ease";

    musicButton.addEventListener("click", function() {

    if (music.paused) {

        music.play();

        musicButton.innerHTML = "🎵";

    } else {

        music.pause();

        musicButton.innerHTML = "🔇";

    }

});

});
const rsvpForm = document.getElementById("rsvpForm");


rsvpForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;


    const attendance =
        document.querySelector(
            'input[name="attendance"]:checked'
        ).value;


    const guests =
        document.getElementById("guests").value;

    const successPopup =
    document.getElementById("successPopup");

const successMessage =
    document.getElementById("successMessage");

const closePopup =
    document.getElementById("closePopup");


    successMessage.innerHTML =
    "Halo " + name + " 😊<br><br>" +
    "Terima kasih telah melakukan konfirmasi.";

successPopup.style.display = "flex";
closePopup.addEventListener("click", function() {

    successPopup.style.display = "none";

});

});
