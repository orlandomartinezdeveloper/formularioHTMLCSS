let envio = document.getElementById("submit");
var nombre = document.getElementById("nombres");
let apellido = document.getElementById("apellidos");
/*
envio.addEventListener("click", (event) => {
    event.preventDefault()
    if (nombre.value === "" || nombre.value.length<1) {
        document.getElementById('warnings').innerHTML = 'Escribe tu nombre';
        nombre.focus();
    } 
})
*/
function contarCaracteres(){
    if (nombre.value.length < 1) {
        alert('Campo vacío');
    }
}

  