<template>
  <div class="todo">
    <h1>ToDO App</h1>
    <input
      type="text"
      v-model="title"
      @keyup.enter="add"
      placeholder="What you want to do"
    />
    <button @click="add">add to list</button>
    <ol>
      <li v-for="todo in todos" :key="todo">{{ todo }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      title: "",
      todos: ["go to shop"]
    };
  },
  methods: {
    add() {
      this.todos.push(this.title);
      this.title = "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
