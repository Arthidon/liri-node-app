# Liri-App

<p align="center">
<a href="https://drive.google.com/file/d/1Q5LVbj8_40JoHnlCVXvK5pIm6dfUJK6Y/view" target="blank">Video Demo</a>
</P>

## Overview

The goal here was to make a CLI app called Liri that would search Spotify for songs, Bands in Town for concerts and OMDB for movies. LIRI is a Language Interpretation and Recognition Interface and for this project the main form of interaction will be through Node.jsB

## Instructions

You will need to create your own .env file with your own API keys in order to test this project. I won't be retrieving keys from firebase this time.

## Commands
| App Command       | A Short Description                               |
| ----------------- |:-------------------------------------------------:|
| concert-this      | searches Bands in Town API for an artist's events |
| spotify-this-song | searches Spotify for info about a band or artist  |
| movie-this        | searches Spotify for info about a band or artist  |
| do-what-it-says   | runs the text in random.txt                       |


### concert-this
This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:

*  Name of the venue
*  Venue location
*  Date of the Event (use moment to format this as "MM/DD/YYYY")

### spotify-this-song

This will show the following information about the song in your terminal/bash window

*  Artist(s)
*  The song's name
*  A preview link of the song from Spotify
*  The album that the song is from

If no song is provided then your program will default to "The Sign" by Ace of Base.

### movie-this

This will output the following information to your terminal/bash window:

*  Title of the movie.
*  Year the movie came out.
*  IMDB Rating of the movie.
*  Rotten Tomatoes Rating of the movie.
*  Country where the movie was produced.
*  Language of the movie.
*  Plot of the movie.
*  Actors in the movie.

If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
do-what-it-says

LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

*  It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
*  Edit the text in random.txt to test out the feature for movie-this and concert-this.

## Required Tools

* HTML, CSS, JavaScript 
* Bootstrap 4.3.1 (https://getbootstrap.com/docs/4.3)
* jQuery Core 3.4.1 (https://code.jquery.com/)
* Node Package - Axios
* Node Package - DotEnv
* Node Package - Inquirer
* Node Package - Moment
* Node Package - API - Spotify API
* API - OMDB
* API - Bands In Town



## Prerequisites
Node.js installed



