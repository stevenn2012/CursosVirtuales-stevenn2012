var correctas=0;
var respondidas=0;
var rtas= new Array();

//respuestas de cada prueba--
		//1 2 3 4 5 6 7 8 9 10	
rtas[0] =[2,1,0,3,1,2,3,2,0,3];
rtas[1] =[0,0,0,0,0,0,0,0,0,0];
rtas[2] =[1,1,1,1,1,1,1,1,1,1];
rtas[3] =[2,2,2,2,2,2,2,2,2,2];
rtas[4] =[3,3,3,3,3,3,3,3,3,3];
//--respuestas de cada prueba

function calificar(prueba,variable){
	var form = document.getElementById("formulario"+variable);
	var index=rtas[prueba-1][variable-1];

	if ( form.preg[index].checked ) {
		document.getElementById("image"+variable).src ="ui/img/ok.jpg";
		correctas++;
	} else{
		document.getElementById("image"+variable).src ="ui/img/wrong.jpg";
	}
	for (var i = 0; i < form.preg.length; i++) {
		form.preg[i].disabled=true;
	};
	document.getElementById("boton"+variable).disabled=true;
	rtas[prueba-1][variable-1]=-1;
	respondidas++;
	if(rtas[prueba-1].length == respondidas){
		ver(prueba);
	}
}

function ver(prueba){
	if(rtas[prueba-1].length == respondidas){
		var mensaje="";
		if(correctas==rtas[prueba-1].length){
			if (prueba < 5) {
				mensaje="\nPuede pasar al siguiente modulo";
			}else{
				mensaje="\nFelicidades ud Ha terminado el curso :D";
				location.href="finalizacion.html";
			}
			cambiar(prueba+1);
		}else{
			mensaje="\nRepase los temas del modulo "+prueba;
		}
		alert("Usted tuvo "+correctas+" respuestas correctas. "+mensaje);
	}else{
		var cont = confirm("Faltan "+(rtas[prueba-1].length-respondidas)+" Preguntas por responder desea continuar? ");
		if (cont) {
			for (var i=0; i<rtas[prueba-1].length;i++){
				if (rtas[prueba-1][i]>=0) {
					calificar(prueba,(i+1));
				};
			}
		}
	}
}

function cambiar(valor){
	var val = getCookie("progreso");
	var a = parseInt(val);
	var b = parseInt(valor);
	if(a<b){
		setCookie("progreso", b, 86400);
	}
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