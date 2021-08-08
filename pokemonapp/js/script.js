//Pokemon IIFE
let pokemonRepository = (function () {
  let pokemonList = [];

  let mainApi = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  //add pokemon;
  function add(pokemon) {
    if (typeof pokemon === 'object') {
      pokemonList.push(pokemon);
    } else {
      alert('wrong data type');
    }
  }

  function addListItem(pokemon) {
    let pokemonArray = document.querySelector('.pokemon-list');
    //create elements
    let pokemonItems = document.createElement('li');
    let pokemonBtn = document.createElement('button');
    pokemonBtn.classList.add('pokemon-btn');
    pokemonBtn.innerText = `${pokemon.name}`;
    //apend
    pokemonItems.appendChild(pokemonBtn);
    pokemonArray.appendChild(pokemonItems);

    //add event listener to all pokemon btn
    pokemonBtn.addEventListener('click', function () {
      showDetails(pokemon);
    });
  }

  //fetch pokemon
  function loadList() {
    //Loading gif
    function showLoadingMessage() {
      let loadingImg = document.querySelector('.loading');
      loadingImg.classList.add('show-loading');
    }
    showLoadingMessage();

    //fetch pokemon from api
    return fetch(mainApi)
      .then((res) => res.json())
      .then((data) => {
        data.results.forEach((item) => {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };

          add(pokemon);
          loadDetails(pokemon);

          //end loading gif
          function hideLoadingMessage() {
            let loadingImg = document.querySelector('.loading');
            loadingImg.classList.remove('show-loading');
          }

          hideLoadingMessage();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function loadDetails(pokemon) {
    //Loading gif
    function showLoadingMessage() {
      let loadingImg = document.querySelector('.loading');
      loadingImg.classList.add('show-loading');
    }
    showLoadingMessage();

    let url = pokemon.detailsUrl;
    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        pokemon.imageUrl = data.sprites.front_default;
        pokemon.height = data.height;
        pokemon.weight = data.weight;
        pokemon.types = data.types;
        pokemon.abilities = data.abilities;

        //end loading gif
        function hideLoadingMessage() {
          let loadingImg = document.querySelector('.loading');
          loadingImg.classList.remove('show-loading');
        }

        hideLoadingMessage();
      })
      .catch((err) => console.log(err));
  }

  //get all pokemonList items
  function getAll() {
    return pokemonList;
  }

  //show pokemon details on btn click
  function showDetails(pokemon) {
    loadDetails(pokemon).then(() => {
      let modalContainer = document.querySelector('#modal-container');
      modalContainer.classList.add('show');

      //close modal onclick
      modalContainer.addEventListener('click', (e) => {
        if (e.target === modalContainer) {
          hideModal();
        }
      });

      //name of pokemon
      let pokemonName = document.querySelector('.pokemon-name');
      pokemonName.innerText = pokemon.name;

      //image of pokemon
      let pokemonImg = document.querySelector('.pokemon-img');
      pokemonImg.src = pokemon.imageUrl;

      //height of pokemon
      let pokemonHeight = document.querySelector('.pokemon-height');
      pokemonHeight.innerText = ` Height : ${pokemon.height} ft`;

      //weight of pokemon
      let pokemonWeight = document.querySelector('.pokemon-weight');
      pokemonWeight.innerText = ` Weight : ${pokemon.weight} lbs`;

      //type-1 of pokemon
      let pokemonType1 = document.querySelector('.type1');
      pokemonType1.innerText = ` ${pokemon.types[0].type.name}`;

      //type-2 of pokemon
      let pokemonType2 = document.querySelector('.type2');
      if (pokemon.types[1]) {
        pokemonType2.innerText = ` ${pokemon.types[1].type.name}`;
      } else {
        pokemonType2.style.display = '';
      }

      //abilities of pokemon 1
      let pokemonAbility1 = document.querySelector('.ability1');
      pokemonAbility1.innerText = ` ${pokemon.abilities[0].ability.name}`;

      //abilities of pokemon 2
      let pokemonAbility2 = document.querySelector('.ability2');
      pokemonAbility2.innerText = ` ${pokemon.abilities[1].ability.name}`;

      //close btn
      let closeBnt = document.querySelector('.close-btn');
      closeBnt.addEventListener('click', () => {
        hideModal();
      });

      //hide modal with press of escape key
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalContainer.classList.contains('show')) {
          hideModal();
        }
      });

      //hide modal function
      function hideModal() {
        modalContainer.classList.remove('show');
      }
    });
  }

  // search  pokemon
  let search = document.querySelector('.search');
  search.addEventListener('keyup', function () {
    let listPokemon = document.querySelectorAll('li');
    let value = search.value.toUpperCase();

    listPokemon.forEach(function (pokemon) {
      if (pokemon.innerText.toUpperCase().indexOf(value) > -1) {
        pokemon.style.display = '';
      } else {
        pokemon.style.display = 'none';
      }
    });
  });

  return {
    getAll,
    addListItem,
    add,
    loadList,
    loadDetails,
    showDetails,
  };
})();

//Pokemon for Eachloop.
pokemonRepository.loadList().then(() => {
  pokemonRepository.getAll().forEach((pokemon) => {
    pokemonRepository.addListItem(pokemon);
  });
});
