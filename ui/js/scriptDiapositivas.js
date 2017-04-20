var miVariable = 1;
var ruta = "ui/img/Galerias/Galeria";

var pos= new Array();

pos[1] =[0,16,33,60,62,73,85,103,110,123,146,173,175,186,251,280,572,574,685,810,813,919,921,974];
pos[2] =[0,7,112,117,278,334,338,369,510,513,743];
pos[3] =[0,6,43,86,129,140,150,160];

function videoSincro(galeria,formato){
	var vid = document.getElementById("vid");
	vid.ontimeupdate = function() {myFunction(galeria,formato)};
}

function myFunction(galeria,formato) {
	for (var i = 0; i < pos[galeria].length; i++) {
		if (vid.currentTime>=pos[galeria][i]) {
			if (i==(pos[galeria].length-1)) {
				miVariable=(i+1);
				break;
			}else{
				if(vid.currentTime<pos[galeria][i+1]){
					miVariable=(i+1);
					break;
				}
			}
		}
	}
	cambio(galeria,formato,false);
}

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
	if(galeria>3){
		cambio(galeria,formato,false);	
	}else{
		cambio(galeria,formato,true);
	}
	
}

function cambio(galeria,formato,video){
	 document.getElementById("image").src = ruta+galeria+"/"+miVariable+ "."+formato;
	 if (video) {
	 	 document.getElementById("vid").currentTime=pos[galeria][miVariable-1];
	 }
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
