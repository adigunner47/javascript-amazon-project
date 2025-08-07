const request = new XMLHttpRequest() //XMHTTPRequest is a class, we're creating a reuqets object.

//request.send() method is asynchronous, that is the next line wont wait for the request to get the response from server.
//Hence adding a eventlisterner for 'load' would make sure to run the provided function once the response is loaded.
request.addEventListener('load', ()=>{
  console.log(request.response);
});

request.open('GET', 'https://supersimplebackend.dev'); //Specifying what type of request is and the request destination.
request.send();


//Also using a browser is same thing as doing a GET request.
