<%--
  Created by IntelliJ IDEA.
  User: PROGRAMACIÓN
  Date: 15/05/2024
  Time: 21:06
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
    <title>JavaScript</title>
    <link rel="stylesheet" href="views/css/style.css">
    <link rel="stylesheet" href="views/css/responsive.css">
    <script src = "views/script/horarios.js"></script>
</head>
<body>
<div class="contenedor1 col-8">
    <div class="cajaFlex1 col-6">
        <button class="boton" value="l">L</button>
        <button class="boton" value="m">M</button>
        <button class="boton" value="x">X</button>
        <button class="boton" value="j">J</button>
        <button class="boton" value="v">V</button>
        <button class="boton" value="s">S</button>
        <button class="boton" value="d">D</button>
    </div>
    <div class="cajaFlex col-6">
        <p class="horario centrado col-12"></p>
    </div>
</div>
</body>
</html>