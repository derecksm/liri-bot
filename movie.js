require('dotenv').config()
const axios = require('axios')


let movieSearch = (movieFinder) => {

  let movieSrch = _ => {

    if (movieFinder.join(' ').length < 1) {
      return 'Mr. Nobody'
    } else {
      return movieFinder.join(' ')
    }
  }
 
  axios.get(`http://www.omdbapi.com/?t=${movieSrch()}&apikey=f8894189`)
    .then(({ data: {Title, Year, imdbRating, Ratings, Country, Language, Plot, Actors} }) => {
      console.log(`
        Title: ${Title}
        Year: ${Year}
        imdb Rating: ${imdbRating}
        Rotten Tomatoes: ${Ratings[1].Value}
        Country: ${Country}
        Language: ${Language}
        Plot: ${Plot}
        Actors: ${Actors}
      `)
    })
    .catch(e => console.log(e))
}

module.exports = {movieSearch: movieSearch}