require('dotenv').config()
const axios = require('axios')
const moment = require('moment')


let concertSearch = (concertFinder) => {

  let concertSrch = _ => {
    if (concertFinder.join(' ').length < 1) {
      return "Sorry we couldn't find the concert"
    } else {
      return concertFinder.join(' ')
    }
  }
 
  axios.get(`https://rest.bandsintown.com/artists/${concertSrch()}/events?app_id=codingbootcamp`)
    .then(({ data }) => {
      let venueName = data[0].venue.name
      let venueCity = data[0].venue.city
      let venueCountry = data[0].venue.country
      let date = moment(data[0].datetime).format("MMMM Do, YYYY")
      console.log(`
      Venue: ${venueName}
      Location: ${venueCity},${venueCountry}
      Date: ${date}
      `)
    })
    .catch(e => console.log(e))
}

module.exports = {concertSearch: concertSearch}