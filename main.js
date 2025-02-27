let desNavSpans = document.querySelectorAll(".desktop-nav ul span");
let toggleBtn = document.querySelector(".toggle");
let mobNavSpans = document.querySelectorAll(".mobile-nav ul span");

desNavSpans.forEach((span) => {
  span.onclick = function () {
    span.parentElement.classList.toggle("open");
  }
})

toggleBtn.onclick = function (e) {
  toggleBtn.classList.toggle("open");
};

mobNavSpans.forEach((span) => {
  span.onclick = function () {
    span.parentElement.classList.toggle("open");
  }
})
