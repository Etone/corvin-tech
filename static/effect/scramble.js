const generateRandomChar = function () {
  return Math.random().toString(36).slice(2, 3); // one character
};

let scramble = function (targetText, from) {
  if (!targetText) return;
  let newText = targetText
    .substring(0, from)
    .padEnd(targetText.length, "_")
    .split("")
    .map((letter) => {
      if (letter == "_") {
        return generateRandomChar();
      } else {
        return letter;
      }
    })
    .join("");
  return newText;
};

const scrambleElement = function (element) {
  if (!element) return;
  const targetText = element.dataset.value;
  let iterations = 0;
  const interval = setInterval(() => {
    element.innerHTML = scramble(targetText, iterations / 3);
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
  document.querySelectorAll(".scramble").forEach(element => scrambleElement(element))
}