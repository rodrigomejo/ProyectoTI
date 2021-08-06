<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
   <link rel="stylesheet" href="./css/estiloInicioRegistro.css">
   <link rel="stylesheet" href="./css/estiloModal.css">
   <script src="https://kit.fontawesome.com/41bcea2ae3.js" crossorigin="anonymous"></script>
</head>
<body>

   <header id="header">
   </header>
   <div class="cuerpoPagina">

      <div class="contenedorPrincipal">
         <div class="cajaTrasera">
            
          <div class="cajaTraseraLogin">
             <h3>¿Ya tiene una cuenta?</h3>
             <p>Inicia sesion para entrar a la pagina</p>
             <button id="btnLogin">Iniciar Sesion</button>
          </div>
 
          <div class="cajaTraseraRegistro">
             <h3>¿Aun no tienes cuenta ?</h3>
             <p>Registrate para que puedas iniciar sesion</p>
             <button id="btnRegistro">Registrarse</button>
          </div>
 
         </div>
          <div class="contenedorLogin_Registro">
             
             <form action="" id="formLogin"class="formLogin">
                <h2>Iniciar sesion</h2>
                <input type="text" class="formLoginInput" name="email" placeholder="Correo Electronico">
                <input type="password" class="formLoginInput" name="password" placeholder="Contraseña">
                <button id="btnInicioForm">Entrar</button>
             </form>
             <form action="" id="formRegistro" class="formRegistro">
                <h2>Registrarse</h2>
                <div class="divRegistroInput">
                  <input type="text" class="formRegistroinputnombreCompleto" name="nombreCompleto" placeholder="Nombre y Apellido">
                  <i class="registroValidacionEstado fas fa-times-circle"></i>
               </div>
               <div class="divRegistroInput">
                  <input type="text" class="formRegistroinputusuario" name="usuario" placeholder="Usuario">
                  <i class="registroValidacionEstado fas fa-times-circle"></i>
               </div>
               <div class="divRegistroInput">
                  <input type="text" class="formRegistroinputemail" name="email" placeholder="Correo Electronico">
                  <i class="registroValidacionEstado fas fa-times-circle"></i>
               </div>
               <div class="divRegistroInput">
                  <input type="text" class="formRegistroinputtelefono"name="telefono" placeholder="Telefono">
                  <i class="registroValidacionEstado fas fa-times-circle"></i>
               </div>
               <div class="divRegistroInput">
                  <input type="password"class="formRegistroinputpassword" name="password" placeholder="Contraseña">
                  <i class="registroValidacionEstado fas fa-times-circle"></i>
               </div>
               <p class="errorRegistro"><i class="fas fa-times-circle"></i> DEBE COMPLETAR TODOS LOS CAMPOS CORRECTAMENTE</p>
                <button id="btnRegistroForm">Registrarse</button>
                <div class="contenedorModal">
                  <input type="checkbox" id="check-modal">
                  <div class="modal">
                     <div class="contenedor">
                        <div class="contenido">
                           <i class="validacionEstado fas fa-check-circle"></i>
                           <p>USUARIO REGISTRADO CON EXITO</p>
                           <label for="check-modal" id="lblAceptarModal">Aceptar</label>
                        </div>
                     </div>
                  </div>
                </div>
             </form>
 
          </div>
       </div> 
   </div>
   <Footer>
   <div class="contenedorFooter">

       <div class="cardFooter">
           <div class="logo">
               <img src="./img/2103622.png" alt="">
           </div>
           <div class="terms">
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum reiciendis et quasi aut facere vitae vero. Inventore, minus ab voluptate modi repellat, pariatur tempora quisquam
           </div>
       </div>


       <div class="cardFooter">
           <h2>Compania</h2>
           <a href="#">Acercda de</a>
           <a href="#">Contacto</a>              
       </div>

       <div class="cardFooter">
           <h2>Redes Sociales</h2>
           <a href="#"><i class="fab fa-facebook-square"></i> Facebook</a>
           <a href="#"><i class="fab fa-twitter-square"></i> Twitter</a>
           <a href="#"><i class="fab fa-linkedin"></i> Linkedin</a>
           <a href="#"><i class="fab fa-instagram-square"></i> Instagram</a>
       </div>
   </div>

   <div class="divFooter">
       <hr>
       <p>Todos los derechos reservados © 2021</p>
   </div>
   </Footer>
   <script src="./js/funcionInicioRegistro.js"></script>
</body>
</html>