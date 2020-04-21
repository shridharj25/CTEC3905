"use-strict";


// // this is for the hamburger
menuButton.addEventListener("click", toggleMenu);

function toggleMenu () {
  console.log("clicked menu");
  if  (myNav.classList.contains("show")){
    myNav.classList.remove("show");
  } else {
      myNav.classList.add("show");
  }
}

apikey = 'f39f6480'; // API key for the movies database


const form = document.getElementById('SearchBox'); //Getting the id of the searchbox
form.addEventListener('submit', getsearchquery); //Adding a eventlistener to the submit button, and setting a variable for the fucntion (next code)

function getsearchquery(event) { // starting of function, running the search query of inputted movie
    event.preventDefault();// method canceling the event if required when submitting the form.
    const type = document.querySelector('#type').value; // Assigning the id to the searchbox
    let Movie = document.getElementById('Movie'); // getting the id tag of movie from the html
    apilink = 'https://www.omdbapi.com/?apikey=f39f6480&s=' + type; // the api link followed by the movie search in order to present it

    fetch(apilink)
        .then(response => response.json())
        .then(data => {
            const results = data.Search; // setting  variable for the results of the search from the searchbox

            results.forEach(function (element) { // fucntion for the results
                console.log(element.Poster); // showing the link of the movies poster in the console log
                console.log(element.Title); // showing the Title of the movies  in the console log
               const names = document.getElementById('Name'); // getitng the name ID from the html
               const list = document.createElement('div'); // getting the div id from the html
               names.appendChild(list); // presenting the results in a list format
               h1 = document.createElement('h1'); // creating the elemet of the title to be displayed
               h1.textContent = element.Title; // Title displayed in the h1 tag
               p = document.createElement('img');//Using the img tag from html
               p.innerTextHTML = element.Poster; // displaying image
               list.appendChild(h1); // listing the names of the search query movies
               list.appendChild(p); //listing the images of the search query
               //Setting the height and width of the image that is optained from the search from the database
               var myImage = new Image(40, 1000);
               myImage.src = element.Poster;
               document.body.appendChild(myImage);
               list.append(myImage);
            });
        })
}
