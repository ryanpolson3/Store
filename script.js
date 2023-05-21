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
  type: "loop",
  perPage: 1,
  perMove: 1,
  focus: 'left',
  rewind: true,
  wheel: false,
  pagination: false,
  gap: 15,
  autoheight: true,
  breakpoints: {
    767: {
      perPage: 1,
      gap: 15,
      width: '92%',
      
    },
    768: {
      perPage: 2,
      perMove: 2,
      gap: 15,
    },
    1024: {
      perPage: 3,
      perMove: 3,
      gap: 15,
      width: '92.5%',
    },
    1440: {
      perPage: 4,
      perMove: 1,
      gap: 15,
      width: '94.5%',
    },
    2560: {
      perPage: 4,
      perMove: 1,
      width: '72%',
      gap: 80,
    }
  },
}).mount();
