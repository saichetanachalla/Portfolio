var typed = new Typed(".multiple-text", {
    strings: [
      "FrontEnd Development ",
      "Backend Development",
      "Machine Learning",
      "Data Science",
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      document.querySelectorAll(".Projects-section").forEach(function (section) {
        if (isElementInViewport(section)) {
          section.classList.remove("animated");
        } else {
          section.classList.add("animated");
        }
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      document.querySelectorAll(".AboutMe").forEach(function (section) {
        if (isElementInViewport(section)) {
          section.classList.remove("animated");
        } else {
          section.classList.add("animated");
        }
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      document.querySelectorAll(".Skills-section").forEach(function (section) {
        if (isElementInViewport(section)) {
          section.classList.remove("animated");
        } else {
          section.classList.add("animated");
        }
      });
    });
  });
  
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
  
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function heart() {
    open("https://github.com/saichetanachalla/Heartdisease_prediction");
  }
  function food() {
    open("https://github.com/saichetanachalla/food-detection");
  }
  function student() {
    open("https://github.com/saichetanachalla/studentmanagementsystem");
  }
  function covid() {
    open("https://github.com/saichetanachalla/Covid-19-analysis-by-Topic-Modelling");
  }
  
  function resume() {
    open(
      "https://drive.google.com/file/d/1-lvlF5VZ1SllUwpQV3gttLxj5c7spCA5/view?usp=sharing"
    );
  }