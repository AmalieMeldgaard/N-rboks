const guideline = document.querySelector(".input__guide");
const content = document.querySelectorAll(".guidebox");

guideline.addEventListener("change", () => {
  //console.log(guideline.value);
  let value = document.querySelector(".input__guide").value;

  let activeContent = "content" + value;

  console.log(activeContent);

  content.forEach((i) => {
    i.classlist.add("hidden");
  });

  /* if (guideline.value === 1) {
    content.forEach(i, () => {
      i.classlist.add("hidden");
    });
    content1.classList.remove("hidden");
  } else if (guideline.value === 2) {
    content.forEach(i, () => {
      i.classlist.add("hidden");
    });
    content2.classList.remove("hidden");
  } */
});
