window.onload = function (){
    let bombilla = document.querySelector("#bombilla");
    let interruptor = false;
    bombilla.addEventListener("click", function (){
        if (interruptor){
            bombilla.src="views/img/bombillaoff.gif";
            interruptor=false;
        } else {
            bombilla.src="views/img/bombillaon.gif";
            interruptor=true;
        }
    })
}