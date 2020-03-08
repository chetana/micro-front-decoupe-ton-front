const P = new Pokedex.Pokedex();

const interval = {
    limit: 9,
    offset: 0
};

let doOnPokemon = function(pokemonName, callback) {
    P.getPokemonByName(pokemonName)
        .then(callback);
}

let doOnAllPokemon = function(callback) {
    P.getPokemonsList(interval).then(function(pokemons){
        pokemons.results.forEach(callback);
    });
};