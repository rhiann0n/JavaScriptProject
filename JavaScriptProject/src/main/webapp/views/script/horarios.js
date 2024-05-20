window.onload=function (){
    let horario="";
    let botones=document.querySelectorAll(".boton"); // toma todos los elementos que tiene
    //la clase boton y crea un array
    /*sintaxis de querySelector: clases(.), id(#), etiquetas(etiqueta)*/
    /*sintaxis de forEach: array.forEach(arrayItem=>{...})*/
    botones.forEach(pinchado=>{ //En JS forEach es una función que se le aplica a un array para recorrerlo
        pinchado.addEventListener("click",function (e){
            switch (pinchado.value){
                case "l":{
                    horario="Lunes: de 09:00 a 14:00 | 16:00 a 19:00";
                    break;
                } case "m":{
                    horario="Martes: de 09:00 a 14:00 | 16:00 a 19:00";
                    break;
                } case "x":{
                    horario="Miércoles: de 09:00 a 14:00 | 16:00 a 19:00";
                    break;
                } case "j":{
                    horario="Jueves: de 09:00 a 14:00 | 16:00 a 19:00";
                    break;
                } case "v":{
                    horario="Viernes: de 08:00 a 16:00";
                    break;
                } case "s":{
                    horario="Sábado: de 09:00 a 14:00";
                    break;
                } case "d":{
                    horario="Domingo: CERRADO"
                    break;
                }
            }
            document.querySelector(".horario").innerHTML="<h2>Horario</h2>" + horario;
        })
    })
}