let address = {};

address.country = require("./country");
address.default_country = require("./default_country");

address.state = require("./state");

address.city_prefix = require("./city_prefix");
address.city_name = require("./city_name");

address.postcode = require("./postcode");

address.street_prefix = require("./street_prefix");
address.street_title = require("./street_title");

address.building_prefix = require("./building_prefix");
address.building_number = require("./building_number");

address.flat_prefix = require("./flat_prefix")
address.flat_number = require("./flat_number")

module.exports = address;
