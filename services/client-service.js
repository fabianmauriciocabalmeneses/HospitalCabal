//CRUD - Métodos HTTP
//Create - POST
//Read - GET
//Update - PUT/PATCH
//Delete - DELETE



// Fetch API
const listaDoctores = () => {
    return fetch('http://localhost:3000/doctores').then(respuesta =>{
        return respuesta.json()
    })
}

const crearDoctor = (nombre,apellido,cedula,especialidad,consultorio,email) => {
    
    return fetch('http://localhost:3000/doctores', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({nombre,apellido,cedula,especialidad,consultorio,email,id:uuid.v4()})
    }).catch((error) =>{
      console.log(error);
  })
}

const crearPaciente = (nombre,apellido,cedula,especialidad,edad,telefono) => {
    
    return fetch('http://localhost:3000/pacientes', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({nombre,apellido,cedula,especialidad,edad,telefono,id:uuid.v4()})
    }).catch((error) =>{
        console.log(error);
    })
}

const eliminarPacientes = (id) => {
    return fetch(`http://localhost:3000/pacientes/${id}`, {
      method: "DELETE",
    });
  };

  const eliminarDoctores = (id) => {
    return fetch(`http://localhost:3000/doctores/${id}`, {
      method: "DELETE",
    });
  };

  const detalleDoctor = (id) => {
    return fetch(`http://localhost:3000/doctores/${id}`).then((respuesta) =>
      respuesta.json()
    );
  };
  const detallePaciente = (id) => {
    return fetch(`http://localhost:3000/pacientes/${id}`).then((respuesta) =>
      respuesta.json()
    );
  };
  
  const actualizarDoctores = (nombre,apellido,cedula,especialidad,consultorio,email,id) => {
    return fetch(`http://localhost:3000/doctores/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({nombre,apellido,cedula,especialidad,consultorio,email }),
    })
      .then((respuesta) => respuesta)
      .catch((err) => console.log(err));
  };

  const actualizarPacientes = (nombre,apellido,cedula,especialidad,edad,telefono,id) => {
    return fetch(`http://localhost:3000/pacientes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nombre,apellido,cedula,especialidad,edad,telefono }),
    })
      .then((respuesta) => respuesta)
      .catch((err) => console.log(err));
  };




export const clientServices =  {
    listaDoctores,
    crearDoctor,
    crearPaciente,
    eliminarPacientes,
    eliminarDoctores,
    actualizarDoctores,
    actualizarPacientes,
    detalleDoctor,
    detallePaciente
}