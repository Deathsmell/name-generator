let address = {};

address.county = require("./county");
address.country = require("./country");
address.default_country = require("./default_country");


address.building_number = require("./building_number");

address.street_name = require("./street_name");
address.direction = require("./direction");
address.direction_abbr = require("./direction_abbr");
address.street_suffix = require("./street_suffix");

address.flat_prefix = require("./flat_prefix");
address.flat_number = require("./flat_number")

address.city_prefix = require("./city_prefix");
address.city = require("./city");
address.city_suffix = require("./city_suffix");

address.state = require("./state");
address.state_abbr = require("./state_abbr");

address.postcode = require("./postcode");
address.postcode_by_state = require("./postcode_by_state");

address.pattern = require("./pattern")

module.exports = address;
