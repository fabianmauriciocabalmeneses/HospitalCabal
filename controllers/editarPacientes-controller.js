import { clientServices } from "../services/client-service.js";

const formulario = document.getElementById('pacienteForm');

const obtenerInformacion = () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  if (id === null) {
    window.location.href = "/screens/error.html";
  }

    const nombre = document.querySelector('[data-nombreP]')
    const apellido = document.querySelector('[data-apellidoP]')
    const cedula = document.querySelector('[data-cedulaP]')
    const especialidad = document.getElementById('especialidadPaciente')
    const edad = document.querySelector('[data-edadP]')
    const telefono = document.querySelector('[data-telefonoP]')
    
    

  clientServices.detallePaciente(id).then((pacientes) => {
    nombre.value = pacientes.nombre;
    apellido.value = pacientes.apellido;
    cedula.value = pacientes.cedula;
    especialidad.value = pacientes.especialidad;    
    edad.value = pacientes.edad;
    telefono.value = pacientes.telefono;
  });
};

obtenerInformacion();

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  const nombre = document.querySelector('[data-nombreP]').value
  const apellido = document.querySelector('[data-apellidoP]').value
  const cedula = document.querySelector('[data-cedulaP]').value
  const especialidad = document.getElementById('especialidadPaciente').value
  const edad = document.querySelector('[data-edadP]').value
  const telefono = document.querySelector('[data-telefonoP]').value
  
    clientServices.actualizarPacientes(nombre, apellido, cedula, especialidad, edad, telefono,id).then(() => {
    window.location.href = "/src/Screens/edicion-concluidaP.html";
  });
});