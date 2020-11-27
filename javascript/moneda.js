function convertir_a_dolares(pesos){
	
	numero=/[0-9\.]$/
	
	if(!numero.exec(pesos)){
		
		alert("Por favor, Ingrese el número en el campo correspondiente.");
		
	}else {
		
		dolar=20.01;
		resultado= pesos/dolar;
		document.getElementById("total").innerHTML = resultado.toFixed(2) + " dolar(es)";
		
	}

}

function convertir_a_yenes(pesos){
	
	numero=/[0-9\.]$/
	
	if(!numero.exec(pesos)){
		
		alert("Por favor, Ingrese el número en el campo correspondiente.");
		
	}else {
		
		yen=5.22;
		resultado= pesos*yen;
		document.getElementById("total").innerHTML = resultado.toFixed(2) + " yen(es)	";
		
	}

}

function convertir_a_soles(pesos){
	
	numero=/[0-9\.]$/
	
	if(!numero.exec(pesos)){
		
		alert("Por favor, Ingrese el número en el campo correspondiente.");
		
	}else {
		
		sol=0.18;
		resultado= sol*pesos;
		document.getElementById("total").innerHTML = resultado.toFixed(2) + " sol(es)";
		
	}

}

function convertir_a_euros(pesos){
	
	numero=/[0-9\.]$/
	
	if(!numero.exec(pesos)){
		
		alert("Por favor, Ingrese el número en el campo correspondiente.");
		
	}else {
		
		euro=0.042;
		resultado= euro*pesos;
		document.getElementById("total").innerHTML = resultado.toFixed(3) + " euro(s)";
		
	}

}