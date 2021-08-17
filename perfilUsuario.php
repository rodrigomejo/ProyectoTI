<?php
session_start();
if (null == ( isset( $_SESSION['id']) ? $_SESSION['id'] : null )) {     
   header("Location:./inicioRegistro.php");
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>PERFIL</title>
   <link rel="stylesheet" href="./css/estilosPerfil.css">
</head>
<body>
   <header id="header">
   </header>
   <div class="contenedorPerfil">
      <div class="barraLateralUsuario">
         <nav class="navUsuario">
            <div class="divImgUsuario">
               <img src="./img/8a8d3f62663f719adc1b4402d1ce9d8f.jpg" alt="">
               <h3>NOMBRE USUARIO</h3>
               <a href="logout.php">Cerrar Sesión</a>
            </div>
            
            <label>DATOS USUARIO</label>
            <ul id="ulnavUsuario">
               
            </ul>
            <input type="checkbox" id="checkemprendimientos">
            <label for="checkemprendimientos">EMPRENDIMIENTOS</label>
            <ul id="ulnavEmprendimiento">
               
               <li>AGERGAR</li>
               <li>MODIFICAR</li>
            </ul>
        </nav>
      </div>
      <div class="contenedorInformacion">
         <div class="serparador"></div>
         <form>

            <fieldset>
          
               <legend>DATOS DEL EMPRENDIMIENTO</legend>
               <div class="divDatosEmprendimientos">
                  <div class="divinput">
                     <p class="pInput"> NOMBRE: <input type="text" name="nombre"></p>
                     <p class="pInput">DIRECCION: <input type="text" name="direccion"></p>
                  </div>
                  <div class="divinput">
                     <p class="pInput"> TELEFONO: <input type="text" name="telefono" ></p>
                     <p class="pInput"> CATEGORIAS: 
                        <select id="selectCategorias"name="Categorias">
                        </select>
                     <button type="button" id="btnAgregar" class="btnAgregar">+</button>
                     </p>
                  </div>
                  <div class="divCategoriasP">
                  </div>
                  <div class="divinput">
                     <p class="pInput"> DESCRIPCION:<br>
                        <textarea name="descripcion"></textarea>           
                     </p>
                  </div>
               </div>
            </fieldset>
          
            <fieldset>
              <legend>IMAGENES</legend>
              
              <div class="divImgEmprendimiento">
               <p>AGREGA FOTOS PARA QUE LA GENTE CONOZCA TU EMPRENDIMIENTO<br></p>
                 <div class="imgenEmprendimientoPortada">
                  <input type="file" id="imgenEmprendimientoPortada" name="imgenEmprendimientoPortada" >
                 </div>
                  <div class="imagencuerpoEmprendimiento">
                     <div class="imgenEmprendimiento">
                        <input type="file" name="imagencuerpoEmprendimiento" >
                     </div>
                     <div class="imgenEmprendimiento">
                        <input type="file" name="imagencuerpoEmprendimiento">
                     </div>
                     <div class="imgenEmprendimiento">
                        <input type="file" name="imagencuerpoEmprendimiento">
                     </div>
                     <div class="imgenEmprendimiento">
                        <input type="file" name="imagencuerpoEmprendimiento">
                     </div>
                  </div>
              </div>
               <input class="btnAgregarEmprendimiento" id="btnAgregarEmprendimiento" type="button" value="AGREGAR EMPRENDIMIENTO ">

            </fieldset>
          </form>
      </div>
   </div>
   <Footer>
      <div class="contenedorFooter">
           <div class="divFooter">
             <hr>
             <p>Todos los derechos reservados © 2021</p>
         </div>
   </Footer>
   <script src="js/funcionesPerfilUsuario.js"></script>
</body>
</html>