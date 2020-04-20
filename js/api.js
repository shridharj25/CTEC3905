"use-strict";

apikey = 'f39f6480';
//for ( )

const form = document.getElementById('SearchBox');

form.addEventListener('submit', fetchResults);

function fetchResults(event) {
    event.preventDefault();

    const type = document.querySelector('#type').value;

    let Movie = document.getElementById('Movie');
    url = 'https://www.omdbapi.com/?apikey=f39f6480&s=' + type;
    //alert(type);

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const results = data.Search;

            //     for (var i in results) {
            //       console.log(results[i].Title);
            //   }
            //

            results.forEach(function (element) {
                console.log(element.Title);
                console.log(element.Poster);

                //console.log(results.Title);
               // Movie = document.getElementById('Movie').innerHTML = element.Title;

               const names = document.getElementById('Name');

               const list = document.createElement('div');

               names.appendChild(list);

               h6 = document.createElement('h6');
               h6.textContent = element.Title;

               p = document.createElement('img');
               p.innerTextHTML = element.Poster;

               list.appendChild(h6);
               list.appendChild(p);


               var myImage = new Image(40, 1000);
               myImage.src = element.Poster;
               document.body.appendChild(myImage);
               list.append(myImage);

                //qMovie = document.getElementById('Movie-q').innerHTML = data.quote.body;
            });

        })
    //.catch(() => console.log('Errorrr...'));


}
