/* const Film = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const films = await Film.list();
  //axios.get("http://database:8004/Film")
  //res.status(200).json(films);
  response(res, 200, films)
}; */

const axios = require("axios");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const films = await axios.get("http://database:8004/Film");
  response(res, 200, films.data);
};
