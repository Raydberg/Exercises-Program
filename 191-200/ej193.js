async function fetchPokemon() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const pokemonList = data.results.slice(0, 20);
        pokemonList.forEach(pokemon => {
            const name = pokemon.name;
            const capitalized = name.charAt(0).toUpperCase() + name.slice(1);
            console.log(`Pokemon: ${capitalized}`);
        });
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

fetchPokemon();