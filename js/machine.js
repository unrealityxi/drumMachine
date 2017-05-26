(function(){
  
  "use strict";
  const background = document.querySelector(".backgroundImg");
  function playSound(e){
    // Get the audio element corresponding to key
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    // Return if no such element
    if (!audio){
      return;
    }
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
    background.classList.remove("animate-breathe");
    background.classList.add("animate");
  }
  
  
  // attach event listeners to end transitions
  const keys = document.querySelectorAll(".key");
  
  function removeTransition(e){
    // weed out all but transform
    if (e.propertyName !== "transform"){
      return;
    }
    this.classList.remove("playing");
    background.classList.remove("animate");
    background.classList.add("animate-breathe");
  }
  
  keys.forEach(key => {
    key.addEventListener("transitionend", removeTransition);
  });
  window.addEventListener("keydown", playSound);
})();
