<?php
session_start();
$id = $_SESSION['id'];
include 'conexion.php';

$verificarUsuario = "SELECT nombreCompleto, correo, telefono, id FROM usuario WHERE id = '$id'";
$verificarUsuarioRes = mysqli_query($conexion, $verificarUsuario);
$datosUsuarios =  mysqli_fetch_array($verificarUsuarioRes);
header('Location: ../perfilUsuario.php');
for ($i=0; $i < 4 ; $i++) { 
   echo $datosUsuarios[$i];
} 
?>