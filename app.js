var translateFrom = document.getElementById("translate-from");
var translateTo = document.getElementById("translate-to");

var btnTranslate = document.getElementById("btn-translate");

btnTranslate.addEventListener("click", clickhandler)

function clickhandler() {
    let url = "https://api.funtranslations.com/translate/klingon.json" + "?" + "text=" + translateFrom.value;
    fetch(url)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            console.log(json.contents.translated);
            translateTo.innerText = json.contents.translated
        })
        .catch(errorHandler)
}

function errorHandler(error) {
    alert("Error occured, " + error + ".\nSome issue with the server. Please try again later");
}