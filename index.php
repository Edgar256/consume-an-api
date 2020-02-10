<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./css/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <script src="./js/app.js"></script>
    <script src="./js/loader.js"></script>  
    <script src="./js/search.js"></script>  
    
    <title>Learning APIs</title>
</head>
<body>
    <div class="container container-flex">
        <div class="row">
            <h2>Demo Api being consumed from <a href="https://ghibliapi.herokuapp.com/films">https://ghibliapi.herokuapp.com/films</a></h2> 
            <p class="row pull-right">
                <a href="https://edgar256.github.io/" target="_blank">Created by Edgar Tinkamanyire</a>
            </p>
        </div>
        <div class="row">
            <div>
                <span>
                    <form class="form-inline md-form form-sm active-cyan-2 mt-2 ps" >
                        <input class="form-control form-control mr-3 w-75" type="text" placeholder="Search Movies"
                            aria-label="Search" id="myInput">
                        <i class="fa fa-search" aria-hidden="true"></i>
                    </form>
                </span>
            </div>
        </div>
        
        <div id="root"></div>
        <div class="loader-wrapper">
            <span class="loader"><span class="loader-inner"></span></span>
        </div>
    </div> 
</body>
</html>