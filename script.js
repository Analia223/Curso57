let enfermera = "Asistencial";

function cambiar() {
    switch (enfermera) {
        case "Asistencial":
            enfermera= "Docente";
            break;
        case "Docente":
            enfermera= "Investigacion";
            break;
        case "Investigacion":
            enfermera="Administrativo";
            break;
        default:
            enfermera="Asistencial";
}

    const enfermImg = document.getElementById("enfermImg");
    const roles = document.getElementById("roles");

    enfermImg.src = `./imagen/${enfermera}.png`;
    enfermImg.alt = enfermera;
    roles.textContent = enfermera;
}

