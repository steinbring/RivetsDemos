// This is needed for the content div
// Out of the box, Rivets.js can't do comparisons. This gives you a way.
rivets.formatters.eq = function (value, args) {
	return value === args;
};
// This is needed for the navigation links
var toggle = function(tab){
	items.selected = tab;
};
// Default the first tab to show
items.selected = 'firstTab';
// Bind the data to part of the DOM
var el = document.getElementById('items');
rivets.bind(el, {items: items});