const { Weather } = require('./Weather')
const { UI } = require('./UI')
const { Store } = require('./Store')

const ui = new UI()
const store = new Store()
const { city, countryCode } = store.getLocationData()
const weather = new Weather(city, countryCode)

require('./index.css')

async function fetchData() {
  const data = await weather.getData()
  console.log(data)
  ui.render(data)
}

document.querySelector('#w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value
  const countryCode = document.getElementById('countryCode').value
  weather.changeLocation(city, countryCode)
  store.setLocationData(city, countryCode)
  fetchData()
  e.preventDefault()
  console.log(city, countryCode)
})

document.addEventListener('DOMContentLoaded', fetchData)
