import { clientServices } from '../services/client-service.js'


const API = 'http://localhost:3000/doctores'

const getData = (url) => {
    fetch(url)
      .then((reponse) => reponse.json())
      .then((json) => {
        fillData(json);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
      
};

const fillData = (data) => {
    let cardHtml = "";
    data.forEach(({nombre,apellido,cedula,especialidad,consultorio,email,id}) => {
      
      cardHtml += '<tr class="table-primary">';
      cardHtml += `<td class="align-middle">${nombre}</td>`;
      cardHtml += `<td class="align-middle">${apellido}</td>`;
      cardHtml += `<td class="align-middle">${cedula}</td>`;
      cardHtml += `<td class="align-middle">${especialidad}</td>`;
      cardHtml += `<td class="align-middle">${consultorio}</td>`;
      cardHtml += `<td class="align-middle">${email}</td>`;
      cardHtml += `<td><a href="./editar_doctores.html?id=${id}" class="btn btn-primary w-100 update-btn mt-2" id="${id}">Actualizar</a></td>`;
        cardHtml += `<td><button type="button" class="btn btn-danger w-100 delete-btn mt-2" id="${id}">Eliminar</button></td>`;
      cardHtml += '</tr>';
      
     
    });
    document.getElementById('table').innerHTML = cardHtml
    const updateButtons = table.querySelectorAll('.update-btn');
    const deleteButtons = table.querySelectorAll('.delete-btn');
    
    updateButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
          const id = btn.id;
          console.log(id);
          
        });
      });

      deleteButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
          const id = btn.id;
          clientServices.eliminarDoctores(id).then ( respuesta => {
            console.log(respuesta);
        }).catch ((error) => alert('Ocurrio ub error'))
          console.log('Clic en eliminar', id);
          
        });
      });  
  };

getData(API)

