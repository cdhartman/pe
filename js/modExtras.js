function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

function KeyPressHappened(e)
{ alert('keypress');
  if (!e) e=window.event;
	alert('e.charCode: ' + e.charCode + 'e.keyCode: ' + e.keyCode);
}

function getURLParameter(sParam, defaultValue)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }
    }
	return defaultValue;
}

function imgPosterError(image,id){
    image.onerror = "";
    image.src = "images/movies/film-214x314.png";
    return true;
}

function getDateTime(){
    // Create two variable with the names of the months and days in an array
	var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]; 
	var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

	// Create a newDate() object
	var newDate = new Date();
	// Extract the current date from Date object
	newDate.setDate(newDate.getDate());
	// Output the day, date, month and year    
	$('#Date').html(dayNames[newDate.getDay()] + '<br />' + monthNames[newDate.getMonth()] + " " + newDate.getDate() + ', ' + newDate.getFullYear());

	setInterval( function() {
		// Create a newDate() object and extract the minutes of the current time on the visitor's
		var minutes = new Date().getMinutes();
		// Add a leading zero to the minutes value
		$("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
		},1000);
		
	setInterval( function() {
		// Create a newDate() object and extract the hours of the current time on the visitor's
		var hours = new Date().getHours();
		// Add a leading zero to the hours value
		$("#ampm").html(hours < 12 ? " AM" : " PM" );
		if (hours > 12) {hours = hours - 12;}
		$("#hours").html(hours);
	}, 1100);
}

function initializeCarousel (id) {
	$("#"+ + id).carousel({
		 interval : false,
		 pause: false
	 });
}

function activeItem(category,row,item)
{
	window.sessionStorage.setItem('category',category);
	window.sessionStorage.setItem('row',row);
	window.sessionStorage.setItem('item',item);
}