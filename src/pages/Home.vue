<template>
  <div>
    <add-todo />
    <filters />
    <div class="todos">
      <div
        class="todo"
        v-for="todo in allToDos"
        :key="todo.id"
        :class="{ completed: todo.completed }"
      >
        {{ todo.title }}
        <i class="fas fa-trash-alt" @click="deleteTodo(todo.id)"></i>
      </div>
    </div>
  </div>
</template>

<script>
import AddTodo from "../components/AddTodo.vue";
import Filters from "../components/Filiters.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Todos",
  components: {
    AddTodo,
    Filters
  },
  methods: {
    ...mapActions(["fetchToDos", "deleteTodo"])
  },
  computed: mapGetters(["allToDos"]),
  created() {
    this.fetchToDos();
  }
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
.completed {
  background-color: #000;
  color: #fff;
  text-decoration: line-through;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}
.is-complete {
  background: #35495e;
  color: #fff;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
