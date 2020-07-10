### Flatiorn School: Seattle 0420 Cohort
# MovieShelf: Module 4 Project

### Description: 
This project was designed to enable a user to creat vision boards in order to turn a dream in to reality. Through the tool a user can:

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
* React Bootstrap
* React Router

### Server Dependencies
Refer to the backend repo at ```link``` for instructions to set up the backend server and PostGreSQL

### Installation:


Assuming you already have all previously listed dependencies installed, download this entire git repository to your computer and place in your desired install directory. Via a terminal interface navigate to ```install_directory/frontend```. From this location execute ```npm install``` to install all other required node packages. 

### Running:
This project was designed as a proof of concept so it requires hosting locally. To start hosting the local server navigate to ```install_directory/backend``` via a terminal interface and then execute ```rails s```. Next, from your Google Chrome browser navigate to your the rails s is function solely as a backend API for local development. It's recrommended to run the back first on port 3000 then the front end on a different port. At this point the application will load and all functionality will be available.

### License
Copyright 2020 Colton Kaiser, Joshua Mclean, Justin Langlinais, Trevor Low

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.