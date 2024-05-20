window.onload = function (e)
{
document.querySelector(".parrafo").innerHTML="Es una prueba con slector";
// document.write("Es una prueba desde el archivo js externo") //no se utiliza mucho, borra to y pinta lo que quiere en la pantalla
    /**
     * Para seleccionar elementos podemos hacerlo por
     * id
     * clase
     * etiqueta
     * name
     * comodín -> querySelector... que incluye todas las anteriores
     * querySelectorAll -> para cuando son varios elementos que necesitamos seleccionar-> genera un array de elementos
     */
    let cuadro1= document.getElementById("cuadro");
    let cuadro2= document.querySelector("#cuadro"); //tengo que indicar qué tipo de selector es
    // # para id   . para clases
    let cadena1 = "mi primera cadena";
    let cadena2 = "para mostrar cómo funciona JS"
    //expresiones backticks sin tener que utilizar el + para concatenar
    document.querySelector(".parrafo").innerHTML = `La Cadena1 dice -> ${cadena1} y la cadena2 dice ${cadena2}`
    //document.querySelector(".parrafo").innerHTML = `La Cadena1 dice -> "+cadena1+" y la cadena2 dice "+cadena2+"`
    //hacer referencia a una expresión o variable, es también hacer referencia a su valor
    let base = 3;
    let altura = 22;
    document.querySelector(".areaTriangulo").innerHTML = `El área del triángulo es: ${base*altura/2}`;
    //Secuencias de escape \t \n // = \\  "es una frase y dentro hay comillas \"dobles\" tienes que escapar...
    console.log("Así \"escapamos\" comillas dobles"); //dentro hay comillas
    console.log('Así "escapamos" comillas dobles');
    console.log("Así 'escapamos' comillas dobles");
    console.log("Así \tTabulamos\t en JavaScript");
    console.log("Así puedo poner una barra \\ invertida");
    console.log("Así puedo poner cualquier código unicode \u20BF");
    console.log("El acceso a la ruta C:\\\\usuario\\ tarda 1'23\"\, algo considerado \"lento\" en la actualidad.");

    //Números//
    /* Number -> puede trabajar enteros y decimales*/
    let divisionCero = 356/0;
    console.log(`La división por cero es ${divisionCero}`);
    console.log(cadena1*100); //resultado NaN (not a number)

    //Boolean true=1 false=0

    console.log(5+true);

    //Conversión de tipos de datos -> automáticamente hace la conversión de tipo en un operación
    //siempre que se lo permita
    console.log(5+"5"); //resultado 55 pq lo concatena ya que con + se concatena
    console.log(5*"5"); //resultado 25 la multiplicación si la convierte
    console.log(5+Number("5")); // resultado 10

    numero=5+parseFloat("5"); // parseFloat convierte un string a número
    numero=(numero.toFixed(2)); //toFixe formatea los decimales para redondearlos
    console.log(numero);

    //Declaración de variables en JS
    //'let' (ámbito de bloque) y 'var' (ámbito global), cuidado porque el 'var' se puede declarar varias veces
    //si se declara ya no es posible volver a declarar en el mismo bloque (let)
    var diametro = 5;
    if (diametro<10){
        var diametro = 15;
        console.log(diametro) ;
    }
    console.log(diametro);

    let metros=50;
    if (metros>10){
        let metros = 15;
        console.log(metros);
    }
    console.log(metros);

    //los operadores de asignación
    // a=a+b ->     a+=b
    //aplicación    simplificación
    //Para calcular el exponencial
    var a=2**5;
    console.log("2^5 = "+a);
    var b = 20;
    var c = a<<b; //asignación de desplazamiento a la izquierda -> 33554432
    console.log(c);
    //Operadores lógicos ||or &&and
    //Operador ternario
    let resultado = a<30?"es menor que 30":"es mayor que treinta";
    console.log(resultado);






}