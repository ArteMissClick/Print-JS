const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
	,
]

// Fonction pour la sélection et la mise en forme de la slide active

let activeSlide = 0

const bannerImage = document.querySelector(".banner-img");
const bannerText = document.getElementById("text");

function setActiveSlide(indexActive) {
	slides.forEach((slide, index) => {
		const bullet = document.getElementById("dot" + index)
		if (indexActive === index) {
			bullet.classList.add("dot_selected")
			bannerImage.setAttribute("src", "./assets/images/slideshow/" + slide.image)
			bannerText.innerHTML = slide.tagLine
		} else {
			bullet.classList.remove("dot_selected")
		}
	})
 }

 // Evènements des clics pour les flèches et le changement de la slide active

const selectorArrowLeft = document.querySelector(".arrow_left");
selectorArrowLeft.addEventListener("click", () => {
	if (activeSlide === 0) {
		activeSlide = slides.length - 1
	} else {
		activeSlide--
	}
	setActiveSlide(activeSlide)
});

const selectorArrowRight = document.querySelector(".arrow_right");
selectorArrowRight.addEventListener("click", () => {
	if (activeSlide === slides.length - 1) {
		activeSlide = 0
	} else {
		activeSlide++
	}
	setActiveSlide(activeSlide)
});

// Ajout des bullets points et de leur id

const generalDots = document.querySelector(".dots")

for (let i = 0; i < slides.length; i++) {
	const bullet = document.createElement(`span`)
	bullet.classList.add("dot")
	bullet.setAttribute("id", "dot" + i)
	generalDots.appendChild(bullet)
}

setActiveSlide(0)