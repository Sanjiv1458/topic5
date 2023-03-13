$('#navbar').load('navbar.html');
const API_URL = 'http://localhost:5000/api';
//const devices = JSON.parse(localStorage.getItem('devices')) || [];
//const response = $.get('http://localhost:3001/devices');

/*
devices.forEach(function (device) {
  $('#devices tbody').append(`
      <tr>
        <td>${device.user}</td>
        <td>${device.name}</td>
      </tr>`
  );
});
/*
$.get('http://localhost:3001/devices')
  .then(response => {
    response.forEach(device => {
      $('#devices tbody').append(`
      <tr>
        <td>${device.user}</td>
        <td>${device.name}</td>
      </tr>`
      );
    });
  })
  .catch(error => {
    console.error(`Error: ${error}`);
  });
*/

$.get(`${API_URL}/devices`)
  .then(response => {
    response.forEach(device => {
      $('#devices tbody').append(`
      <tr>
        <td>${device.user}</td>
        <td>${device.name}</td>
      </tr>`
      );
    });
  })
  .catch(error => {
    console.error(`Error: ${error}`);
  });

/*
$('#add-device').on('click', function () {
  const user = $('#user').val();
  const name = $('#name').val();
  devices.push({ user, name });
  localStorage.setItem('devices', JSON.stringify(devices));
  location.href = 'device-list.html';
});
*/
/*
$('#add-device').on('click', () => {
  const name = $('#name').val();
  const user = $('#user').val();
  const sensorData = [];

  const body = {
    name,
    user,
    sensorData
  };

  $.post('http://localhost:3001/devices', body)
    .then(response => {
      location.href = 'device-list.html';
    })
    .catch(error => {
      console.error(`Error: ${error}`);
    });
});
*/

$('#add-device').on('click', () => {
  const name = $('#name').val();
  const user = $('#user').val();
  const sensorData = [];

  const body = {
    name,
    user,
    sensorData
  };

  $.post(`${API_URL}/devices`, body)
    .then(response => {
      location.href = 'device-list.html';
    })
    .catch(error => {
      console.error(`Error: ${error}`);
    });
});

/*

$('#delete-device').on('click', () => {
  const id = $('#id').val() - 1;

  $.delete('http://localhost:3001/devices', id)
    .then(response => {
      location.href = 'device-list.html';
    })
    .catch(error => {
      console.error(`Error: ${error}`);
    });
});
*/

$('#delete-device').on('click', () => {
  const Uname = $('#Uname').val();

  $.delete(`${API_URL}/devices`, Uname)
    .then(response => {
      location.href = 'device-list.html';
    })
    .catch(error => {
      console.error(`Error: ${error}`);
    });
});
/*
$('#reset-data').on('click', function () {
  localStorage.clear();
  location.href = 'device-list.html';
});


$('#reset-data').on('click', function () {

});
*/