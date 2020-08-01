### Flatiorn School: Seattle 0420 Cohort
# MovieShelf: Module 4 Project

### Description: 
This project was designed to enable a user to create their own movie library by accessing a massive database of movies, and deleting/modifying information as they please. Key features are as follows:

* Basic Routing with React Router

![Basic Routing](README_assets/movie_shelf_routes.gif)

* Search Movies From OMDB

![Search Movies](README_assets/movie_shelf_library.gif)

* Add a Movie to Your Shelf and Delete it.

![Basic Shelf Functions](README_assets/movie_shelf_add_delete.gif)

* Edit a Movie's Poster

![Edit Form](README_assets/movie_shelf_edit_form.gif)



The backend of the application leverages Ruby on Rails API functionality to receive and send AJAX requests in a JSON formate. The interactive frontend is build on vanilla HTML and Javascript.

### Team:
* Colton Kaiser
* Justin Langlinais
* Joshua Mclean
* Trevor Low

### Dependencies:
* Node Package Manager (NPM)
* Developed on Google Chrome (80.0.3987.149)
* ReactJS
* React Bootstrap
* React Router

### Server Dependencies
Refer to the backend repo at ```https://github.com/ckaiser258/MovieShelfBE``` for instructions to set up the backend server and PostGreSQL

### Installation:

Download this entire git repository to your computer and place in your desired install directory. 

If you don't have the above dependencies:

First, if you do not currently have Node Package Manager (NPM), follow their guide here: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm.

Next, to install ReactJS, React Bootstrap, and React Router, in a terminal navigate to the directory in which you installed this repo, then execute `npm install react react-dom --save`. Then, run `npm install webpack webpack-dev-server webpack-cli --save`, `npm install react-bootstrap bootstrap`, and `npm install --save react-router-dom`

Finally, execute ```npm install``` to install all other required node packages.

### External API Setup - Frontend
The movie search functionality requires the setup of the Open Movie Database API with your own personal key. Visit ```http://www.omdbapi.com/``` to obtain a key.
Once you have your key, navigate to the root directory of the project (MOVIESHELF-FRONTEND) and create a ```.env``` file. Inside this file on the first line type: ```REACT_APP_API_KEY=yourapikey```. This file will automatically be added to the .gitignore.
In App.js on line 10, notice that the URL is being passed the api key via the environment variable, instead of it be hard-coded in. To maintain security, be sure to use the environment varible to refer to your key anywhere you use it.


### Running:
This project was designed as a proof of concept so it requires hosting locally. To start hosting the local server navigate to the directory in which this repo was installed. Then, via a terminal interface execute ```npm start```. If you started your rails server before this you will be prompted to enter Y/N to use an unoccupied port. Enter `y` and after a moment your browser should automatically load the application. At this point the application will load and all functionality should be available.

### License
Copyright 2020 Colton Kaiser, Joshua Mclean, Justin Langlinais, Trevor Low

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
