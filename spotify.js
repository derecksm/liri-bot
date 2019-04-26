require('dotenv').config()
const keys = require('./keys.js')
var Spotify = require('node-spotify-api');
const spotify = new Spotify(keys.spotify);
const fs = require('fs')

function spotifySearch (songInput) {
let song = songInput

    spotify.search({ type: 'track', query: song, limit: 1 }, function (err, data) {
      if (err) {
        return console.log('Error occurred: ' + err + '. Please try a new search');
      } else {

      let artistName = data.tracks.items[0].album.artists[0].name
      let songsName = data.tracks.items[0].name
      let songLink = data.tracks.items[0].external_urls.spotify
      let songAlbum = data.tracks.items[0].album.name
      console.log(`
        Artist Name: ${artistName}
        Song's Name: ${songsName}
        Song's Link: ${songLink}
        Album Name: ${songAlbum}
      `)
      }
    })
}
module.exports = {spotifySearch: spotifySearch}