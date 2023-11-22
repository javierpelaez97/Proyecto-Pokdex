const list$$ = document.querySelector(".container");

const fetchPokemom = (url) =>{

    return new Promise((resolve, reject)=>{
        fetch(url)
        .then(response=> response.json())
        .then(data => resolve(data))
        .catch(error => reject(error))
    })
}
document.addEventListener("DOMContentLoaded", function(){
    for (let i = 1; i <= 151; i++) {
        //console.log(i);
        fetchPokemom("https://pokeapi.co/api/v2/pokemon/" + i)
        .then(response => mostrarPokemon(response))
        .catch(error => console.error(error))
      }  
}) 


 /* for (let i = 1; i <= 151; i++) {
  //console.log(i);
  fetchPokemom("https://pokeapi.co/api/v2/pokemon/" + i)
  .then(response => mostrarPokemon(response))
  .catch(error => console.error(error))
} 


//  POSIBLE SOLUCION


/* const getPokemon = async() => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151");
    const res = await response.json();
   //console.log(res.results)
    return res.results
}

const mapPokemon = (pokemonWithoutMap) =>{              //Función que me saca los enlaces de la funcion "getPokemon"
    
    const linkPokemon = new Array();
   for(pokemon of pokemonWithoutMap){
    linkPokemon.push(pokemon.url)
    //console.log(pokemon.url)
   }
   return linkPokemon;
}; */






function mostrarPokemon(pokemon) {
    console.log(pokemon)
    const type = pokemon.types[0].type.name;
  const div = document.createElement("div");
  div.classList.add("card", type);
  list$$.appendChild(div);
  div.innerHTML = `
        <div class="pokemon">
            <div class="header">
                <h2 class="text-name">${pokemon.name}</h2>
                <p class="id">Id. ${pokemon.id}</p>
            </div>
            <img src="${pokemon.sprites.other["official-artwork"].front_default}"  alt="${pokemon.name}" class="image"> 
        </div>
        <div class="type">
            <p class="type1">${pokemon.types[0].type.name}</p>

        </div>
        <div class="moves">
            <h2 class="text-name2">Moves</h2>
            <ol class="list">
                <div>
                    <ul class='line'>${pokemon.moves[0].move.name}</ul>
                    <ul class='line'>${ pokemon.moves[1].move.name}</ul>
                </div>
                <div>
                    <ul class='line'>${ pokemon.moves[2].move.name}</ul>
                    <ul class='line'>${ pokemon.moves[3].move.name}</ul>
                </div>
            </ol>
        </div>
            `;

}


/* const init = async() => {
    const pokemons = await getPokemon();                        //Guarda en una variable el JSon de la API
    //console.log(pokemons)
    const mappedPokemons = mapPokemon(pokemons);                //Variable de una función que me guarda un array con los enlaces
    console.log('Objeto', mappedPokemons);  
    mostrarPokemon();
    }

init() */

