/* Función que recibe un dividendo y un divisor con o sin decimales y sin restricción de tamaño en el dividendo
*  y devuelve el resto
*  @param {string} dividendo: El dividendo entero, con o sin decimales. Los decimales se separan con '.'
*  @param {string} divisor: El divisor entero, con o sin decimales. Los decimales se separan con '.'
*  @return {number} : El resto resultante de dividir <dividendo> entre <divisor>
*/
function moduloDecimal(dividendo,divisor) {
	var decimalesDividendo, decimalesDivisor, exponente;

	//Guardamos en <decimalesDividendo> el número de decimales que contiene <dividendo>
	if ( dividendo.indexOf('.') > -1) {
		decimalesDividendo = dividendo.length - (dividendo.indexOf('.') +1);
	}
	else {
		decimalesDividendo = 0;
	}

	//Guardamos en <decimalesDivisor> el número de decimales que contiene <divisor>
	if ( divisor.indexOf('.') > -1) {
		decimalesDivisor = divisor.length - (divisor.indexOf('.') +1);
	}
	else {
		decimalesDivisor = 0;
	}


	//Comparamos el número de decimales que tiene <dividendo> con el que tiene <divisor> y guardaremos el número máximo en <exponente>
	//Así sabremos que tenemos que multiplicar tanto <dividendo> como <divisor> por 10 elevado a <exponente> para hacer que ambos sean
	//números entereos
	if ( decimalesDividendo > decimalesDivisor) {
		exponente = decimalesDividendo;
	}
	else {
		exponente = decimalesDivisor;
	}

	//Convertimos <dividendo> y <divisor> en números enteros, multiplicando ambos por la misma potencia de 10
	//Como los números pueden ser enormes, haremos la multiplicación con strings, ya que si usáramos enteros no funcionaría bien
	
	//Quitamos el '.' decimal de dividendo y de divisor
	dividendo = dividendo.replace('.','');
	divisor = divisor.replace('.','');

	for (i=0; i < (decimalesDividendo - decimalesDivisor) ; i++) {
		divisor = divisor.concat('0');
	}

	for (i=0; i < (decimalesDivisor - decimalesDividendo) ; i++) {
		dividendo = dividendo.concat('0');				
	}

	//Calculamos el módulo y el resultado lo dividimos por 10 elevado a exponente, que es el mismo número por el que hemos multiplicado <dividendo>
	// y <divisor> que hemos pasado por parámetro a la función "divisorEntero"
	return moduloEntero(dividendo,divisor)/Math.pow(10,exponente);
}

/* Función que recibe un dividendo y un divisor sin decimales devuelve el módulo
*  @param {string} dividendo: El dividendo entero, sin decimales
*  @param {string} divisor: El divisor entero, sin decimales
*  @return {int} : El resto resultante de dividir <dividendo> entre <divisor>
*/
function moduloEntero(dividendo,divisor) {
    var bloque;

    while (dividendo.length > divisor.length){
        bloque = dividendo.slice(0, 9);
        dividendo = parseInt(bloque) % divisor + dividendo.slice(bloque.length);
    }
    return parseInt(dividendo) % divisor;
}
