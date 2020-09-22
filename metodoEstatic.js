class MeuMetodoEstatico {
    constructor(name) {
        this.name = name
    }
    
    static MetodoEstatico() {
        return 'Metodo estatico chamado'
    }

}

const estatico = new MeuMetodoEstatico('renato')

//console.log(estatico.MetodoEstatico())

console.log(MeuMetodoEstatico.MetodoEstatico())