
// var nombre = prompt("Ingrese su nombre");
// var edad = prompt("Ingrese su edad");
// var resultado = nombre.length * edad;
// alert("Usted deberá jugarle a " + resultado.toString().substr(1,2));

let dias = ["Lunes","Martes","Miercoles","Jueves","Viernes", "Sábado", "Domingo"];
diasPares();
alertDia7();

let precio = ingresar();
let precioIva = calcularIva(precio);
mostrar(precioIva);

function diasPares() {
    for(i=0; i <= dias.length; i ++) {
        if(i % 2 == 0) {
            alert(" " + dias[i] + " es un dia Par" )
        }
    }
}
function alertDia7(){
    let i=0;
    while(dias.length <= i){
        
        i++;
        if(i + 1 == 7) {
            alert("Descanso");
        }
    }

}
function ingresar() {
    let precio = prompt("Ingrese su precio");
    return parseFloat(precio) ;
}
function calcularIva(precio) {
    precio = precio + ((precio * 21)/100 )
    return precio;
}
function mostrar(precioIva) {
    alert("El precio con Iva es " +precioIva )
}