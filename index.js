$(document).ready(function() {

/// Get & Store Date
var today = new Date ();
today = today.getFullYear();
// today = today.getMinutes();

/// Check Date
    
console.log(today);

/// Display Date
$('.year').text(today);
console.log(today)});