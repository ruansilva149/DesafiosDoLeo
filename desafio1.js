const carro = (function carro(){
    let velocidade = 0;
    let tanque = 0;

    function abastecerCarro(){
        return (tanque += 20);
    }

    function reduzirTanque(){
        return (tanque -= 20);
    }

    function acelerarCarro(){
        console.log("Sua gasolina está diminuindo. Tanque:", tanque);
        return (velocidade += 20);
    }

    function frearCarro(){
        return (velocidade -= 20);
    }

    function trocarMarcha(){
        switch (velocidade){
            case 20:
            return ("primeira marcha");
            break;

            case 40:
            return ("segunda marcha");
            break;

            case 60:
            return ("terceira marcha");
            break;

            case 80:
            return ("quarta marcha");
            break;
        }
    }

    return {
        acelerar() {
            if (tanque <= 0){
                console.log("Não é possível acelerar pois o tanque está vazio")
            } else {
                reduzirTanque();
                console.log("A velocidade atual (em km) é:",acelerarCarro());    
            }
        },

        frear() {
            console.log("A velocidade atual (em km) é:",frearCarro());
        },

        marcha(){
            console.log("Trocando para:", trocarMarcha());
        },

        abastecer(){
            console.log("Abastecendo, você tem (em litros):", abastecerCarro());
        }

    }
})();

carro.abastecer();
carro.abastecer();
carro.abastecer();
carro.acelerar();
carro.marcha();
carro.acelerar();
carro.marcha();
carro.acelerar();
carro.acelerar();


