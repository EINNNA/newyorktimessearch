$(document).ready(function() {

    $(".search").on("click", function(e){
        e.preventDefault();

var searchWord = $("#search").val();
var recordNumber = parseInt($("#exampleFormControlSelect1").val());
var startYear = $("#startYear").val();
var endYear = $("#endYear").val();

var queryURL;

function buildURL(){
    queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" 
    + searchWord + "&api-key=oazeg0GfU32cSpc3tG0bBAugQH9u3dy9&limit=" 
    + recordNumber;
}

buildURL();

if((startYear != "") && (endYear != "")){
    queryURL = queryURL + "begin_date=" + startYear + "0101&end_date=" + endYear + "1231";


}else if (startYear != ""){
    queryURL = queryURL + "begin_date=" + startYear + "0101";

}else if(endYear != ""){
        queryURL = queryURL + "&end_date=" + endYear + "1231";
    }


$.ajax({
	url: queryURL,
	method: "GET"
}).then(function(response){
    $("#articleResults").empty();
    var result = response.response.docs;
    
    for (var i = 0; i < recordNumber; i++){
        

        var title = result[i].headline.main;
        var source = result[i].source;
        var url = result[i].web_url;

        var articleDiv = $("<div>");


        $(articleDiv).append("<a href='" + url + "' target='_blank'>" + title + "</a>");
        $(articleDiv).append("<p>" + source + "</p>");

        $("#articleResults").append(articleDiv);

    }
    



});





    })

});