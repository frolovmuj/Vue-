<template>
  <button class="btn"><slot></slot></button>
</template>
<script>
export default {
  name: 'green-btn',
};
</script>
<style lang="scss" scoped>
.btn {
  background: #9dd558;
  border-radius: 18px;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
  padding: 18px 0;
  transition: background 0.2s ease-in-out;
  &:hover {
    background-color: #000000;
  }
  &:active {
    transform: translateY(3px);
  }
}
</style>
