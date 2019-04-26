require('dotenv').config()
let mySpotify = require('./spotify')
let myMovie = require('./movie')
let myConcert = require('./concert')
const fs = require('fs')
let [, , platform, ...search] = process.argv


switch (platform) {

  case 'spotify-this-song':
    mySpotify.spotifySearch(search)
    break

  case 'movie-this':
    myMovie.movieSearch(search)
    break

  case 'concert-this':
    myConcert.concertSearch(search)
    break

  case 'do-what-it-says':
    fs.readFile('random.txt', 'utf8', (e, data) => {
      if (e) {
        console.log(e)
      } else {
        let mystery = data.split(',')[1]
        mySpotify.spotifySearch(mystery)
      }
    })
    break

  default:
    break

}

