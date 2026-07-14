const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const checkBtn = document.getElementById("checkBtn");
const message = document.getElementById("message");
const loginScreen = document.getElementById("login-screen");
const homeScreen = document.getElementById("home-screen");
const loadingText = document.getElementById("loading-text");
const loadingScreen = document.getElementById("loading-screen");
const imgOne = document.getElementById("img-one");
const imgTwo = document.getElementById("img-two");
const sectionFive = document.getElementById("sectionfive");
checkBtn.addEventListener("click", function () {
    if (
    day.value === "15" &&
    month.value === "07" &&
    year.value === "1996"
) {
    loginScreen.classList.add("hidden");
    imgOne.classList.add("hidden");
    imgTwo.classList.add("hidden");
    loadingScreen.classList.remove("hidden");
    loadingText.textContent = "Preparing your surprise... 🎁";
    setTimeout(function () {
        loadingText.textContent = "Finding memories... 📸";
    }, 500);
    setTimeout(function () {
        loadingText.textContent = "Collecting hugs... 🤗";
    }, 1000);
    setTimeout(function () {
        loadingText.textContent = "Almost ready... 🎂";
    }, 1500);
    setTimeout(function () {
        loadingScreen.classList.add("hidden");
        homeScreen.classList.remove("hidden");
    }, 2500);

} else {
    message.textContent = "❌ Wrong date! This is not the best date.";
    message.classList.remove("text-green-600");
    message.classList.add("text-red-500");
    loginScreen.classList.add("shake");
    setTimeout(function () {
        loginScreen.classList.remove("shake");
    }, 500);
}
});
// move
day.addEventListener("input", function () {
if (day.value.length == 2) {
    month.focus();
}
});
month.addEventListener("input", function () {
if (month.value.length == 2) {
    year.focus();
}
});
// Regex
day.addEventListener("input", function () {
day.value = day.value.replace(/[^0-9]/g, "");
});
month.addEventListener("input", function () {
month.value = month.value.replace(/[^0-9]/g, "");
});
year.addEventListener("input", function () {
year.value = year.value.replace(/[^0-9]/g, "");
});
homeScreen.addEventListener("click", function () {
    homeScreen.classList.add("hidden");
    scfour.classList.remove("hidden");
});
const scfour = document.getElementById("scfour");
const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");
const text4 = document.getElementById("text4");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
let step = 0;
document.addEventListener("click", function () {
    if (!scfour.classList.contains("hidden")) {
        if (step == 0) {
            text1.classList.remove("hidden");
            text1.classList.add("show");
            img1.classList.remove("hidden");
            img1.classList.add("show");
        }
        else if (step == 1) {
            text2.classList.remove("hidden");
            text2.classList.add("show");
            img2.classList.remove("hidden");
            img2.classList.add("show");
        }
        else if (step == 2) {
            text3.classList.remove("hidden");
            text3.classList.add("show");
            img3.classList.remove("hidden");
            img3.classList.add("show");
        }
        else if (step == 3) {
            text4.classList.remove("hidden");
            text4.classList.add("show");
            img4.classList.remove("hidden");
            img4.classList.add("show");
        }
        else if (step == 4) {
            scfour.classList.add("hidden");
            sectionFive.classList.remove("hidden");
        }
        step++;
    }
});
const sectionFivee = document.getElementById("section-five");
const photo1 = document.getElementById("photo1");
const photo2 = document.getElementById("photo2");
const photo3 = document.getElementById("photo3");
const photo4 = document.getElementById("photo4");
const photo5 = document.getElementById("photo5");
const photo6 = document.getElementById("photo6");
const photo7 = document.getElementById("photo7");
const photo8 = document.getElementById("photo8");
const photo9 = document.getElementById("photo9");
const photo10 = document.getElementById("photo10");
const photo13 = document.getElementById("photo13");
const photo12 = document.getElementById("photo12");
const photo11 = document.getElementById("photo11");
const photo14 = document.getElementById("photo14");
let photoStep = 0;
sectionFive.addEventListener("click", function () {
    sectionFive.classList.add("hidden");
    sectionFivee.classList.remove("hidden");
});
const photos = [
    photo1, photo2, photo3, photo4, photo5,
    photo6, photo7, photo8, photo9, photo10,
    photo11, photo12, photo13, photo14
];
document.addEventListener("click", function () {
    if (!sectionFivee.classList.contains("hidden")) {
        if (photoStep < photos.length) {
            photos[photoStep].classList.remove("hidden");
            photos[photoStep].classList.add("show");
            photoStep++;
        }
        else {
            sectionFivee.classList.add("hidden");
            lastSection.classList.remove("hidden");
        }
    }
});
const lastSection = document.getElementById("last-section");
const msg1 = document.getElementById("msg1");
const msg2 = document.getElementById("msg2");
const msg3 = document.getElementById("msg3");
const msg4 = document.getElementById("msg4");
const msg5 = document.getElementById("msg5");
let lastStep = -1;
document.addEventListener("click", function () {

    if (!lastSection.classList.contains("hidden")) {
        lastStep++;

    if (lastStep == 0) {
        return;
    }
        if (lastStep == 1) {
            msg1.classList.add("hidden");

            msg2.classList.remove("hidden");
            msg2.classList.add("show");
        }
        else if (lastStep == 2) {
            msg2.classList.add("hidden");
            msg3.classList.remove("hidden");
            msg3.classList.add("show");
        }
        else if (lastStep == 3) {
            msg3.classList.add("hidden");
            msg4.classList.remove("hidden");
            msg4.classList.add("show");
        }
        else if (lastStep == 4) {
            msg4.classList.add("hidden");
            msg5.classList.remove("hidden");
            msg5.classList.add("show");
        }

    }

});
// document.addEventListener("click", function () {
//     if (!lastSection.classList.contains("hidden")) {
//         if (lastStep == 0) {
//             msg1.classList.add("fadeOut");
//             lastImg1.classList.add("fadeOut");
//             setTimeout(() => {
//                 msg1.classList.add("hidden");
//                 lastImg1.classList.add("hidden");
//                 msg2.classList.remove("hidden");
//                 lastImg2.classList.remove("hidden");
//                 msg2.classList.add("fadeIn");
//                 lastImg2.classList.add("fadeIn");

//             },500);
//         }
//         else if(lastStep==1){

//             msg2.classList.add("fadeOut");
//             lastImg2.classList.add("fadeOut");

//             setTimeout(()=>{

//                 msg2.classList.add("hidden");
//                 lastImg2.classList.add("hidden");

//                 msg3.classList.remove("hidden");
//                 msg3.classList.add("fadeIn");

//             },500);

//         }

//         lastStep++;

//     }

// });