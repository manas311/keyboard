for (var n = 0; n < document.querySelectorAll(".trumpet").length; n++) {
  document.querySelectorAll("button")[n].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
  });
}

addEventListener("keydown", function(event) {
  makeSound(event.key);
})

function makeSound(key) {
  switch (key) {
    case "0":
      var E0 = new Audio('sounds/0-E.mp3');
      E0.play();
      break;
    case "1":
      var C1 = new Audio('sounds/1-C.mp3');
      C1.play();
      break;
    case "2":
      var D2 = new Audio('sounds/2-D.mp3');
      D2.play();
      break;
    case "3":
      var E3 = new Audio('sounds/3-E.mp3');
      E3.play();
      break;
    case "4":
      var F4 = new Audio('sounds/4-F.mp3');
      F4.play();
      break;
    case "5":
      var G5 = new Audio('sounds/5-G.mp3');
      G5.play();
      break;
    case "6":
      var A6 = new Audio('sounds/6-A.mp3');
      A6.play();
      break;
    case "7":
      var B7 = new Audio('sounds/7-B.mp3');
      B7.play();
      break;
    case "8":
      var C8 = new Audio('sounds/8-C.mp3');
      C8.play();
      break;
    case "9":
      var D9 = new Audio('sounds/9-D.mp3');
      D9.play();
      break;
  }
}
