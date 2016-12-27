function calcular(){
    var num1 = document.getElementById("num_1").value;
    var num2 = document.getElementById("num_2").value;
    var salida = document.getElementById("salida");
    var suma = parseFloat(num1) + parseFloat(num2);
        
    if( num1 ==10 || num2 == 10 ){
        salida.innerHTML = "1";
    }else{
        if (suma == 10){
           salida.innerHTML = "1"; 
        }else{
            salida.innerHTML  = "0";
        }
    }
}
