/* const Planet = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const planets = await Planet.list();
  //axios.get("http://database:8004/Planet")
  //res.status(200).json(planets);
  response(res, 200, planets)
};
 */

const axios = require("axios");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const planets = await axios.get("http://database:8004/Planet");
  response(res, 200, planets.data);
};
