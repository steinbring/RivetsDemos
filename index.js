// This is used to load demos.json locally
var loadJSON = function(callback) {   
    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'demos.json', true);
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
}


loadJSON(function(response) {
    // Parse JSON string into object
    items.demos = JSON.parse(response);
});

// Bind the data to part of the DOM
var el = document.getElementById('items');
rivets.bind(el, {items: items})