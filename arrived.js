//var x = document.getElementById(".notification");

//document.addEventListener("DOMContentLoaded", play);

function play() {
  console.log("play was called");
  var audio = new Audio("mp3/notification.mp3");
  audio.play();
}

// eventlistener for when clicking the <body>
document.querySelector("body").addEventListener("click", play);
