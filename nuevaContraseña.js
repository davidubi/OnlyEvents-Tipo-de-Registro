$(document).ready(function() {
    $('#changePasswordForm').submit(function(e) {
      e.preventDefault();
      let currentPassword = $('#currentPassword').val();
      let newPassword = $('#newPassword').val();
      let confirmPassword = $('#confirmPassword').val();
  
      // Aquí puedes implementar la lógica de verificación y cambio de contraseña
      // Por ejemplo, puedes usar AJAX para enviar los datos al servidor y manejar la respuesta
      // Si la contraseña actual coincide y la nueva contraseña coincide con la confirmación, 
      // puedes enviar una solicitud para cambiar la contraseña al servidor
      // y luego manejar la respuesta aquí
    });
  });
  