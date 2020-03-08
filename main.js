const rootList = document.createElement("div");
rootList.setAttribute("class", "pokemon-list");

const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
};
let addNameToPokemonElement = function(pokeElement, pokemon) {
    let nameElement = document.createElement("div");
    nameElement.setAttribute("class", "pokemon-title");
    nameElement.innerHTML = pokemon.name;
    pokeElement.append(nameElement);
};
let addTypeToPokemonElement = function(pokeElement, pokemon) {
    if (pokemon.types.length > 0) {
        let typesListElement = document.createElement("div");
        typesListElement.setAttribute("class", "background-wrapper");
        let backgroundType = document.createElement("div");
        backgroundType.setAttribute("style", "background-color:"+colors[pokemon.types[0].type.name]+"");
        typesListElement.append(backgroundType);
        pokeElement.append(typesListElement);
    }
};

let addImageToPokemonElement = function(pokeElement, pokemon) {
    let imageElement = document.createElement("div");
    imageElement.setAttribute("class", "image-wrapper");
    let image = document.createElement("img");
    image.setAttribute("src", pokemon.sprites.front_default);
    image.setAttribute("class", "pokemon-image");
    image.setAttribute("alt", pokemon.name);
    imageElement.append(image);
    pokeElement.append(imageElement);
};

let addPokemonToList = function(pokemon){
    let pokeElement = document.createElement("div");
    pokeElement.setAttribute("class", "pokemon-card");
    doOnPokemon(pokemon.name, function(pokemonDetail) {
        addTypeToPokemonElement(pokeElement, pokemonDetail);
        addImageToPokemonElement(pokeElement, pokemonDetail);
        addNameToPokemonElement(pokeElement, pokemonDetail);
    });
    rootList.append(pokeElement);
};

doOnAllPokemon(addPokemonToList);

