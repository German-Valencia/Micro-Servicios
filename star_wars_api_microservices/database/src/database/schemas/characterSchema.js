const { Schema } = require("mongoose");

/* const characterSchema = new Schema({
  _id: String, //_id:Schema.Types.ObjectId
  name: String,
  height: String,
  mass: String,
  hair_color: String,
  skin_color: String,
  eye_color: String,
  birth_year: String,
  gender: String, //[male, female, unknown, n/a] para hacer un enum
  homeworld: { type: String, ref: "Planet" }, //referencia a el id del planeta
  films: [{ type: String, ref: "Film" }], //array de referencias a películas
}); */

const characterSchema = new Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  height: { type: String, required: true },
  mass: { type: String, required: true },
  hair_color: { type: String, required: true },
  skin_color: { type: String, required: true },
  eye_color: { type: String, required: true },
  birth_year: { type: String, required: true },
  gender: {
    type: String,
    enum: ["male", "female", "unknown", "n/a"],
    default: "unknown",
  },
  homeworld: {
    type: String,
    ref: "Planet",
    required: true,
  },
  films: [
    {
      type: String,
      ref: "Film",
      required: true,
    },
  ],
});
characterSchema.statics.list = async function () {
  return await this.find()
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

characterSchema.statics.get = async function (id) {
  return await this.findById(id)
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

characterSchema.statics.insert = async function (character) {
  return await this.create(character);
};

module.exports = characterSchema;
