$('Document').ready(renderHTML());


function renderHTML (){
$('#result').click(function(){
    var result = document.getElementById("result");



$.getJSON('http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?', function(sources_data) {
result.innerHTML ="<blockquote> "+sources_data.quoteText+" - <cite>"+sources_data.quoteAuthor+" </cite></blockquote>";
  });
});
}