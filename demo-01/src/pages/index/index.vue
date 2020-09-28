<template>
  <view class="size-h3 text-center"> 选择一张你喜欢的图片 </view>
  <Modal :visable="state">
    <NumberInput @done="done" />
  </Modal>
  <view class="input-item mt-500">
    <text>输入数字1：</text>
    <input @tap="openModal('text1')" :value="text1" disabled />
  </view>
  <view class="input-item">
    <text>输入数字2：</text>
    <input @tap="openModal('text2')" :value="text2" disabled />
  </view>
  <view class="input-item">
    <text>输入数字3：</text>
    <input @tap="openModal('text3')" :value="text3" disabled />
  </view>
  <button class="confirm mt-50">确认</button>
</template>

<script>
import { defineComponent, ref } from "vue";
import NumberInput from "../../components/NumberInput.vue";
import Modal from "../../components/Modal.vue";
import "./index.styl";

export default {
  components: { Modal, NumberInput },
  methods: {
    done([state, result]) {
      this.state = false;
      this[this.current] = result;
    },
  },
  setup(props, ctx) {
    const state = ref(false);
    const current = ref("");
    const text1 = ref("");
    const text2 = ref("");
    const text3 = ref("");
    const openModal = (text) => {
      state.value = true;
      current.value = text;
    };
    return { text1, text2, text3, state, current, openModal };
  },
};
</script>

<style lang="stylus">
.input-item
  text-align center
  input
    width 300px
    border 1px solid rgba(0,0,0,.2)
    display inline-block
    vertical-align middle

.confirm
  width 200px
  background-color blue
  font-size 30px
  color white

.mt-50
  margin-top 50px

.mt-500
  margin-top 500px
</style>
