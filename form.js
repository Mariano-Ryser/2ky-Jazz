
/**
 * Validates the form fields of this document after the following rules:
 *    
 * ! All input fields must contain an "expected" value.  
 * 
 * @returns {Boolean} Returns true if the form fields are valid and false
 *                    if not.                     
 */
 function validateFormFields() {
    alert("what?");
    var firstName = getInputText("#inputFirstName");
    var lastName = getInputText("#inputLastName");

    // If any text input is empty then leave function immediately, returning false.
    if (firstName == "") return false;
    if (lastName == "") return false;

    // If we land here then all input element are valid.
    alert("Thanks - all checked input elements are valid.");
    return true; 
}

/**
 * Gets the text value of the indicated text input.
 * 
 * @param {String} selector  The selector of the input element to get its value.   
 * 
 * @returns {String} Returns the text value.                    
 */
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

/**
 * Logs the indicated item to the browser's console.
 * 
 * @param {String} label 
 * @param {any} value 
 * 
 * @returns {String} Returns the text value.                    
 */
function log(label, value) {
    console.log(label + ': ' + value);
}

// primitive function (not used in final version)
function validateFirstName() {
    var nameElement = document.querySelector("#inputFirstName");
    var nameValue = nameElement.value;
    alert("nameValue = \"" + nameValue + "\"");
}
/**
 * Validates the form fields of this document after the following rules:
 *    
 * ! All input fields must contain an "expected" value.  
 * 
 * @returns {Boolean} Returns true if the form fields are valid and false
 *                    if not.                     
 */
 function validateFormFields() {
    var firstName = getInputText("#inputFirstName");
    var lastName = getInputText("#inputLastName");
  
    if (firstName == "") {
        log("Uups", "The first name is missing.");
        return false;
    }
    if (lastName == "") return false;
    
    log("Wow", "All fields are fine!");
    return true;
  }
  
  /**
   * Gets the text value of the indicated text input.
   * 
   * @param {String} selector  The selector of the input element to get its value.   
   * 
   * @returns {String} Returns the text value.                    
   */
   function getInputText(selector) { 
     var element = document.querySelector(selector);
     
     if (element) {
         log(selector, element.value);
         return element.value;
     }
     else {
         log(selector, "is undefined");
         return "";
     }
   }
  
   function getFirstName() {
      var element = document.querySelector("#inputFirstName");
  
      if (element) return element.value;
      else return "";
   }
  
   function getLastName() {
      var element = document.querySelector("#inputLastName");
  
      if (element) return element.value;
      else return "";
   }
      
  
  
   /**
    * Log the given label and value.
    * 
    * @param {String} label 
    * @param {String} value 
    */
   function log(label, value) {
       // label could be "Vorname"
       // value could be "Christoph"
       console.log(label + ":" + value); // => "Vorname:Christoph"
   }