const { Schema } = require("mongoose");

/* const filmSchema = new Schema({
  _id: String,
  title: String,
  opening_crawl: String,
  director: String,
  producer: String,
  release_date: String,
  characters: [{ type: String, ref: "Character" }],
  planets: [{ type: String, ref: "Planet" }],
}); */

const filmSchema = new Schema({
  _id: { type: String, required: true },
  title: { type: String, required: true },
  opening_crawl: { type: String, required: true },
  director: { type: String, required: true },
  producer: { type: String, required: true },
  release_date: { type: String, required: true },
  characters: [
    {
      type: String,
      ref: "Character",
      required: true,
    },
  ],
  planets: [
    {
      type: String,
      ref: "Planet",
      required: true,
    },
  ],
});

filmSchema.statics.list = async function () {
  return await this.find()
    .populate("characters", ["_id", "name"])
    .populate("planets", ["_id", "name"]);
};

filmSchema.statics.get = async function (id) {
  return await this.findById(id)
    .populate("characters", ["_id", "name"])
    .populate("planets", ["_id", "name"]);
};

filmSchema.statics.insert = async function (film) {
  return await this.create(film);
};

module.exports = filmSchema;
