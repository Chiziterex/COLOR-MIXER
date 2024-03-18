const converter = document.getElementById("ans");

converter.addEventListener("click", () => {
  const lstColor = document.getElementById("color1");
  const scndColor = document.getElementById("color2");
  const finalColor = document.getElementById("finalColor");
  const color1Rgb = document.getElementById("color1Rgb");
  const color2Rgb = document.getElementById("color2Rgb");
  const finalColorRgb = document.getElementById("finalColorRgb");

  // Retrieve color values after the user has entered them
  const color1 = lstColor.value.trim().toLowerCase();
  const color2 = scndColor.value.trim().toLowerCase();

  let mixedColor = "";
  let mixedColorRgb = "";

  switch (`${color1},${color2}`) {
    case "red,yellow":
    case "yellow,red":
      mixedColor = "orange";
      mixedColorRgb = "rgb(255, 165, 0)";
      break;
    case "red,blue":
    case "blue,red":
      mixedColor = "magenta";
      mixedColorRgb = "rgb(255, 0, 255)";
      break;
    case "red,white":
    case "white,red":
      mixedColor = "pink";
      mixedColorRgb = "rgb(255, 192, 203)";
      break;
    case "blue,yellow":
    case "yellow,blue":
      mixedColor = "green";
      mixedColorRgb = "rgb(0, 255, 0)";
      break;
    case "red,green":
    case "green,red":
      mixedColor = "yellow";
      mixedColorRgb = "rgb(255,255,0)";
      break;
    case "green,blue":
    case "blue,green":
      mixedColor = "cyan";
      mixedColorRgb = "rgb(0, 255, 255)";
      break;
    case " , ":
    case " , ":
      lstColor.style.borderColor = "red";
      scndColor.style.borderColor = "red";
      break;
    default:
      // If no valid color combination is found, reset the values
      mixedColor = "";
      mixedColorRgb = "";
  }

  // Update the final color input and display elements
  finalColor.value = mixedColor;
  finalColor.style.backgroundColor = mixedColorRgb;
  finalColor.style.color = "#fff";
  lstColor.style.backgroundColor = color1;
  scndColor.style.backgroundColor = color2;
  finalColorRgb.innerText = mixedColorRgb;

  // Call lookupValue function after updating the colors
  lookupValue();
});

function lookupValue() {
  const inputValues = document.getElementsByClassName("inputValue");
  let resultRgb = document.querySelectorAll(".result");

  console.log("Input Values:", inputValues);
  console.log("Result Elements:", resultRgb);

  for (let i = 0; i < inputValues.length; i++) {
    const inputValue = inputValues[i].value.trim().toLowerCase();
    let colorRgb = "";

    if (inputValue === "red") {
      colorRgb = "rgb(255, 0, 0)";
    } else if (inputValue === "blue") {
      colorRgb = "rgb(0, 0, 255)";
    } else if (inputValue === "yellow") {
      colorRgb = "rgb(255, 255, 0)";
    } else if (inputValue === "green") {
      colorRgb = "rgb(0, 255, 0)";
    } else if (inputValue === "white") {
      colorRgb = "rgb(255, 255, 255)";
    } else {
      colorRgb = " ";
    }

    let result = resultRgb[i];

    // console.log("Input Value:", inputValue);
    // console.log("Color RGB:", colorRgb);

    result.innerText = colorRgb;

    console.log("Result Element After Update:", result);
  }
}
