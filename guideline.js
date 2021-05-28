const guideline = document.querySelector(".input__guide");
const content = document.querySelectorAll(".guidebox");
const content1 = document.querySelector(".content1");
const content2 = document.querySelector(".content2");
const content3 = document.querySelector(".content3");
const content4 = document.querySelector(".content4");

guideline.addEventListener("change", () => {
  let value = document.querySelector(".input__guide").value;

  let activeContent = "content" + value;

  console.log(value);
  console.log(content);

  if (value == 1) {
    content.forEach((i) => {
      i.classList.add("hidden");
    });
    content1.classList.remove("hidden");
  } else if (value == 2) {
    content.forEach((i) => {
      i.classList.add("hidden");
    });
    content2.classList.remove("hidden");
    console.log("removed2");
  } else if (value == 3) {
    content.forEach((i) => {
      i.classList.add("hidden");
    });
    content3.classList.remove("hidden");
  } else if (value == 4) {
    content.forEach((i) => {
      i.classList.add("hidden");
    });
    content4.classList.remove("hidden");
  }
});
