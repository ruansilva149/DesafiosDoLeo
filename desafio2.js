const calculadora = (function calculadora(){
    let resultado = 0;

    function calculo(){
        return resultado;
    }

    return {
        potencia() {
            console.log(16**16);
        },

        areaQuadrado() {
            console.log(15*15);
        },

        retangulo(){
            console.log((30*2)/2);
        }

    }
})();

calculadora.potencia();