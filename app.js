
const numbersMap = {
  "0": [
    "up-line",
    "left-up-line",
    "right-up-line",
    "left-down-line",
    "right-down-line",
    "down-line",
  ],
  "1": [
    "right-up-line",
    "right-down-line",
  ],
  "2": [
    "up-line",
    "right-up-line",
    "mid-line",
    "left-down-line",
    "down-line",
  ],
  "3": [
    "up-line",
    "right-up-line",
    "mid-line",
    "right-down-line",
    "down-line",
  ],
  "4": [
    "left-up-line",
    "right-up-line",
    "mid-line",
    "right-down-line",
  ],
  "5": [
    "up-line",
    "left-up-line",
    "mid-line",
    "right-down-line",
    "down-line",
  ],
  "6": [
    "up-line",
    "left-up-line",
    "mid-line",
    "left-down-line",
    "right-down-line",
    "down-line",
  ],
  "7": [
    "up-line",
    "right-up-line",
    "right-down-line",
  ],
  "8": [
    "up-line",
    "left-up-line",
    "right-up-line",
    "mid-line",
    "left-down-line",
    "right-down-line",
    "down-line",
  ],
  "9": [
    "up-line",
    "left-up-line",
    "right-up-line",
    "mid-line",
    "right-down-line",
    "down-line",
  ]
}


// função recursiva
function getTime() {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();

  const hourToString = hour.toString();
  const minuteToString = minute.toString();
  
  const hourTen = hourToString[0];
  const hourUnit = hourToString[1];

  const minuteTen = minuteToString[0];
  const minuteUnit = minuteToString[1];

  displayTime()

  setTimeout(() => {
    getTime();
  }, 1000);
}

function displayTime() {
  const digit = numbersMap["9"];
  digit.forEach(item => {
    const element = document.querySelector(`.${item}`);
    element.classList.add("active");
  });
}

displayTime();

// getTime();
