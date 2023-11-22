const list$$ = document.querySelector(".container");

const buscador = document.querySelector('.buscador');

  for (let i = 1; i <= 151; i++) {
  //console.log(i);
  fetch("https://pokeapi.co/api/v2/pokemon/" + i)
  .then(response => response.json())
  .then(data=> mostrarPokemon(data))
  
} 



function mostrarPokemon(pokemon) {
    console.log(pokemon)
    let tipos = pokemon.types.map((type)=> 
        //console.log('type',type)
        `<p class="${type.type.name} tipos">${type.type.name}</p>`)
        tipos.join('');
    
    let habilidades = pokemon.abilities.map((moves)=>
        `
            <ul class='line'>${moves.ability.name}</ul>
        `)
        habilidades.join('');
    //console.log(tipos)

    const types = pokemon.types[0].type.name;
    const name = pokemon.name;
  const div = document.createElement("div");
  div.classList.add("card", types);
  div.setAttribute("id",name)
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
            ${tipos}

        </div>
        <div class="abilities">
            <h2 class="ability">abilities</h2></h2>
            <ol class="list">
                ${habilidades}
            </ol>
        </div>
            `;
            
}

buscador.addEventListener('input', function () {
    const searchTerm = buscador.value.toLowerCase();

    const cards = list$$.querySelectorAll('.card');
    cards.forEach(card => {
        const pokemonName = card.querySelector('.text-name').textContent.toLowerCase();
        if (pokemonName.includes(searchTerm)) {
            card.style.display = 'block';  // Muestra el elemento si coincide con el término de búsqueda
        } else {
            card.style.display = 'none';   // Oculta el elemento si no coincide
        }
    });
});


