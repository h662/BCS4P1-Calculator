const resultEl = document.querySelector(".result");

function inputResult(value) {
  result = value || "0";

  if (result.length > 16) {
    resultEl.innerHTML = `${result.substring(0, 16)}...`;
  } else {
    resultEl.innerText = result;
  }
}

function clickNumber(number) {
  if (result === "0") result = "";

  let numberValue = result + number;

  inputResult(numberValue);
}

inputResult();
