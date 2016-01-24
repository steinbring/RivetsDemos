// This is needed for the content div
// Out of the box, Rivets.js can't do comparisons. This gives you a way.
rivets.formatters.eq = function (value, args) {
	return value === args;
};
// Default the initial tab to show
if(window.location.hash == '')
	items.selected = 'firstTab';
else
	items.selected = window.location.hash.substring(1);
// Bind the data to part of the DOM
var el = document.getElementById('items');
rivets.bind(el, {items: items});
// Watch for the hash to change
var hashHandler = function(){
	// What is the old state of the hash
    this.oldHash = window.location.hash;
    // Start the timer 
    this.Check;
    // 'This' is going to change so store it as 'That'
    var that = this;
    var detect = function(){
    	// compare the previous state of the hash with the current one
        if(that.oldHash!=window.location.hash){
        	// if the hash has changed, change the value of items.selected
            items.selected = window.location.hash.substring(1);
            // set the new value of the hash as the old one
            that.oldHash = window.location.hash;
        }
    };
    // Recheck once every 100 milliseconds
    this.Check = setInterval(detect, 100);
}
// Start listening for window.location.hash to change
var hashDetection = new hashHandler();