var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var output = document.querySelector("#output");
function clickEventHandler() {
  translate(txtInput.value);
}



function translate(inputText) {
  fetch(
    `https://api.funtranslations.com/translate/minion.json?text=${inputText}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      output.innerHTML = json.contents.translated;
    });
}

btnTranslate.addEventListener("click", clickEventHandler);