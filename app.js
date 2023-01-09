var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var output = document.querySelector("#output");
// function clickEventHandler() {
//   translate(txtInput.value);
// }



// function translate(inputText) {
//   fetch(
//     `https://api.funtranslations.com/translate/minion.json?text=${inputText}`
//   )
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (json) {
//       output.innerHTML = json.contents.translated;
//     });
// }

// btnTranslate.addEventListener("click", clickEventHandler);
var serverURL = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}


function clickHandler() {
    var inputText = txtInput.value; // taking input

    // calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; // output
           })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)
