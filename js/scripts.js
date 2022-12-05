/* ################# Banner offer multi-color ################# */

const elem = document.querySelector(".offer");

let myInterval = setInterval(changeTextColor, 9000);

function randomNum(x) {
  return Math.floor(Math.random() * x);
}

function changeTextColor() {
  let myRGBText = `linear-gradient(${randomNum(360)}deg, rgb(${randomNum(
    256
  )}, ${randomNum(256)}, ${randomNum(256)}), rgb(${randomNum(256)}, ${randomNum(
    256
  )}, ${randomNum(256)}), rgb(${randomNum(256)}, ${randomNum(256)}, ${randomNum(
    256
  )}))`;

  elem.style.backgroundImage = `${myRGBText}`;
}
