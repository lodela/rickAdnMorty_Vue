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
  },
  modules: {},
});
