//new
var cinema = {
    name : "Cavea",
    languages : "English",
    premiere : {
        name : "Batman",
        rating : 8.8,
        year : 2021
    } 
};

console.log(cinema.premiere.name)  // წერტრილის ნოტაცია
console.log(cinema["premiere"]["rating"]) // მივმართავთ სინტაქსის
console.log(cinema.premiere["year"]) //შერეული სახით


//
// var cinema = {
//     name : "Cavea",
//     languages : ["Georgian", "English"],
//     premiere : {
//         name : "Batman",
//         rating : 8.8
//     },
//     movies : [
//         {name: "Joker", rating: 9.0 },
//         {name: "Platform", rating: 8.7 },
//         {name: "Avatar", rating: 8.9 }
        
//     ] 
// }

// document.write("<h3>Movies</h3>")
// for (var i = 0; i < cinema.movies.length; i++) {
//     document.write(cinema.movies[i].name + "</br>")
// }

// document.write("<h3>Languages</h3>")
// for (var i = 0; i < cinema.languages.length; i++) {
//     document.write(cinema.languages[i] + "</br>")
// }




