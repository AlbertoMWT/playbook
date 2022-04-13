class Pokemon {
    constructor(name){
        this.name = name
    }

    sayHello(){
        console.log(`Mi Pokemon ${this.name} te saluda!!!`)
    }

    sayMessage(message){
        console.log(message)
    }
}

module.exports = new Pokemon('DEFAULT')