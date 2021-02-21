
// var nombre = prompt("Ingrese su nombre");
// var edad = prompt("Ingrese su edad");
// var resultado = nombre.length * edad;
// alert("Usted deberá jugarle a " + resultado.toString().substr(1,2));

let dias = ["Lunes","Martes","Miercoles","Jueves","Viernes", "Sábado", "Domingo"];
diasPares();


function diasPares() {
    for(i=0; i <= dias.length; i ++) {
        if(i % 2 == 0) {
            alert(" " + dias[i] + " es un dia Par" )
        }
    }
}