window.onload=function () {

    let boton = document.querySelector(".boton");
    boton.addEventListener("click", function (e){
        let nombre = document.querySelector("#nombre").value;
        let edad = document.querySelector("#edad").value;
        let salida = "";
        if (edad<=12){
            salida="la niñez";
        } else if (edad>=13 && edad<=17){
            salida="la adolescencia";
        } else if (edad>=18 && edad<=64){
            salida="paro y con depresión"
        } else {
            salida="el bus del IMSERSO"
        }
        document.querySelector(".salida").innerHTML=`${nombre} tiene ${edad} años y está en ${salida}`;
    })
}