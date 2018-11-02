var today=new Date();
var hourNow = today.getHours();
var minNow = today.getMinutes();
var secondsNow = today.getSeconds();
var greeting;

if(hourNow > 6 && hourNow < 12 ){
	greeting = "Good Morning!";
}
else if(hourNow > 12 && hourNow < 18){
	greeting = "Good Afternoon!";
}
else if(hourNow > 18 && hourNow < 24){
	greeting = "Good Evening!"
}
else{
	greeting = "Welcome!";
}

if(minNow<10){
	minNow = '0' + minNow;
}else{
	minNow=minNow;
}

document.write('<h2>' + greeting + '</h2>');
document.write('<h2> Current time is: ' + hourNow + ':' +  minNow + '</h2>' );