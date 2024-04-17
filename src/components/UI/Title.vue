<template>
  <h1 class="title"><slot></slot></h1>
</template>
<script>
export default {
    name: 'my-title',
};
</script>
<style lang="scss" scoped>
.title {
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  color: #000000;
}
</style>
