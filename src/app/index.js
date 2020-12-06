const { Weather } = require('./Weather')
const { UI } = require('./UI')

const weather = new Weather('medellin', 'col')
const ui = new UI()

require('./index.css')

async function fetchData() {
  const data = await await weather.getData()
  console.log(data)
  ui.render(data)
}

document.querySelector('#w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value
  const countryCode = document.getElementById('countryCode').value
  weather.changeLocation(city, countryCode)
  fetchData()
  e.preventDefault()
  console.log(city, countryCode)
})

document.addEventListener('DOMContentLoaded', fetchData)
