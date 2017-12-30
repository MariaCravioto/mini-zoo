/* Thanks to the change element you can know when a select option has been
  selected */
document.getElementById("select").addEventListener("change", changeFilter);

/* We create an event function and declare two variables with which we will
access the data of the options to assign them values ​​through functions*/
function changeFilter(event) {
  var selectedIndex = event.target.selectedIndex;
  var filterToApply = event.target[selectedIndex].dataset.filter;
  
  /* We create an else if to assign a function to execute,
according to the user's choice, through the options given in the select */
  if (filterToApply == "negative") {
    switchToNegative();
  }
  else if (filterToApply == "black-white") {
    switchToBlackWhite();
  }
  else if (filterToApply == "sepia") {
    switchToSepia();
  }
  else if (filterToApply == "original") {
    originalFilter();
  }
}


/* We create the function to return the original color to the images */
function originalFilter() {
  var imagesToChange = document.getElementsByTagName("img");
   console.log(imagesToChange);
  for (var i = 0; i < imagesToChange.length; i++) {
   imagesToChange[i].style.filter = "none";
  }
}

/* We create the function to give the effect due to the images,
when choosing the black and white filter */
function switchToBlackWhite() {
  var imagesToChange = document.getElementsByTagName("img");
   console.log(imagesToChange);
  for (var i = 0; i < imagesToChange.length; i++) {
   imagesToChange[i].className = "black-white";
  }
}

/* We create the function to give the effect due to the images,
when choosing the sepia filter */
function switchToSepia() {
  var imagesToChange = document.getElementsByTagName("img");
   console.log(imagesToChange);
  for (var i = 0; i < imagesToChange.length; i++) {
   imagesToChange[i].className = "sepia";
  }
}

/* We create the function to give it the effect due to the images,
when choosing the sepia filter */
function switchToNegative() {
  var imagesToChange = document.getElementsByTagName("img");
   console.log(imagesToChange);
  for (var i = 0; i < imagesToChange.length; i++) {
   imagesToChange[i].className = "negative";
  }
}
