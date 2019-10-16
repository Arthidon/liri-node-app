require("dotenv").config();
console.log("liri");

//VARIABLES//
var keys = require("./keys");
var axios = require("axios");
var moment = require("moment");
var fs = require('fs');
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var input = process.argv[2];
var searchType = process.argv.slice(3).join(" ");
console.log(input);
console.log(searchType);


//User search input Function - determin input type - run command w/ input
function runSearch (input, searchType) {

        //Switch Function - determines input / request type//    
    switch(input) {
        //OMDB// 
        case "movie-this":
                console.log(searchType);
            movieThis(searchType);
            break;

        //Bands In Town//
        case "concert-this":
            concertThis(searchType);
            break;

        //Spotify//
        case "spotify-this-song":
            spotifyTrack(searchType);
            break;

        //Do Random from File//
        case "do-what-it-says":
            doRandom();
            break;
    }
}


//OMDB FUNCTION //
function movieThis(movie) {
    console.log("Movie-This function: " + movie)
    var movieQuery = movie || "Mr. Nobody"

    axios.get("https://www.omdbapi.com/?t=" + encodeURIComponent(movieQuery) + "&apikey=trilogy").then(function(response) {
        var divider = "\n--------------------------------------------------\n\n"
        var jsonData = response.data;



        var movieData = [
            "Title: " + jsonData.Title,
            "Year: " + jsonData.Year,
            "imdb Rating: " + jsonData.imdbRating,
            "Country: " + jsonData.Country,
            "Language: " + jsonData.Language,
            "Plot: " + jsonData.Plot,
            "Cast: " + jsonData.Actors,
        ].join("\n\n");

        fs.appendFile("log.txt", movieData + divider, function(err) {
            if(err) throw err;
            console.log(divider + movieData);
        });
        console.log(divider + movieData);
        });
}
//End OMDB FUNCTION //

//Bands In Town Function//
function concertThis(concert) {
    console.log("Concert-This function: " + concert)

    var concertQuery = concert || "'The Sign' by Ace of Base"

    axios.get("https://rest.bandsintown.com/artists/" + encodeURIComponent(concertQuery) + "/events?app_id=codingbootcamp").then(function(response) {
            var divider = "\n--------------------------------------------------\n\n"
            var jsonData = response.data;
          // If the axios was successful Then log the body from the site!


          var venueData = [
            "Venue: " + jsonData[0].venue.name,
            "City: " + jsonData[0].venue.city,
            "Country: " + jsonData[0].venue.country,
            "Date: " + jsonData[0].datetime,
        ].join("\n\n");

        fs.appendFile("log.txt", venueData + divider, function(err) {
            if(err) throw err;
            console.log(divider + venueData);
        });
        console.log(divider + venueData);
        
        });


}
// END Bands In Town Function//


// Spotify Function//
function spotifyTrack(track) {

    console.log(track);
    var songQuery = track || "'The Sign' by Ace of Base"
        spotify.search({type: 'track', query: songQuery }, function(err,response){
            if (err) {
                return console.log('Error occurred: ' +err);
            }

            for (var i = 0; i < 5; i++) {

            var divider = "\n--------------------------------------------------\n\n"
            var jsonData = response.tracks;
            //console.log(jsonData);

            var albumData = [
                "Artist(s): " + jsonData.items[i].artists[0].name,
                "Song Name: " + jsonData.items[i].name,
                "Preview: "  + jsonData.items[i].album.name,
                "Album: "  + jsonData.items[i].preview_url,
            ].join("\n\n");
            
            fs.appendFile("log.txt", albumData + divider, function(err) {
                if(err) throw err;
                console.log(divider + albumData);
            });

            console.log(divider + albumData + "\n");
         }   
        })

}
//END Spotify Function//

//Do Random From File//
function doRandom(){
    fs.readFile("random.txt", "utf8", function(err, response){
        if(err) throw err

        var responseArr = response.split(',');
        console.log(responseArr);
        console.log('');
        console.log('---MAIN--CONTENT---');
        console.log('');
       var input = responseArr[0];
       var searchType = responseArr[1];

       
       runSearch (input, searchType);

    })
}
//END Do Random//


//Run Program//
runSearch (input, searchType);