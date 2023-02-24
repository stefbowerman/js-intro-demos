console.log('Let\',s learn JavaScript')

// Step 1 - get Access to the button
const button = document.getElementById("clickable-button");

console.log(button)

// Add event listener
button.addEventListener('click', updateBackground)

// This function updates the background color with an HSL value
// while also updating the text color with the same HSL value but with the opposite hue
//
// Here's a link to the HSL picker from class -> https://hslpicker.com/
//
function updateBackground() {
  const hue = Math.random() * 360
  const saturation = 60 + Math.random() * 20
  const lightness = 60 + Math.random() * 20

  // console.log(hue, saturation, lightness)

  const hsl = 'hsl(' + hue + ', ' + saturation + '%, ' + lightness + '%)'

  // Update text color
  const oppositeHue = hue + 180
  const oppositeHsl = 'hsl(' + oppositeHue + ', ' + saturation + '%, ' + lightness + '%)'

  
  document.body.style.backgroundColor = hsl
  document.body.style.color = oppositeHsl
  
}

// This function updates the background color with an RGB value
// 
// function updateBackground() {
//   //
  
//   // Make Random RGB values - Random number between 0 and 255
//   const num1 = Math.random() * 255
//   const rounded1 = Math.round(num1)

//   const num2 = Math.random() * 255
//   const rounded2 = Math.round(num2)

//   const num3 = Math.random() * 255
//   const rounded3 = Math.round(num3)    

//   console.log(rounded1, rounded2, rounded3)

//   const rgb = 'rgb(' + num1 + ', ' + num2 + ', ' + num3 +')'

//   document.body.style.backgroundColor = rgb
// }