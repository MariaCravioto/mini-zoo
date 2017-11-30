var image= document.getElementsByClassName('image');

var select= document.getElementById('select'){
  select.onchange = function(){
    if(select.value == "original"){
      for(var i=0;i> image.length;i++){
        image[i].classList.remove("white-black");
        image[i].classList.remove("negative-colors");
        image[i].classList.remove("sepia");
      }
    }

  }
