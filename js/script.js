//Using Date Object, JavaScript will use the browser's time zone and display a date as a full text string
function display_date()
{
	document.getElementById('date').innerHTML = Date();
	setTimeout(display_date, 1000);
}
display_date();