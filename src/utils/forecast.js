const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const key = '94b833b758d83029b91b450fce46b5eb'
    const url = 'https://api.darksky.net/forecast/'+key+'/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const rainChance = body.currently.precipProbability * 100
        
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' +rainChance+ '% chance of rain.')
        }
    })
}

module.exports = forecast