//darkmode mode funksjon
const toggle = document.getElementById("toggleDark");
//like button
const heart = document.getElementById("clickHeart");
//github dropdown
const toggleGithub = document.getElementById("hoverGithub");
const MouseGithubBox = document.getElementById("MouseGithubBox")
//body
const body = document.querySelector("body");

//darkmode mode funksjon
toggleDark.addEventListener("click", function () {
  this.classList.toggle("bi-brightness-high");
  const isBrightnessHigh = this.classList.toggle("bi-moon");
  if (isBrightnessHigh) {
    body.style.background = "#6B7A8F";
    body.style.transition = "2s";
    setTimeout(() => {
      toggleDark.style.color = "#272727";
      toggleDark.style.transition = "2s";
    }, 600);
    setTimeout(() => {
      clickHeart.style.color = "#272727";
      clickHeart.style.transition = "2s";
    }, 400);
    setTimeout(() => {
      hoverGithub.style.color = "#272727";
      hoverGithub.style.transition = "2s";
    }, 200);
  } else {
    body.style.background = "#1c1c1c";
    body.style.transition = "2s";
    setTimeout(() => {
      toggleDark.style.color = "#ff652f";
      toggleDark.style.transition = "2s";
    }, 200);
    setTimeout(() => {
      clickHeart.style.color = "#14a76c";
      clickHeart.style.transition = "2s";
    }, 400);
    setTimeout(() => {
      hoverGithub.style.color = "#ffe400";
      hoverGithub.style.transition = "2s";
    }, 600);
  }
});

//like button
let isHeartFilled = false;

heart.addEventListener("click", function () {
  if (isHeartFilled) {
    this.classList.remove("bi-heart-fill");
    this.classList.add("bi-heart");
    isHeartFilled = false;
  } else {
    this.classList.remove("bi-heart");
    this.classList.add("bi-heart-fill");
    isHeartFilled = true;
  }
});

//github dropdown
const dropdown = document.getElementById("dropdown");
const hoverGithub = document.getElementById("hoverGithub");

hoverGithub.addEventListener("mouseenter", function () {
    dropdown.style.display = "block";
});

dropdown.addEventListener("mouseleave", function (e) {
    if (!e.relatedTarget.classList.contains("githubKnapp") ||
        !e.relatedTarget.classList.contains("hoverGithub")) {
        dropdown.style.display = "none";
    }
});