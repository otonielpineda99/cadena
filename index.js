var cadena='aabacbaa';
var cadenaNueva='';

function valuarCadena(texto){
    for (const item in cadena){
        if(item){
            if(cadena[item]==='a'){
                cadenaNueva+='b';
            }else if(cadena[item]==='b'){
                cadenaNueva+='a';
            }else{
                cadenaNueva+=cadena[item];
            }
        }
    }
    return cadenaNueva;
}
console.log(cadena);
console.log(valuarCadena(cadena));