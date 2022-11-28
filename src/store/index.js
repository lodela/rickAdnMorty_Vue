import { createStore } from "vuex";

export default createStore({
  state: {
    characters: [],
    charactersFilter: [],
  },
  getters: {},
  mutations: {
    setCharacters(state, payload) {
      state.characters = payload;
    },
    setCharactersFilter(state, payload) {
      state.charactersFilter = payload;
    },
  },
  actions: {
    async getCharacters({ commit }) {
      const options = { method: "GET" };

      fetch("https://rickandmortyapi.com/api/character", options)
        .then((response) => response.json())
        .then((response) => {
          commit("setCharacters", response.results);
          commit("setCharactersFilter", response.results);
        })
        .catch((err) => console.error(err));
    },
    filterByStatus({ commit, state }, status) {
      const filtered = state.characters.filter((character) =>
        character.status.includes(status)
      );
      commit("setCharactersFilter", filtered);
    },

    async filterByName({ commit }, name) {
      const options = { method: "GET" };
      const URL = `https://rickandmortyapi.com/api/character/?name=${name}`;

      fetch(URL, options)
        .then((response) => response.json())
        .then((response) => {
          commit("setCharacters", response.results);
          commit("setCharactersFilter", response.results);
        })
        .catch((err) => console.error(err));
    },
  },
  modules: {},
});
