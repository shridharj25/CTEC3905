"use-strict";

apikey = 'f39f6480';
//for ( )

const form = document.getElementById('searchForm');

form.addEventListener('submit', fetchResults);

function fetchResults(event) {
    event.preventDefault();

    const input = document.querySelector('#input').value;

    let outPut = document.getElementById('outPut');
    url = 'https://www.omdbapi.com/?apikey=f39f6480&s=' + input;
    //alert(input);

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
               // outPut = document.getElementById('outPut').innerHTML = element.Title;

               const names = document.getElementById('names');

               const list = document.createElement('div');

               names.appendChild(list);

               h6 = document.createElement('h6');
               h6.textContent = element.Title;

               p = document.createElement('img');
               p.innerTextHTML = element.Poster;

               list.appendChild(h6);
               list.appendChild(p);


               var myImage = new Image(10, 400);
               myImage.src = element.Poster;
               document.body.appendChild(myImage);
               list.append(myImage);

                //qoutPut = document.getElementById('outPut-q').innerHTML = data.quote.body;
            });



        })
    //.catch(() => console.log('Errorrr...'));


}
