       =MINI ZOO=


  *Assemble the html structure*   
  - We create the options menu  

                 <select> & <option>

  - We add the images


  *create the css file*
  - Give style, size and location to the elements created in html  

                   .image{
                     float: left;
                     height: 300px;
                     margin: 20px;
                     width: 300px;
                    }

  - Create the classes that will be added to the images
    so that they change according to the option
    For this the property of css will be used

                    °filter

          .negative-colors{
            filter:invert(.8);
          }

          .sepia{
            filter:sepia(1);
          }

          .white-black{
            filter:grayscale(100%);
          }



 *Create the java script file*

- We call all the elements that have the class assigned to the images

     var image= document.getElementsByClassName('image');

and then add the class that will add the filter styles.

- Thanks to the onchange element you can know when a select option has been
  selected

          var select= document.getElementById('select'){
            select.onchange = function(){
             if(select.value == "original"){
              for(var i=0;i> image.length;i++){
               image[i].classList.remove("white-black");
               image[i].classList.remove("negative-colors");
               image[i].classList.remove("sepia");
             }
            }
               /complete your code here/
          }
