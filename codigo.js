let envio = document.getElementById("submit");
let nombre = document.getElementById("nombres");

envio.addEventListener("click", (event) => {
    event.preventDefault()
    if (nombre.value === "") {
        document.getElementById('warnings').innerHTML = 'Escribe tu nombre';
        nombre.focus();
    } 
})

