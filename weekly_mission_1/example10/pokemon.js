export default class Pokemon {
    constructor (name) {
      this.name = name
    }
  
    sayHello (message) {
      console.log(`${this.name} te saluda, dice "${message}"`)
    }
  }
