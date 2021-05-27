function myFunction() {
  if (direction.classList.contains("displayNone")) {
    direction.classList.remove("displayNone");
  } else {
    direction.classList.add("displayNone");
  }
}

const btn = document.querySelector(".historic__img");
const direction = document.querySelector(".package__infoJs");
btn.addEventListener("click", myFunction);
