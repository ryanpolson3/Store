// Hamburger Menu Function
function hamburgerMenu() {
  var x = document.getElementById("mobile-links");
  console.log(document.getElementById("mobile-links"));
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// Set Hamburger Link Active
const hamburgerMenuLinks = document.querySelector(".mobile-li");

function mobileLinks(event) {
  if (this.classList.contains("active")) {
    this.classList.remove("active");
  } else this.classList.add("active");
}

for (i = 0; i < hamburgerMenuLinks.length; i++) {
  hamburgerMenuLinks[i].addEventListener("click", mobileLinks);
}

// Initialize Splide
const splide = new Splide(".splide", {
  type: "slide",
  wheel: true,
  pagination: false,
  gap: 15,
  breakpoints: {
    500: {
      perPage: 1,
    },
    768: {
      perPage: 2,
    },
    1024: {
      perPage: 3,
    },
    5500: {
      perPage: 4,
    },
  },
}).mount();
