const helper = require('./helper.js')

function Address(person) {

    this.locale = person.locale
    this.random = person.random

    this.state = () => {
        return this.random.arrayElement(this.locale.address.state)
    }

    this.cityPrefix = () => {
        return this.random.arrayElement(this.locale.address.city_prefix)
    }

    this.citySuffix = () => {
        return this.random.arrayElement(this.locale.address.city_suffix)
    }

    this.cityName = (useSuffix) => {
        const city = this.random.arrayElement(this.locale.address.city_name)
        return useSuffix ? this.citySuffix() + " " + city : city
    }

    this.postcode = (useSuffix) => {
        const postcode_mask = this.random.arrayElement(this.locale.address.postcode)
        return helper.replaceSymbolWithNumber(postcode_mask)
    }

    this.streetSuffix = () => {
        return this.random.arrayElement(this.locale.address.street_suffix)
    }

    this.streetTitle = (useSuffix) => {
        const street = this.random.arrayElement(this.locale.address.street_title)
        return useSuffix ? this.streetSuffix() + " " + street : street
    }

    this.buildingNumber = (useSuffix) => {
        const buildNumber = this.random.number(this.locale.address.building_number)
        return useSuffix ? this.random.arrayElement(this.locale.address.building_suffix) + " " + buildNumber : buildNumber
    }

    this.flatPrefix = () => {
        return this.random.arrayElement(this.locale.address.flat_prefix)
    }

    this.flatNumber = (useSuffix) => {
        const flatNumber = this.random.number(this.locale.address.flat_number)
        return useSuffix ? this.flatPrefix() + " " + flatNumber : flatNumber
    }

    this.generate = () => {
        return this.state()
            + " " + this.cityName(true)
            + " " + this.streetTitle(true)
            + " " + this.buildingNumber(true)
            + " " + this.flatNumber(true)
    }

}

module.exports = Address