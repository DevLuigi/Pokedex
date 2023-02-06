function isPokedexOn(pokedexOn) {
  if(!pokedexOn) 
    throw new Error('Turn on the pokedex');
}

function isTherePokemon(pokemonSearch) {
  if(!pokemonSearch)
     new Error('Enter a Pokemon');
}

export { isPokedexOn, isTherePokemon }