/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
// eslint-disable-next-line no-unused-vars
import axios from "axios";

const state = {
  toDos: []
};

const getters = {
  allToDos: state => state.toDos
};

const actions = {
  async fetchToDos({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    commit("setToDos", response.data);
  },
  async addToDo({ commit }, title) {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      {
        title,
        completed: false
      }
    );
    commit("setNewToDo", response.data);
  },
  async deleteTodo({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    commit("removeTodo", id);
  },
  async filterTodos({ commit }, e) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=${e.target.value}`
    );
    commit("setToDos", response.data);
  }
};

const mutations = {
  setToDos: (state, toDos) => {
    state.toDos = toDos;
  },
  setNewToDo: (state, toDo) => {
    state.toDos = [toDo, ...state.toDos];
  },
  removeTodo: (state, id) => {
    state.toDos = state.toDos.filter(todo => todo.id !== id);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
