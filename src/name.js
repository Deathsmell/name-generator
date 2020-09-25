function Name(person) {

    this.locale = person.locale
    this.random = person.random

    this.generate = (firstName, lastName, gender) => {
        const r = this.random.number(8);
        let prefix, suffix;
        if (typeof gender !== 'number') {
            gender = this.random.number(1);
        }
        firstName = firstName || this.generateFirstName(gender);
        lastName = lastName || this.generateLastName(gender);
        switch (r) {
            case 0:
                prefix = this.prefix(gender);
                if (prefix) {
                    return prefix + " " + firstName + " " + lastName;
                }
            case 1:
                suffix = this.suffix(gender);
                if (suffix) {
                    return firstName + " " + lastName + " " + suffix;
                }
        }

        return firstName + " " + lastName;
    }

    this.generateFirstName = (gender) => {
        if (typeof this.locale.name.male_first_name !== "undefined" && typeof this.locale.name.female_first_name !== "undefined") {
            if (typeof gender === 'string') {
                if (gender.toLowerCase() === 'male') {
                    gender = 0;
                } else if (gender.toLowerCase() === 'female') {
                    gender = 1;
                }
            }

            if (typeof gender !== 'number') {
                if (typeof this.locale.name.first_name === "undefined") {
                    gender = this.random.number(1);
                } else {
                    //Fall back to non-gendered names if they exist and gender wasn't specified
                    return this.random.arrayElement(this.locale.name.first_name);
                }
            }
            if (gender === 0) {
                return this.random.arrayElement(this.locale.name.male_first_name)
            } else {
                return this.random.arrayElement(this.locale.name.female_first_name);
            }
        }
        return this.random.arrayElement(this.locale.name.first_name);
    }


    this.generateLastName = (gender) => {
        if (typeof this.locale.name.male_last_name !== "undefined" && typeof this.locale.name.female_last_name !== "undefined") {
            if (typeof gender !== 'number') {
                gender = this.random.number(1);
            }
            if (gender === 0) {
                return this.random.arrayElement(this.locale.name.male_last_name);
            } else {
                return this.random.arrayElement(this.locale.name.female_last_name);
            }
        }
        return this.random.arrayElement(this.locale.name.last_name);
    };

    this.suffix = () => {
        return this.random.arrayElement(this.locale.name.suffix);
    };

    this.prefix = (gender) => {
        if (typeof this.locale.name.male_prefix !== "undefined" && typeof this.locale.name.female_prefix !== "undefined") {
            if (typeof gender !== 'number') {
                gender = this.random.number(1);
            }
            if (gender === 0) {
                return this.random.arrayElement(this.locale.name.male_prefix);
            } else {
                return this.random.arrayElement(this.locale.name.female_prefix);
            }
        }
        return this.random.arrayElement(this.locale.name.prefix);
    };
}

module.exports = Name

