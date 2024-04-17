<template>
  <div class="seacrh">
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z"
        stroke="#E4E4E4"
        strokeWidth="2"
        strokeLinecap="round" />
    </svg>
    <input
      :value="modelValue"
      @input="updateInput"
      class="input" />
    <img
      @click="clearSearchValue"
      v-if="modelValue.length > 0"
      width="40"
      height="40"
      src="../../../public/img/crossButton.svg"
      alt="remove" />
  </div>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
  name: 'search-input',
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(e) {
      this.$emit('update:modelValue', e.target.value);
    },
    ...mapMutations({
        clearSearchValue: 'item/clearSearchValue',
    }),
  },
};
</script>
<style lang="scss" scoped>
.seacrh {
  border: 1px solid #f3f3f3;
  border-radius: 10px;
  padding: 18px 18px 14px 18px;
  display: flex;
  position: relative;
  @media (max-width: 470px) {
    width: 100%;
  }
  &:focus-within {
    box-shadow: 0px 14px 30px rgba(0, 0, 0, 0.05);
  }
  svg {
    margin-right: 13px;
  }
  img {
    position: absolute;
    right: 10px;
    bottom: 5px;
    cursor: pointer;
  }
  input {
    @media (max-width: 470px) {
      width: 100%;
    }
  }
}
</style>
