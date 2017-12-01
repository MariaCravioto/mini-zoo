       =MINI ZOO=


  *Assemble the html structure*   
  - We create the options menu  

                 <select> & <option>

  - We add the images


  *create the css file*
  - Give style, size and location to the elements created in html  

                     #select{
                     background-color: #48D1CC;
                     color: #FFFFFF;
                     height: 30px;
                     margin-left: 600px;
                     }

  - Create the classes that will be added to the images
    so that they change according to the option
    For this the property of css will be used

                    °filter

          .negative-colors{
            filter:invert();
          }

          .sepia{
            filter:sepia();
          }

          .white-black{
            filter:grayscale();
          }



 *Create the java script file*

- We call all the elements that have the class assigned to the images

     var image= document.getElementsByClassName('image');

and then add the class that will add the filter styles.

- Thanks to the onchange element you can know when a select option has been
  selected

   document.getElementById("select").addEventListener("change", changeFilter);

-  We create an else if to assign a function to execute,
according to the user's choice, through the options given in the select

              if (filterToApply == "negative") {
                 switchToNegative();
              } else if (filterToApply == "black-white") {
                 switchToBlackWhite();
              } else if (filterToApply == "sepia") {
                 switchToSepia();
              } else if (filterToApply == "original") {
                 originalFilter();
              }
                }       
