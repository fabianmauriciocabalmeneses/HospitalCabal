import { clientServices } from "../services/client-service.js";

const form = document.getElementById('doctorForm')


form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const nombre = document.querySelector('[data-nombre]').value
    const apellido = document.querySelector('[data-apellido]').value
    const cedula = document.querySelector('[data-cedula]').value
    const especialidad = document.getElementById('especialidadDoctor').value
    const consultorio = document.querySelector('[data-consultorio]').value
    const email = document.querySelector('[data-email]').value
    

    clientServices.crearDoctor(nombre,apellido,cedula,especialidad,consultorio,email)
    .then((respuesta) => {
        console.log(respuesta);      

        window.location.href = '/src/Screens/registro_completado.html'


    }).catch((err) => console.log(err))    

    console.log();(nombre, "--", apellido,"--",cedula,"--",especialidad,"--",consultorio,"--",email);
})

