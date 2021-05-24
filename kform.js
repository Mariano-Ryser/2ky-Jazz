function getInputText(selector) { 
    var element = document.querySelector(selector);

    if (element) {
        log(selector, element.value);
        return element.value;
    }
    else {
        alert("Input element '" + selector + "' could not be found.");
        return "";
    }
}

function log(label, value) {
    console.log(label + ': ' + value);
}
/* Dear Coaches, some how i can"t get it ;)*/ 