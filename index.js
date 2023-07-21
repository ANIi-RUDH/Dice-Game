  for (var i=0; i<document.getElementsByClassName("drum").length;i++){ 


  document.querySelectorAll(".drum")[i].addEventListener("click",function(){  
    
    

    var show=this.innerHTML;
      switch (show) {
        case ("w"):
    new Audio("./sounds/kick-bass.mp3").play();
    console.log("w is pressed")
    break;
  case ("a"):
    new Audio("./sounds/crash.mp3").play();
    console.log("a is pressed")
    break;
  case ("s"):
    new Audio("./sounds/snare.mp3").play();
    console.log("s is pressed")
    break;
  case ("d"):
    new Audio("./sounds/tom-1.mp3").play();
    console.log("d is pressed")
    break;
  case ("j"):
    new Audio("./sounds/tom-2.mp3").play();
    console.log("j is pressed")
    break;
  case ("k"):
    new Audio("./sounds/tom-3.mp3").play();
    console.log("k is pressed")
    break;
  case ("l"):
    new Audio("./sounds/tom-4.mp3").play();
    console.log("l is pressed")
    break;

  default:console.log("there is some fault");
  break;
}


buttonAnimation(show);

    
  });
  
}  
  function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey)//because querySelector take .currentkey  as input just like css
    activeButton.classList.add("pressed");
   setTimeout(function(){
    activeButton.classList.remove("pressed");
   },100);
  }
  

  
  

















  



  // console.log(this.style.color="white");










  //alert("i got clicked");


  // // var audio=
  // new Audio("./sounds/kick-bass.mp3").play();
  // // audio.play();