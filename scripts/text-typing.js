const text = document.querySelector(".text-typing");
const cursor = document.querySelector(".text-typing__cursor");
const textArr = ["<h1>Wojciech Budziak</h1>", "lalalalala"];
let activeText = 0;
let activeChar = 0;
let speed = 30;
let delay = speed;
let delayBetweenTexts = 2000;
let cursorSpeed = 500;
let loop = true;
let instantTextClear = false;

const cursorHandler = () => {
  cursor.classList.toggle("active");
};
setInterval(cursorHandler, cursorSpeed);

const addLetter = () => {
  if (loop && activeText === textArr.length) {
    activeText = 0;
    activeChar = 0;
    delay = speed;
    setTimeout(addLetter, delay);
    return;
  }

  text.textContent += textArr[activeText][activeChar];
  activeChar++;
  textLength = textArr[activeText].length;

  if (activeChar === textArr[activeText].length) {
    if (loop === false && activeText === textArr.length - 1) return;
    setTimeout(() => {
      for (let i = 0; i <= textArr[activeText].length; i++) {
        setTimeout(
          () => {
            text.textContent = textArr[activeText].substring(
              0,
              textArr[activeText].length - i
            );
            if (text.textContent === "") {
              activeText++;
              activeChar = 0;
              delay = speed;
              setTimeout(addLetter, delay);
            }
          },
          instantTextClear ? 0 : (delay += speed)
        );
      }
    }, delayBetweenTexts);
    return;
  }

  setTimeout(addLetter, delay);
};
addLetter();
