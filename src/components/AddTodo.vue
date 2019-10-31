<template>
  <div>
    <form @submit.prevent="onSubmit()">
      <input
        type="text"
        name="title"
        placeholder="Add Todo...."
        v-model="title"
      />
      <input type="submit" value="Submit" class="btn" />
    </form>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "AddTodo",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    ...mapActions(["addToDo"]),
    onSubmit() {
      this.addToDo(this.title);
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  margin: 15px 0px;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  cursor: pointer;
}
</style>
