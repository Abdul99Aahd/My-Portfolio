
  //Select elements
  const mainWall = document.querySelector(".newproject");
  const lightOn = document.querySelector(".tube");
  const removelinear = document.querySelector(".light-remove");
  const spn = document.querySelector(".spooo");
  const spnancho = document.querySelector(".spooo a");

  // Function to turn light on
  function lightstart() {
    mainWall.style.backgroundColor = "#383838";
    lightOn.style.background = "none";
    lightOn.style.backgroundColor = "white";
    lightOn.style.boxShadow = "0px 2px 10px 1px rgb(255, 255, 255)";
    removelinear.classList.remove("light-remove");
    removelinear.classList.add("light");
    spn.style.color = "white";
    spn.style.textShadow = "-2px 6px 0 rgba(0,0,0,0.9)";
    spn.style.backgroundClip = "text";
    spnancho.style.backgroundColor = "grey";
    spnancho.style.cursor = "pointer";
  }

  // Function to turn light off
  function lightend() {
    mainWall.style.backgroundColor = "#2d2d2d";
    lightOn.style.background = "linear-gradient(180deg, rgba(208,207,207,1) 52%, rgba(68,68,68,1) 100%)";
    lightOn.style.backgroundColor = "none";
    lightOn.style.boxShadow = "none";
    removelinear.classList.remove("light");
    removelinear.classList.add("light-remove");
    spn.style.color = "rgb(68, 67, 67)";
    spn.style.textShadow = "none";
    spn.style.backgroundClip = "text";
    spnancho.style.backgroundColor = "#222";
    spnancho.style.cursor = "pointer";
  }
