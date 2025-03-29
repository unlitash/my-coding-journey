let favoriteMovie ={
    title: "fight club",
    duration: "2h 19m",
    year: 1999 ,
    IMDBrank: 8.8
}

let movieInfo = function (movie){
    return info = `the movie ${movie.title} was released in ${movie.year}, ranked ${movie.IMDBrank} by IMDB`
}

let hey = movieInfo (favoriteMovie);
console.log(hey)