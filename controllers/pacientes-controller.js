import { clientServices } from "../services/client-service.js";

const form = document.getElementById('pacienteForm')


form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const nombre = document.querySelector('[data-nombreP]').value
    const apellido = document.querySelector('[data-apellidoP]').value
    const cedula = document.querySelector('[data-cedulaP]').value
    const especialidad = document.getElementById('especialidadPaciente').value
    const edad = document.querySelector('[data-edadP]').value
    const telefono = document.querySelector('[data-telefonoP]').value
    

    clientServices.crearPaciente(nombre,apellido,cedula,especialidad,edad,telefono)
    .then((respuesta) => {
        console.log(respuesta);      

        window.location.href = '/src/Screens/registroP_completado.html'


    }).catch((err) => console.log(err))

    

    console.log((nombre, "--", apellido,"--",cedula,"--",especialidad,"--",edad,"--",telefono));
})

