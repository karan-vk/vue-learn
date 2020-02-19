<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <alert mode="primary">helloo</alert>
    <alert mode="danger">danger</alert>
    <div>
      <input
        type="text"
        v-model="lastName"
        placeholder="What is your nice name?"
      />
      <p>welcome {{ lastName }}</p>
    </div>
    <button @click="Clickme">click me</button>
    <input type="text" @keyup="doSomething" placeholder="plz code" />
    <h3>Loop</h3>
    <li v-for="person in stutent" :key="person">{{ person }}</li>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return { lastName: "Karan", stutent: ["Karan", "Ana", "Siv"] };
  },
  methods: {
    Clickme: () => {
      console.log("k");
    },
    doSomething: () => {
      console.log("coupon applied");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
// li {
//   display: inline-block;
//   margin: 0 10px;
// }
a {
  color: #42b983;
}
</style>
