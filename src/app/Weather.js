export class Weather {
  constructor(city, countryCode) {
    this.apiKey = '525832fa65bb21b21a82519d028a5aac'
    this.city = city
    this.countryCode = countryCode
  }

  async getData() {
    const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}&units=metric`
    const response = await fetch(URI)
    const data = response.json()
    return data
  }

  changeLocation(city, countryCode) {
    this.city = city
    this.countryCode = countryCode
  }
}
