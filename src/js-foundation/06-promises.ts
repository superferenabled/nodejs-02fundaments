import { http } from "../plugins/index.ts";

export const getPokemonById = async (id: number) => {
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
