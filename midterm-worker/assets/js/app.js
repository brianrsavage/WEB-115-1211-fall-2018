console.log('app.js file loaded');

$(document).ready(function(){
  console.log('page is loaded');

  $('body').append('<header> <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark"> <a class="navbar-brand" href="#">Carousel</a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button><div class="collapse navbar-collapse" id="navbarCollapse"><ul class="navbar-nav mr-auto"><li class="nav-item active"> <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a></li><li class="nav-item"> <a class="nav-link" href="#">Link</a></li><li class="nav-item"> <a class="nav-link disabled" href="#">Disabled</a></li></ul><form class="form-inline mt-2 mt-md-0"> <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"> <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button></form></div> </nav> </header>')
  console.log('header added to page body');

  $('body').append('<main role="main"></main>');
  console.log('main added to page body');

  $('body').append('<div id="myCarousel" class="carousel slide" data-ride="carousel"></div>');
  $('#myCarousel').append('<ol class="carousel-indicators"></ol>');
  $('#myCarousel').append('<div class="carousel-inner"></div>');
  $('#myCarousel').append('<a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Previous</span> </a> <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Next</span> </a>');

  $('.carousel-indicators').append('<li data-target="#myCarousel" data-slide-to="0" class="active"></li>');

  $('.carousel-inner').append('<div class="carousel-item active"> <img class="first-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="First slide"><div class="container"><div class="carousel-caption text-left"><h1>Example headline.</h1><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p><p><a class="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p></div></div></div>');

  $('.carousel-indicators').append('<li data-target="#myCarousel" data-slide-to="1"></li>');

  $('.carousel-inner').append('<div class="carousel-item"> <img class="second-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Second slide"><div class="container"><div class="carousel-caption"><h1>Another example headline.</h1><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p><p><a class="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p></div></div></div>');

  $('.carousel-indicators').append('<li data-target="#myCarousel" data-slide-to="2"></li>');

  $('.carousel-inner').append('<div class="carousel-item"> <img class="third-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Third slide"><div class="container"><div class="carousel-caption text-right"><h1>One more for good measure.</h1><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p><p><a class="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p></div></div></div>');
});
