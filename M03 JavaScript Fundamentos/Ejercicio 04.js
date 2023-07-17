/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   // Retorna el valor de "num" elevado al cuadrado.
   // Tu código:
   return Math.pow(num,2);
}

function elevarAlCubo(num) {
   // Retorna el valor de "num" elevado al cubo.
   // Tu código:
   return Math.pow(num,3);
}

function elevar(num, exponent) {
   // Retorna el valor de "num" elevado al exponente "exponent".
   // Tu código:
   return Math.pow(num,exponent);
}

function redondearNumero(num) {
   // Redondea "num" al entero más próximo y retórnalo.
   // Tu código:
   return Math.abs(num) - Math.trunc(Math.abs(num)) < 0.5 ? num < 0 && num > -1 ? Math.trunc(num)*-1 : Math.trunc(num) : Math.round(num,0);
}

function redondearHaciaArriba(num) {
   // Redondea "num" hacia arriba y retórnalo.
   // Tu código:
   if (num < -1) {return Math.trunc(num);}
   else if (num > -1 && num <= 0 ) { return 0; }
   else if (num > 0 && num <= 1 ) { return 1; }
   else if (num - Math.trunc(num) == 0) { return num; }  //Sin decimales
   else if (num - Math.trunc(num) < 0.5) { return Math.trunc(num)+1; }
   else return Math.round(num); 
 }
 
function numeroRandom() {
   // Genera un número al azar entre 0 y 1 y retórnalo.
   // Tu código:
   return Math.random();
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
