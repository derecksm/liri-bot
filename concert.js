require('dotenv').config()
const axios = require('axios')
const moment = require('moment')


let concertSearch = (concertFinder) => {
 
  axios.get(`https://rest.bandsintown.com/artists/${concertFinder[0]}/events?app_id=codingbootcamp`)
    .then(({ data }) => {
      if (!data.length) {
        console.log('No Concerts were found for that band.')
      } else {
      let venueName = data[0].venue.name
      let venueCity = data[0].venue.city
      let venueCountry = data[0].venue.country
      let date = moment(data[0].datetime).format("MMMM Do, YYYY")
      console.log(`
      Venue: ${venueName}
      Location: ${venueCity},${venueCountry}
      Date: ${date}
      `)
      }
    })
    .catch(e => console.log(e))
}

module.exports = {concertSearch: concertSearch}