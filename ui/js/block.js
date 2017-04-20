$(document).ready(function(){
	/*
	var valor = getCookie("progreso");
	if (valor != ""){
		var a = parseInt(valor);
		if (a>1) {
			alert("Sistemas de control por cookies. \nUd puede acceder al modulo "+valor+" o a los modulos inferiores a este.\n para desbloquear mas modulos responder el quiz del modulo "+valor);
		}else{
			alert("Sistemas de control por cookies. \nUd solo puede acceder al modulo "+1+".\n para desbloquear mas modulos responder el quiz del modulo "+1);
		}
		bloqueo(a);
	}else{
		alert("Sistemas de control por cookies. \nUd solo puede acceder al modulo "+1+".\n para desbloquear mas modulos responder el quiz del modulo "+1);
		//cambiar a 1
		setCookie("progreso", 5, 86400);
		bloqueo(1);
	}

	function setCookie(cname, cvalue, exdays) {
	    var d = new Date();
    	d.setTime(d.getTime() + (exdays*24*60*60*1000));
    	var expires = "expires="+d.toUTCString();
    	document.cookie = cname + "=" + cvalue + "; " + expires + "path=/";
	}	 

	function getCookie(cname) {
    	var name = cname + "=";
    	var ca = document.cookie.split(';');
    	for(var i=0; i<ca.length; i++) {
        	var c = ca[i];
        	while (c.charAt(0)==' ') c = c.substring(1);
        		if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    	}
    	return "";
	} 

	function bloqueo(valor){
		for (var i = (valor+1); i <= 5; i++) {
			document.getElementById(i+"").href = "temas.html";
		}
	}
	*/
});

