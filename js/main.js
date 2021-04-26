let L = +prompt("¿Cuantos litros a producido?");
let PG = +prompt("Ingrese el precio por galón producido");
let TG = parseFloat(L/3.785).toFixed(3);
let GA = parseFloat(PG * TG).toFixed(2);
alert(`La producción es galones es: ${TG} por lo que la ganancia es: ${GA}`);