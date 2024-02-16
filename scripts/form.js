const form = document.querySelector(".form");
const btn = document.querySelector(".form__input-send");
const msg = document.querySelector(".form__input-msg");

form.addEventListener("submit", e => {
    e.preventDefault();
    const formData = new FormData(form);
    fetch("/send.php", {
        method: "POST",
        body: formData
    })
});


function removeElement(element) {
    setTimeout(() => {
      element.style.display = 'none';
    }, 2000);
}


btn.addEventListener("click", () => {
    msg.style.display = "block";
    removeElement(msg);
})
