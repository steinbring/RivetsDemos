var request = new XMLHttpRequest();
// Get the current weather forcast for Milwaukee, WI by feeding 'woeid = 12780915' into YQL
request.open('GET', 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D%0912780915&format=json&callback=', false);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    // Set items to equal the query results
    items = JSON.parse(request.responseText).query.results.channel;
    // put items.item.condition into items.condition
    items.condition = items.item.condition;
  } else {
    // We reached our target server, but it returned an error
  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();

// Bind the data to part of the DOM
var el = document.getElementById('items');
rivets.bind(el, {items: items});