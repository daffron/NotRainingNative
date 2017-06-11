import request from 'superagent'

module.exports = {
  getWeather
}

function getWeather (city, callback) {
  request.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=fc04e2e516b1de4348fb0323f981a1d9`)
  .end((err, res) => {
    if (err) {
      callback(err.message)
      return
    }
    const weather = res.body
    callback(null, weather)
  })
}
