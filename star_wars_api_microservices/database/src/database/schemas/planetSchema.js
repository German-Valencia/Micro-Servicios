const { Schema } = require("mongoose");

/* const planetSchema = new Schema({
  _id: String,
  name: String,
  rotation_period: String,
  orbital_period: String,
  diameter: String,
  climate: String,
  gravity: String,
  terrain: String,
  surface_water: String,
  residents: [{ type: String, ref: "Character" }],
  films: [{ type: String, ref: "Film" }],
}); */

const planetSchema = new Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  rotation_period: { type: String, required: true },
  orbital_period: { type: String, required: true },
  diameter: { type: String, required: true },
  climate: { type: String, required: true },
  gravity: { type: String, required: true },
  terrain: { type: String, required: true },
  surface_water: { type: String, required: true },
  residents: [
    {
      type: String,
      ref: "Character",
      required: true,
    },
  ],
  films: [
    {
      type: String,
      ref: "Film",
      required: true,
    },
  ],
});

planetSchema.statics.list = async function () {
  return await this.find()
    .populate("residents", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

planetSchema.statics.get = async function (id) {
  return await this.findById(id)
    .populate("residents", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

planetSchema.statics.insert = async function (planet) {
  return await this.create(planet);
};

module.exports = planetSchema;
