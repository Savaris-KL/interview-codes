<template>
  <view class="modal level-top" v-if="visable">
    <slot></slot>
  </view>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    visable: Boolean,
  },
});
</script>

<style lang="stylus">
.modal
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  background-color rgba(0,0,0,.4)
</style>
