const random = require('./random.js')
const Name = require('./name');
const Address = require('./address');

function Person(locale) {

    const self = this

    this.locale = locale
    this.random = random
    this.name = new Name(self)
    this.address = new Address(self)

    this.generate = () => {
        return this.generateName() + " " + this.generateAddress()
    }

    this.generateName = () => {
        return this.name.generate()
    }

    this.generateAddress = () => {
        return self.address.generate()
    }

}

module.exports = Person

