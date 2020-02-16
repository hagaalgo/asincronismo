let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

let API = 'https://rickandmortyapi.com/api/episode';

function fetchData(url_api, callback){
    let xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function (event){
        if (xhttp.readyState === 4){

            if (xhttp.status === 200) {

                callback(null, JSON.parse(xhttp.responseText));
            }else{

                const error = new Error('Error ' + url_api);
                return callback( error, null )
            }
        }
    }
    xhttp.open('GET', url_api, true);
    xhttp.send();
}

fetchData(API, function (error1, data1) {
    if (error1) return console.error(error1);
    
    fetchData(data1.results[0].url, function(error2, data2){
        if(error2) return console.error(error2);
        fetchData(data2.episode, function(error3, data3){
            if(error3) return console.error(error2);
            console.log(data1);
            console.log(data2);
            console.log(data3)
        })
    })
})

