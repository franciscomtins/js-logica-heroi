
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;    
    }

    atacar() {
        let ataque

        switch(this.tipo) {
            case "mago": 
                ataque = "usou magia"
                break;
            case "guerreiro":
                ataque = "usou espada"
                break;
            case "monge": 
                ataque = "usou artes maciais"
                break;
            case "ninja":
                ataque = "usou shuriken"
                break;
            default:
                ataque = "usou um ataque desconhecido"
        }
    
    console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

// usando
const heroi1 = new Heroi("gandalf", 150, "mago")
const heroi2 = new Heroi("Chapolin", 30, "guerreiro")
const heroi3 = new Heroi("Dalai Lama", 88, "monge")
const heroi4 = new Heroi("Jiraiya", 42, "ninja")
const heroi5 = new Heroi("Jack", 27, "Samurai")

heroi1.atacar()
heroi2.atacar()
heroi3.atacar()
heroi4.atacar()
heroi5.atacar()