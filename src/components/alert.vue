<template>
  <div class="hello">
    <div class="alert " :class="mode" role="alert">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "alert",
  props: ["mode"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.primary {
  color: #004085;
  background-color: #cce5ff;
  border-color: #b8daff;
}
.danger {
  color: #ffffff;
  background-color: #f00b0b;
  border-color: #f00606;
}
.alert {
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
}
*,
::after,
::before {
  box-sizing: border-box;
}
user agent stylesheet div {
  display: block;
}
</style>
