var searchTerm;
var url = "http://api.brewerydb.com/v2/" + searchTerm + "/?key=7944356e321284ae7dfbe4dd72c07b0f"



    $.ajax(url)
        .then(function (results) {

            var result = results.data;
