const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=8e2220a10a9b8fbdda4870bae719999e&query=' + latitude + ',' + longitude + '&units=m'

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined)
    } else if (body.error) {
      callback('Unable to find location!', undefined)
    } else {
      callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees celsius out. It feels like ' + body.current.feelslike + '. There is a ' + body.current.precip.toFixed(1) + 'mm of rain. The humidity is ' + body.current.humidity + '%.')
    }
  })
}

module.exports = forecast