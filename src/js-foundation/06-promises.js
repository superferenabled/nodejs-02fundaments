const { http } = require("../plugins");

const getPokemonById = async (id) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemon = await http({
      headers: { "Content-Type": "application/json" },
    }).get(url);

    return await pokemon.name;
  } catch (err) {
    return "missingno";
  }
};

module.exports = {
  getPokemonById,
};
