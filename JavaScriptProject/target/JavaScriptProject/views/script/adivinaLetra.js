window.onload=function (){
    //Obtener el div donde se agregarán los botones
    let divLetras = document.getElementById("divLetras");

    //Crear un array con todas las letras del alfabeto
    let letras='abcdefghijklmnopqrstuvwxyz'.split('');

    //Función para crear botones para cada letra y agregarlos al div
    function crearBotones(){
        letras.forEach(function (letra) {
            let boton = document.createElement("button");
            boton.textContent = letra.toUpperCase(); // convertir la letra a mayúscula
            boton.value = letra.toUpperCase(); //agregar el valor de la letra
            boton.classList.add("boton"); //agregar la clase "boton"
            boton.classList.add("boton-letra"); //agrecar la clase "boton-letra"
            divLetras.appendChild(boton);
            console.log(boton.value)
        });
        //llamar a la función para crear los botones

    }
    crearBotones();
    // toma todos los elementos que tienen la clase boton-letra y crea un array de botones
    console.log(letras.length);
    let letraAdivinar= letras[parseInt(Math.random()*25)].toUpperCase();
    console.log(letraAdivinar);
    let botones=document.querySelectorAll(".boton-letra");
    let contador = 5;
    let interruptor = false;
    //en JS forEach es una función que se le aplica a un array para recorrerlo
    botones.forEach(letraSeleccionada=>{
        letraSeleccionada.addEventListener("click", function (){
            if (letraSeleccionada.value==letraAdivinar){
                document.querySelector("#contadorFallos").innerHTML="";
                document.querySelector(".resultado").innerHTML="Respuesta correcta"
                interruptor = true;
            } else {
                document.querySelector(".resultado").innerHTML="¡Sigue intentándolo!"
                letraSeleccionada.disabled=true;
                letraSeleccionada.style.backgroundColor="#8B0000";
                --contador;
                document.querySelector("#contadorFallos").innerHTML="Te quedan " + contador + " intentos";
                if (contador==0){
                    interruptor = true;
                }
            }
            if (interruptor){
                for (let i = 0; i < botones.length; i++) {
                    botones[i].disabled=true;
                    botones[i].style.backgroundColor="#8B0000";
                }
                let nuevaP = document.querySelector("#nuevaP");
                let salir = document.querySelector("#salir");
                nuevaP.style.display="block";
                salir.style.display="block";
                nuevaP.addEventListener("click", function (){
                    window.location.replace("adivinaLetra.jsp");
                })
                salir.addEventListener("click",function (){
                    window.location.replace("index.jsp");
                })
            }
        })

    })
}