// Logic For Calculation

let inputElement = document.getElementById("input");
let str = "";

function appendToInput(value) {
  // Logic for handle one arthemetic in sequence
  if (
    value === "*" ||
    value === "-" ||
    value === "+" ||
    value === "/" ||
    value === "%" ||
    value === "."
  ) {
    let lastOperator = input.value.slice(-1);
    if (
      lastOperator === "+" ||
      lastOperator === "-" ||
      lastOperator === "*" ||
      lastOperator === "/" ||
      lastOperator === "%" ||
      lastOperator === "."
    ) {
      str = str.slice(0, -1);
      inputElement.value = str;
    }
    str += value;
    inputElement.value = str;
  } else {
    str += value;
    inputElement.value = str;
  }
}

function clearInput() {
  str = "";
  inputElement.value = str;
}

function backspace() {
  str = input.value;
  if (str === "Invaild") {
    str = "";
    input.value = str;
  } else {
    str = str.slice(0, -1);
    inputElement.value = str;
  }
}

function calculate() {
  try {
    if (str.includes("%")) {
      let firstValue = str.slice(0, str.indexOf("%"));
      let delimiter = "%";
      let substrings = str.split(delimiter);
      let secondValue = substrings[1].trim();
      let result = (firstValue / 100) * secondValue;
      // Check if result is a decimal number
      if (Number.isInteger(result)) {
        inputElement.value = result;
      } else {
        inputElement.value = result.toFixed(2); // Limit to two digits after decimal
      }
    } else {
      str = eval(str);
      inputElement.value = str;
    }
  } catch (error) {
    str = "Invalid";
    inputElement.value = str;
    str = "";
  }
}

// Logic For switch Dark-Light Mode

let darkLightBtn = document.querySelectorAll(".dark-light-btn");
let parent = document.querySelector(".main-container");
let darkBtn = darkLightBtn.item(1);
let lightBtn = darkLightBtn.item(0);
let bodyTag = document.querySelector("body");
let btns = document.querySelectorAll("button");
let input = document.querySelector("input");
let bgBlueBtns = document.querySelectorAll(".bg-blue");
let bgDarkBlueBtn = document.querySelector(".bg-dark-blue");

lightBtn.classList.add("dark-light-toggle");

darkBtn.addEventListener("click", () => {
  darkBtn.classList.add("dark-light-toggle");
  lightBtn.classList.remove("dark-light-toggle");
  bodyTag.style.backgroundColor = "black";
  btns.forEach((button) => {
    button.style.backgroundColor = "black";
  });
  input.style.backgroundColor = "black";
  input.style.color = "white";
  document.body.style.backgroundColor = "black";
  document.querySelector(".in-container").style.backgroundColor = "black";
  document.querySelector(".input-container").style.backgroundColor = "black";
  document.querySelector(".main-container").style.backgroundColor = "black";
  document.querySelector(".backspace").style.fill = "#ebebeb";
  btns.forEach((btn) => {
    btn.style.backgroundColor = "rgb(20, 20, 20)";
  });
  bgBlueBtns.forEach((blueBtn) => {
    blueBtn.style.backgroundColor = "#001e4c";
  });
});

lightBtn.addEventListener("click", () => {
  lightBtn.classList.add("dark-light-toggle");
  darkBtn.classList.remove("dark-light-toggle");
  bodyTag.style.backgroundColor = "white";
  btns.forEach((button) => {
    button.style.backgroundColor = "white";
    button.style.borderRadius = "3vh";
    button.style.backgroundColor = "whitesmoke";
  });
  bgBlueBtns.forEach((blueBtn) => {
    blueBtn.style.backgroundColor = "#abddff";
  });
  bgDarkBlueBtn.style.backgroundColor = "#0385ff";
  input.style.backgroundColor = "white";
  input.style.color = "black";
  document.querySelector(".main-container").style.backgroundColor = "white";
  document.querySelector(".input-container").style.backgroundColor = "white";
  document.querySelector(".in-container").style.backgroundColor = "white";
  document.querySelector(".backspace").style.fill = "black";
});

// Logic For decreasing input text size over a limit

btns.forEach((button) => {
  button.addEventListener("click", () => {
    if (input.value.length >= 19 && input.value.length <= 25) {
      input.style.fontSize = "2.9vh";
    } else if (input.value.length > 25 && input.value.length < 39) {
      input.style.fontSize = "2vh";
    } else if (input.value.length < 19) {
      input.style.fontSize = "4vh";
    } else if (input.value.length > 19 && input.value.length < 25) {
      input.style.fontSize = "2.9vh";
    } else {
    }
  });
});

// Logic for add input value when Physical keyboard key pressed

document.addEventListener("keyup", (e) => {
  if (input.value.length >= 19 && input.value.length <= 25) {
    input.style.fontSize = "2.9vh";
  } else if (input.value.length > 25 && input.value.length < 39) {
    input.style.fontSize = "2vh";
  } else if (input.value.length < 19) {
    input.style.fontSize = "4vh";
  } else if (input.value.length > 19 && input.value.length < 25) {
    input.style.fontSize = "2.9vh";
  }
  try {
    let keyPressed = e.key;
    if (
      isFinite(keyPressed) ||
      ["+", "-", "*", "/", "%", "."].includes(keyPressed)
    ) {
      // Logic for handle one arthemetic in sequence
      let lastOperator = input.value.slice(-1);
      if (
        keyPressed === "/" ||
        keyPressed === "*" ||
        keyPressed === "-" ||
        keyPressed === "+" ||
        keyPressed === "%" ||
        keyPressed === "."
      ) {
        str = inputElement.value;
        str += keyPressed;
        input.value = str;
        if (
          lastOperator === "+" ||
          lastOperator === "-" ||
          lastOperator === "*" ||
          lastOperator === "/" ||
          lastOperator === "%" ||
          lastOperator === "."
        ) {
          let str = inputElement.value;
          str = str.slice(0, -2) + keyPressed;
          inputElement.value = str;
        }
      } else {
        str = inputElement.value;
        str += keyPressed;
        input.value = str;
      }
    } else if (keyPressed === "Enter") {
      str = eval(str);
      input.value = str;
    } else if (keyPressed === "Backspace") {
      str = input.value;
      if (str === "Invaild") {
        str = "";
        input.value = str;
      } else if (str === "undefined") {
        str = "";
        input.value = str;
      } else if (str === "Infinity") {
        str = "";
        input.value = str;
      } else {
        str = str.slice(0, -1);
        inputElement.value = str;
      }
    }
  } catch (error) {
    input.value = "Invalid";
    str = "";
  }
});
