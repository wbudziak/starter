const acc = [...document.querySelectorAll(".accordion")];
const accBtn = [...document.querySelectorAll(".accordion__text")];
const accContent = [...document.querySelectorAll(".accordion__content")];
const accordion = (button, content, acc, showOnlyOne) => {
  button.forEach((button, index) => {
    button.addEventListener("click", () => {
      if (content[index].style.maxHeight) {
        content[index].style.maxHeight = null;
        acc[index].classList.remove("active");
      } else {
        if (showOnlyOne) {
          content.forEach((content) => {
            content.style.maxHeight = null;
          });
          acc.forEach((add) => {
            add.classList.remove("active");
          });
        }
        content[index].style.maxHeight = `${content[index].scrollHeight}px`;
        acc[index].classList.add("active");
      }
    });
  });
};
accordion(accBtn, accContent, acc, true);
