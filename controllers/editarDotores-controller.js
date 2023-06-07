import { clientServices } from "../services/client-service.js";

const formulario = document.getElementById('doctorForm');

const obtenerInformacion = () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  if (id === null) {
    window.location.href = "/screens/error.html";
  }

    const nombre = document.querySelector('[data-nombre]')
    const apellido = document.querySelector('[data-apellido]')
    const cedula = document.querySelector('[data-cedula]')
    const especialidad = document.getElementById('especialidadDoctor')
    const consultorio = document.querySelector('[data-consultorio]')
    const email = document.querySelector('[data-email]')
    

  clientServices.detalleDoctor(id).then((doctores) => {
    nombre.value = doctores.nombre;
    apellido.value = doctores.apellido;
    cedula.value = doctores.cedula;
    especialidad.value = doctores.especialidad;
    consultorio.value = doctores.consultorio;
    email.value = doctores.email;
  });
};

obtenerInformacion();

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

    const nombre = document.querySelector('[data-nombre]').value
    const apellido = document.querySelector('[data-apellido]').value
    const cedula = document.querySelector('[data-cedula]').value
    const especialidad = document.getElementById('especialidadDoctor').value
    const consultorio = document.querySelector('[data-consultorio]').value
    const email = document.querySelector('[data-email]').value
  
    clientServices.actualizarDoctores(nombre, apellido, cedula, especialidad, consultorio, email, id).then(() => {
    window.location.href = "/src/Screens/edicion_concluida.html";
  });
});