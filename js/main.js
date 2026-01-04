
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

/* Close menu when a link is clicked */
mobileMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

const heroData = [
  {
    image: "assets/images/hero1.jpg",
    quote: "Building things with clarity and purpose.",
    author: "Drishay Chauhan"
  },
  {
    image: "assets/images/hero2.jpg",
    quote: "Learning by building, improving by reflecting.",
    author: "Drishay Chauhan"
  }
];

let heroIndex = 0;
let heroInterval;

const heroImage = document.getElementById("heroImage");
const heroQuote = document.getElementById("heroQuote");
const heroAuthor = document.getElementById("heroAuthor");
const heroContent = document.getElementById("heroContent");

function updateHero() {
  heroImage.style.opacity = 0;
  heroQuote.style.opacity = 0;
  heroAuthor.style.opacity = 0;

  setTimeout(() => {
    heroIndex = (heroIndex + 1) % heroData.length;

    heroImage.src = heroData[heroIndex].image;
    heroQuote.textContent = heroData[heroIndex].quote;
    heroAuthor.textContent = `— ${heroData[heroIndex].author}`;

    heroImage.style.opacity = 1;
    heroQuote.style.opacity = 1;
    heroAuthor.style.opacity = 1;
  }, 800);
}

function startHeroRotation() {
  heroInterval = setInterval(updateHero, 8000);
}

function stopHeroRotation() {
  clearInterval(heroInterval);
}

startHeroRotation();

if (heroContent) {
  heroContent.addEventListener("mouseenter", stopHeroRotation);
  heroContent.addEventListener("mouseleave", startHeroRotation);
}
