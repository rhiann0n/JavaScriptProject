<%--
  Created by IntelliJ IDEA.
  User: PROGRAMACIÓN
  Date: 16/05/2024
  Time: 11:30
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Adivina la Letra</title>
    <script src="views/script/adivinaLetra.js"></script>
    <link rel="stylesheet" href="views/css/style.css">
    <link rel="stylesheet" href="views/css/responsive.css">
    <link rel="icon" href="views/img/33027.png">
</head>
<body>
    <div class="contenedor col-8 contenedorDiv">
        <h1 class="centrado">Adivina la letra</h1>
        <div id="divLetras" class="col-4"></div>
        <h2 class="resultado"></h2>
        <p id="contadorFallos" class=""></p>
        <div class="cajaFlex">
            <button class="boton" id="nuevaP">Nueva Partida</button>
            <button class="boton" id="salir">Volver a Inicio</button>
        </div>
    </div>
</body>
</html>