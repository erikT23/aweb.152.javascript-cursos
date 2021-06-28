//console.log("hola mundo");

const materia = {
    nombre: "aplicaciones web",
    horario: "9:00 a 10:45 hrs."
};

console.log(materia.nombre);
materia.nombre = "base de datos";
console.log(materia.nombre);


var suma = (a, b) => {
    return a + b
};

console.log(suma(5, 8));

var unSaludo = (nombre = "jose", edad = "20") => {
    console.log(`hola soy ` + nombre + ` y mi edad es de ` + edad + ` años`)

    console.log(`hola soy ${nombre} y mi edad es de ${edad} años`)
};
unSaludo();
unSaludo("erik");
unSaludo("erik", 28);
console.log("**********************")

var num1 = 2;
var num2 = 32;
console.log(`la suma de ${num1}+${num2} es ${num1 + num2 + ' oh la la'}`)



var curso = {
    nombre: "",
    descripcion: "",
    docente: {
        nombre: "",
        cursos: 0
    }
};




function actualizar() {
    curso.nombre = document.getElementById("nombre").value;
    curso.descripcion = document.getElementById("descripcion").value
    curso.docente.nombre = document.getElementById("docente").value;
    curso.docente.cursos = document.getElementById("cursos").value
    console.log(curso);
    actualizarFicha();
}

function actualizarFicha (){
    document.getElementById("titulo").innerHTML = curso.nombre;
    document.getElementById("descrip").innerHTML = curso.descripcion;
    document.getElementById("nombre-docente").innerHTML = curso.docente.nombre;
    document.getElementById ("total").innerHTML = curso.docente.cursos;
}

var btncambiar = document.querySelector(".btn-cambiar");
console.log(btncambiar);
btncambiar.addEventListener("click",()=>{
    document.querySelector('.btn-success').innerHTML="update";
})



/*
const nombre = ("aplicaciones web");
    if(true){
        nombre = "base de datos"
        console.log(nombre);
}
*/