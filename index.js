// Créer 3 variables pour stocker 3 chiffres

// Donner au body une couleur de fond en rgb()

// Montrer sur le body la couleur rgb()

// math.floor(Math.random() * 255)
// setInterval()
// ------------------------------------------------------------------------------------------------

// Fonction qui fait varier la couleur du background :

const changeBackground = () => {
  let R, G, B;

  R = Math.floor(Math.random() * 255);
  G = Math.floor(Math.random() * 255);
  B = Math.floor(Math.random() * 255);

  let colval = `rgb(${R}, ${G}, ${B})`;

  const body = document.querySelector("body");
  // OU document.body.style.background = colval;
  body.style.background = colval;
  console.log(colval);

  const spanRgbDisplay = document.querySelector(".rgbDisplay > span");
  spanRgbDisplay.textContent = colval;
};

setInterval(changeBackground, 1500);
