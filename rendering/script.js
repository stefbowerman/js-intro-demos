console.log('Let\'s learn JavaScript')

const grid = document.getElementById('grid')
const button = document.getElementById('add-button')

button.addEventListener('click', addGridItem)

function addGridItem() {
  console.log('add item!')

  const item = document.createElement("div")
  item.classList.add('grid-item')

  // Add the time elapsed
  const timeElapsed = performance.now()

  item.textContent = (timeElapsed / 1000).toFixed(2) + ' seconds since page load'

  // Append to page
  grid.append(item)
}

















// const grid = document.getElementById('grid')
// const addButton = document.getElementById('add-button')

// function addGridItem() {
//   const item = document.createElement('div')

//   item.classList.add('grid-item')
  
//   const timeinMs = performance.now()
//   const timeinSeconds = (timeinMs / 1000).toFixed(2)

//   item.innerText = timeinSeconds + ' seconds since we loaded the page'

//   grid.appendChild(item)
// }