<?php

include 'conexion.php';
   //Alta de usuarios 
   $nombreCompleto = $_POST['nombreCompleto'];
   $email = $_POST['email'];
   $usuario = $_POST['usuario'];
   $password = $_POST['passwordRegistro'];
   $telefono = $_POST['telefono'];

   
   $insertUsuario = "INSERT INTO usuario(nombreCompleto, usuario, email, password, telefono) 
                     VALUES ('$nombreCompleto','$usuario', '$email', '$password', '$telefono')";
   
   $altaUsuario = mysqli_query($conexion, $insertUsuario);
   if ($altaUsuario){
      echo
      '
         <script>
         alert("usuario almacenado");
         window.location = "../inicioRegistro.php";
         </script>  
      ';
   } 
  
?>