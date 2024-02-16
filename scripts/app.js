const headerForm = document.querySelector(".header__form");
const closeForm = document.querySelector(".header__form-close");
const btnHeaderBanner = document.querySelector('.btn__header-banner');
const sendForm = document.querySelector('btn__header-form');

const closeModal = elementClose => elementClose.classList.remove("open");
const openModal = elementOpen => elementOpen.classList.add("open")

btnHeaderBanner.addEventListener("click", () => openModal(headerForm));
closeForm.addEventListener("click", () => closeModal(headerForm));

const form = document.querySelector('form');
const btn = document.querySelector(".btn__header-form");
const msg = document.querySelector(".header__send-message");


form.addEventListener('submit', e => {
	e.preventDefault();
	const formData = new FormData(form);
	fetch("/main.php", {
		method: "POST",
		body: formData
	})
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000);
}

function removeElement(element) {
  setTimeout(() => {
    element.style.display = 'none';
  }, 2000);
}

btn.addEventListener("click", () => {
  msg.style.display = "block";
  removeElement(msg);
});
