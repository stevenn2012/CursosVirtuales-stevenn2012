function play(){
	document.getElementById("vid").play();
	var vid = document.getElementById("vid");
	vid.ontimeupdate = function() {myFunction()};
}

function pause(){
	document.getElementById("vid").pause();
}

function start(variable){
	document.getElementById("vid").currentTime=variable;
}


function myFunction() {
	document.getElementById("demo").innerHTML = vid.currentTime;
}

function faster(){
	document.getElementById("vid").playbackRate=document.getElementById("vid").playbackRate+1;
}

function slower(){
	document.getElementById("vid").playbackRate=document.getElementById("vid").playbackRate*0.5;
}

function normal(){
	document.getElementById("vid").playbackRate=1;
}