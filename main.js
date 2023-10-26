const resultEl = document.querySelector(".result");

function inputResult(value) {
  result = value || 0;

  resultEl.innerText = result;
}

inputResult();
