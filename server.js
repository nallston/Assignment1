var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    port = 8080;

/* Global variables */


var requestHandler = function(request, response) {

    //console.log((request));
    //response.end('Server up');


    var parsedUrl = url.parse(request.url);

    console.log(parsedUrl.pathname);

    if(parsedUrl.path == '/listings'){
        response.end(JSON.stringify(listings));
    }
    else{
        response.statusCode= 404;
        response.end('Bad gateway error');
    };
    /*
      Your request handler should send listingData in the JSON format if a GET request
      is sent to the '/listings' path. Otherwise, it should send a 404 error.

      HINT: explore the request object and its properties
      http://stackoverflow.com/questions/17251553/nodejs-request-object-documentation
     */
};


var server = http.createServer(requestHandler);
var listingData, server, listings;

fs.readFile('listings.json', 'utf8', function(err, data) {

    listings = JSON.parse(data);


    server.listen(port, function(){
        console.log('Server is listening on: http://localhost:' + port);
    });


    // console.log(listings);
    //console.log('Server listening on: http://127.0.0.1:' + port);

    /*
      This callback function should save the data in the listingData variable,
      then start the server.
     */
});





