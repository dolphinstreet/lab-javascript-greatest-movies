
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?



function getAllDirectors(moviesArray) {
    const noDuplicates =[]
    const allDirectors = moviesArray.map(movie => movie.director).forEach(element => {
        if (!noDuplicates.includes(element)){
            noDuplicates.push(element);
        }
    });
    
    
    return noDuplicates;
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
    const dramaBySpielberg = moviesArray.filter(movie => 
     movie.director==="Steven Spielberg" && movie.genre.includes("Drama")
);
    return dramaBySpielberg.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const sumOfScores = moviesArray.reduce((accumulator,value) => accumulator+(value.score || 0)  , 0 )
    
    return Number((sumOfScores/moviesArray.length).toFixed(2)) || 0;

}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) {
    const dramasOnly = moviesArray.filter(movie => 
        movie.genre.includes("Drama"))
    
    return scoresAverage(dramasOnly);

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedMoviesArray = structuredClone(moviesArray);
    sortedMoviesArray.sort((a, b) => {
        if (a.year === b.year) {
            return  a.title.localeCompare(b.title);
        }
        return a.year - b.year ;
    });
 return sortedMoviesArray;
}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {
    const moviesByTitle = structuredClone(moviesArray);

    // why it doesn't work like this ? 
    //moviesByTitle.sort((a,b)=> a.title.localeCompare(b.title)).map((movie)=>movie.title); 
    
    // like this it's working 
    moviesByTitle.sort((a,b)=> a.title.localeCompare(b.title));
    const onlyTitles = moviesByTitle.map((movie)=>movie.title); 
    
    return onlyTitles.slice(0,20);
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(moviesArray) {
    const  moviesCopy = structuredClone(moviesArray);

    moviesCopy.map(movie => {
        const hourToMinutes = movie.duration.includes("h") ? parseFloat(movie.duration)*60 : 0
        const minToMinutes =  movie.duration.includes("min") ? parseFloat(movie.duration.slice(-5)) : 0 // 3 for the min and 2 for the digits 
        movie.duration= hourToMinutes+minToMinutes;
        return movie;
    
    })
    return moviesCopy;
}

console.log(turnHoursToMinutes(movies))





// BONUS - Iteration 8: Best yearly score average - Best yearly score average
//function bestYearAvg(moviesArray) {
//    const  moviesCopy = structuredClone(moviesArray);
//    const currentYearGroup = [];
//
//    currentYearGroup = moviesCopy.forEach(movie => {
//        
//        movie.year)
//    }
//
//}


//`The best year was ${result.year} with an average score of ${result.score}`