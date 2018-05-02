# MINI ZOO
       
 **Notas generales**
 - Crear opciones de filtros para imagenes
 
 ![normal](https://image.ibb.co/naDyES/screencapture_mariacravioto_github_io_mini_zoo_2018_05_02_00_46_05.png)
 
 ![filtro](https://image.ibb.co/cPzMZS/screencapture_mariacravioto_github_io_mini_zoo_2018_05_02_00_46_50.png)


  **Ensamblar la estructura html**   
  - Creamos el menú de opciones

                 <select> & <option>

  - Agregamos las imágenes


  **crea el archivo css**
  - Da estilo, tamaño y ubicación a los elementos creados en html 

                     #select{
                     background-color: #48D1CC;
                     color: #FFFFFF;
                     height: 30px;
                     margin-left: 600px;
                     }

  - Crea las clases que se agregarán a las imágenes para que cambien según la opción. Para esto se usará la propiedad de css

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



 **Crea el archivo javascript**

- Llamamos a todos los elementos que tienen la clase asignada a las imágenes

       var image = document.getElementsByClassName('image');

y luego agregue la clase que agregará los estilos de filtro.

- Gracias al elemento onchange puedes saber cuándo ha sido seleccionada una opción

       document.getElementById("select").addEventListener("change", changeFilter);

-  Creamos un else si para asignar una función para ejecutar,
de acuerdo con la elección del usuario, a través de las opciones dadas en la selección

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
