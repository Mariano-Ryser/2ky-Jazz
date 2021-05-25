
//------form function------//
//-----form activation-----//

function validateFormFields() {
    var firstName = getInputText("#inputName");
    var surname = getInputText("#inputSurname");
    var email = getInputText("#inputEmail");
    var lesson = getInputText("#inputLesson");
    var comment = getInputText("#inputComment");

    if (firstName == "") return false;
    if ( surname== "") return false;
    if (email == "") return false;
    if ( lesson == "") return false;
    if ( comment == "") return false;

     // If we land here then all input element are valid.
     alert("Thanks - all checked input elements are valid.");
     return true;

}



//------check field fill----///



//----activate all selectors----//

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

//-----post to console----///
function log(label, value) {
    console.log(label + ': ' + value);  
}





//---------button--------///

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}