var miVariable = 1;
var ruta = "ui/img/Galerias/Galeria";

function pasarDiapositiva(galeria,cantidad,dir,formato,circular){
	if (dir) {
		//necxt
		if(miVariable<cantidad){
			miVariable++;
		}else if(circular){
			miVariable=1;
		}
	} else{
		//back
		if(miVariable>1){
			miVariable--;
		}else if(circular){
			miVariable=cantidad;
		}
	}
	cambio(galeria,formato);
}

function cambio(galeria,formato){
	 document.getElementById("image").src = ruta+galeria+"/"+miVariable+ "."+formato;
}

var ruta2="ui/img/menu/";

function cambiarImg(activo,nombre,perm){
	if (perm) {
		var act=0;
		if (activo) {
			act=0;
		} else{
			act=1;
		}
		document.getElementById(nombre).src = ruta2+nombre+act+".png";
	};
}
