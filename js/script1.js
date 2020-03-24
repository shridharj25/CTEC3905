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




}
