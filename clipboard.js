window.copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(function () {
        console.log("Text successfully copied to clipboard");
    }).catch(function (error) {
        console.error("Error copying text to clipboard: ", error);
    });
};

// Fonction pour récupérer du texte d'un élément spécifique
window.getTextFromElement = (elementId) => {
    var element = document.getElementById(elementId);
    if (element) {
        return element.innerText;
    }
    return "";
};