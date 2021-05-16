// console.log('Sarting')
// setTimeout (()=>{
//     console.log('2 second Timer')
// },2000)
// setTimeout (()=>{
//     console.log('0 second Timer')
// },0)

// console.log('stop')

// ---------------------------------------------------------------------------------


//Weather API

// const url = 'https://api.darksky.net/forecast/163b483923d21d5674d49a366bd82588/23.2599,77.4126?units=si'

// request({ url: url, json: true }, (error, response) => {
//     const data = response.body
//     if (error) {
//         console.log('Unable to connect to Weather App!! :(')
//     }
//     else if (data.error) {
//         console.log('Unable to find location')
//     }
//     else {
//         console.log(data.daily.data[0].summary + ' It is currently ' + data.currently.temperature + ' degrees Celsius out.There is a chance of ' + data.currently.precipProbability + '% of chance of rain')
//     }
// })

// ------------------------------------------------------------------------------------------

//Geocoding

// const geoUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/bhopal.json?access_token=pk.eyJ1IjoibmlzaGthcnNoIiwiYSI6ImNrOGJzMHgweDBjMm0zZnBrdTRjNnRheHAifQ.VzKU9vSFoMnISIfg9uq0WQ&limit=1"

// request({ url: geoUrl, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to Weather App!! :(')
//     }
//     else if (response.body.features.length === 0) {
//         console.log('Unable to find location')
//     }
//     else {
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log(latitude, longitude)
//     }
// })

// -------------------------------------------------------

const request = require('request')
const geoCode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const address = process.argv[2]

if (!address) {
    console.log('Please provide an address!!')
}

else {
    geoCode(address, (error, { longitude, latitude, location }) => {
        if (error) {
            return console.log(error)
        }

        forecast(longitude, latitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)
        })
    })

}
