// var btnContainer = document.getElementById("App-header-link-container");

// // Get all buttons with class="btn" inside the container
// var btns = btnContainer.getElementsByClassName("App-header-link-container");

// // Loop through the buttons and add the active class to the current/clicked button
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function () {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }

// const nav = document.querySelectorAll(".App-header-link-container");

// nav.forEach((nav) => {
//   nav.addEventListener("click", () => {
//     document.querySelector(".active")?.classList.remove("active");
//     nav.classList.add("active");
//   });
// });

// const tooltipHandle = document.querySelector(".Tooltip-handle");
// const tooltipPopup = document.querySelector(".Tooltip-popup");

// tooltipHandle.addEventListener("mouseenter", () => {
//   tooltipHandle.classList.add("active");
//   tooltipPopup.style.display = "block";
// });

// tooltipHandle.addEventListener("mouseleave", () => {
//   tooltipHandle.classList.remove("active");
//   tooltipPopup.style.display = "none";
// });

// tooltipPopup.addEventListener("mouseenter", () => {
//   tooltipHandle.classList.add("active");
//   tooltipPopup.style.display = "block";
// });

// tooltipPopup.addEventListener("mouseleave", () => {
//   tooltipHandle.classList.remove("active");
//   tooltipPopup.style.display = "none";
// });

// Wait for the DOM to be loaded
document.addEventListener("DOMContentLoaded", function () {
  const countries = [
    // ["", "1-1"],
    ["1", "1-1"],
    ["2", "2-2"],
    ["3", "3-3"],
    ["4", "4-4"],
    ["5", "5-5"],
    ["6", "6-6"],
    ["7", "7-7"],
    ["8", "8-8"],
    ["9", "9-9"],
    ["10", "10-10"],
    ["11", "11-11"],
    ["12", "12-12"],
    ["13", "13-13"],
    ["14", "14-14"],
    ["15", "15-15"],
    ["16", "16-16"],
    // ["3", "3-3"],
    // [".map svg path#CHI", "chic"],
    // [".map svg path#KR", "korc"],
    // [".map svg path#AE", "uaec"],
    // [".map svg path#IN", "indc"],
    // ["#MAU", "mauc"],
    // ["#rajkot", "rajkotc"],
    // ["#kolhapur", "kolhapurc"],
    // ["#chakan", "chakanc"],
    // ["#kalamboli", "kalambolic"],
    // ["#chennai", "chennaic"],
  ];
  // Get the SVG map and card elements
  for (let i = 0; i < 16; i++) {
    const map = document.getElementById(countries[i][0]);
    const card = document.getElementById(countries[i][1]);

    // Add event listeners for mouseenter and mouseleave events on the SVG map
    map.addEventListener("mouseenter", showCard);
    map.addEventListener("mouseleave", hideCard);
    map.addEventListener("mousemove", showCard);
    // Function to show the card
    function showCard() {
      card.style.display = "inline-flex";
      // card.style.left = event.pageX - 80 + "px";
      // card.style.top = event.pageY - 130 + "px";
    }

    // Function to hide the card
    function hideCard() {
      card.style.display = "none";
    }
  }
  document.addEventListener("mousemove", function (event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;
  });

  document.getElementById();

  // const observer = new IntersectionObserver((entries) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       entry.target.classList.add("show");
  //     }
  //   });
  // });

  // const hiddenElementsl = document.querySelectorAll(".");
  // hiddenElementsl.forEach((el) => observer.observe(el));

  // const hiddenElementsr = document.querySelectorAll(".hiddenr");
  // hiddenElementsr.forEach((el) => observer.observe(el));
});
