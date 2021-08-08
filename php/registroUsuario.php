<?php
include 'conexion.php';

   //Alta de usuarios 
   $nombreCompleto = $_POST['nombreCompleto'];
   $correo = $_POST['email'];
   $usuario = $_POST['usuario'];
   $password = password_hash($_POST['passwordRegistro'],PASSWORD_DEFAULT,['cost'=> 10]) ;
   $telefono = $_POST['telefono'];
   //verificar si el correo y el telefono ya existen 
   $verificarCorreo = mysqli_query($conexion, "SELECT * FROM usuario WHERE correo = '$correo'");
   $verificarTelefono = mysqli_query($conexion, "SELECT * FROM usuario WHERE telefono = '$telefono'");
   $verificarUsuario = mysqli_query($conexion, "SELECT * FROM usuario WHERE usuario = '$usuario'");
   //Insertar usuario
   $insertUsuario = "INSERT INTO usuario(nombreCompleto, usuario, correo, password, telefono) 
                     VALUES ('$nombreCompleto','$usuario', '$correo', '$password', '$telefono')";
   if (mysqli_num_rows($verificarUsuario) == 0) {
      if (mysqli_num_rows($verificarCorreo)== 0) {
         if (mysqli_num_rows($verificarTelefono)== 0) {
            $altaUsuario = mysqli_query($conexion, $insertUsuario);

            if ($altaUsuario){
               echo $altaUsuario ;
            }else{
               echo $altaUsuario;
            } 
         }else{
            echo "errorTelefono";
         }
      }else{
         echo "errorCorreo";
      }
   }else{
      echo "errorUsuario";
   }
  
?>