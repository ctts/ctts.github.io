<template lang="pug">
    .button(@click="alert") dialog
</template>

<script>
export default {
  name: 'MyDialog',
  methods: {
    alert () {
      this.$vcAlert()
        .then(() => console.log(1))
        .catch(() => console.log(0))
    }
  }
}
</script>

<style lang="less" scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  color: #ec1c28;
  width: 4rem;
  height: 1.3rem;
  border-radius: 3px;
  font-size: 0.6rem;
  box-shadow: 0px 1px 3px 0px rgba(124, 124, 124, 0.6);
  cursor: pointer;
}
</style>
