function convertir_a_milimetro(metros){
	
	numero=/[0-9\.]$/
	
	if(!numero.exec(metros)){
		
		alert("Por favor, Ingrese el número en el campo correspondiente.");
		
	}else {
		
		mm=1000;
		resultado= metros*mm;
		document.getElementById("total").innerHTML = resultado.toFixed(2) + " milimetros.";
		
	}

}
function convertir_a_centimetro(metros){
	
	numero=/[0-9\.]$/
	
	if(!numero.exec(metros)){
		
		alert("Por favor, Ingrese el número en el campo correspondiente.");
		
	}else {
		
		cm=100;
		resultado= metros*cm;
		document.getElementById("total").innerHTML = resultado.toFixed(2) + " centimetros.";
		
	}

}

function convertir_a_kilometro(metros){
	
	numero=/[0-9\.]$/
	
	if(!numero.exec(metros)){
		
		alert("Por favor, Ingrese el número en el campo correspondiente.");
		
	}else {
		
		km=1000;
		resultado= metros/km;
		document.getElementById("total").innerHTML = resultado.toFixed(3) + " kilometros.";
		
	}

}

function convertir_a_pie(metros){
	
	numero=/[0-9\.]$/
	
	if(!numero.exec(metros)){
		
		alert("Por favor, Ingrese el número en el campo correspondiente.");
		
	}else {
		
		ft=3.281;
		resultado= metros*ft;
		document.getElementById("total").innerHTML = resultado.toFixed(3) + " pies.";
		
	}

}

function convertir_a_pulgada(metros){
	
	numero=/[0-9\.]$/
	
	if(!numero.exec(metros)){
		
		alert("Por favor, Ingrese el número en el campo correspondiente.");
		
	}else {
		
		pg=39.37;
		resultado= metros*pg;
		document.getElementById("total").innerHTML = resultado.toFixed(2) + " pulgadas.";
		
	}

}

function convertir_a_yarda(metros){
	
	numero=/[0-9\.]$/
	
	if(!numero.exec(metros)){
		
		alert("Por favor, Ingrese el número en el campo correspondiente.");
		
	}else {
		
		yd=1.094;
		resultado= metros*yd;
		document.getElementById("total").innerHTML = resultado.toFixed(3) + " yardas.";
		
	}

}