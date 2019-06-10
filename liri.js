var fs = require("fs");
var axios = require("axios");
var keys = require("./keys");
var moment  = require ("moment");

var Spotify = require("node-spotify-api");

var spotify = new Spotify(keys.spotify);
require('dotenv').config()

var searchTerm= process.argv.slice(3).join(" ");
var divider = "\n-----------\n\n";

// function for OMDB
function movieThis(){
    console.log(`Running movie this for: ${searchTerm}`);
}
// build omdb url; use axios to fecth data from omdb/ display via consol.log
// function for concert
function concertThis(){
    console.log(`Running concert this for: ${searchTerm}`);
// moment to format the date, build bandsintown url
// function for song
function songThis(){
    console.log(`Running this song for: ${searchTerm}`);
}
// function for readfile

// read the random.txt
function doWhatItSays(){
    console.log(`Running do what it says: ${searchTerm}`);

    fs.readFile("random.txt", "UTF8", function(err,data){
        if(err) throw err;
        var fileData= data.split(",")
        console.log(data)

        command= fileData[0];
        searchTerm = data[1];
        decider();
    })
}
// figure out what command and search term is in the file
// run the appropriate function
// function to decide what function to run
function decider(){
    switch(command) {
        case "movie-this":
            movieThis();
            break
        case "concert-this":
            concertThis();
            break
        case "spotify-this":
            spotifyThisSong();
            break
        case "do-what-it-says":
            doWhatItSays();
            break
        default:
            console.log("invald command")
    }
}
decider();

// OMDB
// Title of the movie.
// * Year the movie came out.
// * IMDB Rating of the movie.
// * Rotten Tomatoes Rating of the movie.
// * Country where the movie was produced.
// * Language of the movie.
// * Plot of the movie.
// * Actors in the movie.
