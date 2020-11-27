function convertir_a_fahrenheit(digito){
	
	numero=/[0-9\.]$/
	
	if(!numero.exec(digito)){
		
		alert("Por favor ingrese el digito.");
		
	}else {
		
		resultado= (digito* 9 / 5) + 32;
		document.getElementById("total").innerHTML = resultado.toFixed(2) + "° Fahrenheit.";
		
	}

}

function convertir_a_Celsius(digito){
	
	numero=/[0-9\.]$/
	
	if(!numero.exec(digito)){
		
		alert("Por favor ingrese el digito.");
		
	}else {
		
		resultado= (digito - 32) * 5 / 9;
		document.getElementById("total").innerHTML = resultado.toFixed(2) + "° Celsius.";
		
	}

}

function convertir_a_K(digito){
	
	numero=/[0-9\.]$/
	
	if(!numero.exec(digito)){
	
		alert("Por favor ingrese el digito.");
		
	}else {

		resultado = (digito - 0) * 1 + 273.15;
		document.getElementById("total").innerHTML = resultado.toFixed(2) + " Kelvin.";
		
	}

}

function convertir_a_Kelvin1(digito){
	
	numero=/[0-9\.]$/
	
	if(!numero.exec(digito)){
	
		alert("Por favor ingrese el digito.");
		
	}else {
		
		
		resultado= (digito - 32) * 5 / 9 + 273.15;
		document.getElementById("total").innerHTML = resultado.toFixed(2) + " Kelvin.";
		
	}

}

function convertir_a_fahrenheit1(digito){
	
	numero=/[0-9\.]$/
	
	if(!numero.exec(digito)){
	
		alert("Por favor ingrese el digito.");
		
	}else {
		
		
		resultado= (digito - 273.15) * 9 / 5 + 32;
		document.getElementById("total").innerHTML = resultado.toFixed(2) + "° Fahrenheit.";
		
	}

}

function convertir_a_Celsius1(digito){
	
	numero=/[0-9\.]$/
	
	if(!numero.exec(digito)){
	
		alert("Por favor ingrese el digito.");
		
	}else {
		
		
		resultado= (digito - 0) * 1 - 273.15;
		document.getElementById("total").innerHTML = resultado.toFixed(2) + "° Celsius.";
		
	}

}