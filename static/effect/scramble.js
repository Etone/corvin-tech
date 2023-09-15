const generateRandomChar = function () {
  return Math.random().toString(36).slice(2, 3); // one character
};

/**
 * 
 * @param {string} targetText 
 * @param {number} from 
 * @returns String with scrambled letters attached after target[from]
 */
let scramble = function (targetText, from) {
  if (!targetText) return;
  let newText = targetText
    .substring(0, from)
    .padEnd(targetText.length, "_")
    .split("")
    .map((letter, index) => {
      if (targetText[index] == " ") {
        return " ";
      }
      else if (letter == "_") {
        return generateRandomChar();
      }
      else {
        return letter;
      }
    })
    .join("");
  return newText;
};

/**
 * @param {Element} element 
 * 
 * @returns
 */
const getTextNode = function (element) {
  if (element.childElementCount == 0) {
    return element
  } else {
    return getTextNode(element.lastElementChild)
  }
}

/**
 * 
 * @param {Element} element 
 * @returns 
 */
const scrambleElement = function (element) {
  if (!element) return;
  const targetText = element.dataset.value;
  var textNode = getTextNode(element)
  let iterations = 0;
  const interval = setInterval(() => {
    textNode.innerText = scramble(targetText, iterations / 3);
    if (iterations / 3 >= targetText.length) {
      clearInterval(interval);
    }
    iterations++;
  }, 1000 / (targetText.length * 3));
};

document.querySelectorAll(".scramble").forEach((element) => {
  element.onmouseover = () => { scrambleElement(element) }
})

window.onload = () => {
  document.querySelectorAll(".scramble").forEach((element) => {
    element.dataset.value = getTextNode(element).innerText
    scrambleElement(element)
  })
}