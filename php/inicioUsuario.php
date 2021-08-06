<?php

include 'conexion.php';

   $correo = $_POST['email'];
   $contrasena = $_POST['contrasena'];
   
   $verificarUsuario = "SELECT correo, contrasena FROM usuarios";
   
   $verificarUsuario = mysqli_query($conexion, $verificarUsuario);

   if ($verificarUsuario !== ""){

      echo '
         <script>
         alert("usuario CORRECTO");
         window.location = "../formsloginRegis.php";
         </script>
          
      ';
   } else {echo '
      <script>
      alert("usuario incorrecto");
      window.location = "../formsloginRegis.php";
      </script>
       
   ';
   
   }

?>