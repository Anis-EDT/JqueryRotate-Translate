
//SLIDE UP
$("#slide").click(function(){
	$("#love").slideUp();
})
//SLIDE DOWN
$("#slideDown").click(function(){
	$("#love").slideDown();
})
//SLIDE TOGGLE WHEN DOUBLE CLICK
$("#slideT").dblclick(function(){
	$("#love").slideToggle("slow","swing");
})

//this executes when the page is done loading
$(document).ready(function(){
	x =0 ;
	//the event keypress is executed when we click on any function
	//the selector $(document) means that if we click anywhere inside the document
 	//the parameter "event" will tell 
 $(document).keypress(function(event){
 	//event.key : shows the button we clicked on
 	console.log(event.key);

 	if(event.key =="q"){
 		 	x +=10;
}
if(event.key =="d")
{x -=10}
//translates the picture by X pixels
$('#love').css("transform","translate("+x+"px,"+x+"px)")
 })
})

// rotation
		var x = 0 ;
		// adds one degree each 16 MilliSecond
setInterval(function(){
			$("#elyes").slideToggle("slow","swing");
     x++ ;
	$("#love").rotate(x);
 						 }, 16);

setInterval(function(){
     x++ ;
	$("#love2").rotate(-x);
 						 }, 16);







