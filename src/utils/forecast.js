const request = require('postman-request')

const forecast = (latitude, longtitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=4bb3b4f47cbf73b04a5a682194875642&query=' + latitude + ',' + longtitude
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            console.log('Unable to connect to weather service!')
        }
        else if (body.error){
            callback('Location not found.', undefined)
        }
        else{
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees. The temperature feels like ' + body.current.feelslike + ' degrees.')
        }
    })
}

module.exports = forecast