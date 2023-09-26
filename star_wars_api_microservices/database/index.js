const server = require("./src/server");

/* const { Character, Film, Planet } = require("./src/database");

Character.find()
  .populate("homeworld", ["_id", "name"])
  .populate("films", ["_id", "title"])
  .then((res) => console.log(res));

Character.list().then((res) => console.log(res));

Character.get(1).then((res) => console.log(res));

Character.insert({
  _id: "201",
  name: "Germán Valencia",
  birth_year: "1991",
  unCampoCualquiera: "Hola",
}).then((res) => console.log(res));

Planet.list().then((res) => console.log(res[0]));

Planet.get(2).then((res) => console.log(res)); */

server.listen(8004, () => {
  console.log("Database service on PORT 8004");
});
