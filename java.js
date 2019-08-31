var searchWord = $("#search").val();
var recordNumber = $("#exampleFormControlSelect1").val();
var startYear = $("#startYear").val();
var endYear = $("#endYear").val();



var queryURL;

"https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" 
+ searchWord + "&api-key=oazeg0GfU32cSpc3tG0bBAugQH9u3dy9&limit=" 
+ recordNumber + "begin_date=" + startYear + "0101&end_date=" + endYear + "1231";


function buildURL(){
    queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" 
    + searchWord + "&api-key=oazeg0GfU32cSpc3tG0bBAugQH9u3dy9&limit=" 
    + recordNumber;
}

if((startYear != "") && (endYear != "")){
    queryURL = queryURL + "begin_date=" + startYear + "0101&end_date=" + endYear + "1231";


}else if (startYear != ""){
    queryURL = queryURL + "begin_date=" + startYear + "0101";

}else if(endYear != ""){
        queryURL = queryURL + "&end_date=" + endYear + "1231";
    }


$.ajax({
	url: queryURL,
	method: "method"
}).then(function(response){
    
    var result = response.docs;

    var title = result[0].headline.main;
    var source = result[0].source;
    var url = result[0].web_url;

    var articleDiv = $("<div>");

    $(articleDiv).append("<a href=" + url + "target='_blank'>" + title + "</a>");
    $(articleDiv).append("<p>" + source + "</p>");

    $("article").append(articleDiv);



});



$(document).ready(function() {

});