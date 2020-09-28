<template>
  <view class="number-input mt-300">
    <view class="size-h5">请输入数字</view>
    <view class="result">{{ result || "0" }}</view>
    <view class="keyboard flx flx-wrapped flx-around">
      <!-- TODO:will use event proxy to optimize -->
      <button
        class="flx-col-3"
        v-for="key of keyboard"
        :key="key"
        @tap="updateResult(key)"
      >
        {{ key }}
      </button>
    </view>
    <view @tap="complete" class="complete color-blue text-center">完成 </view>
  </view>
  <view @tap="cancel" class="cancel color-red text-center mt-10">取消 </view>
</template>

<script>
import { ref, effect, defineComponent } from "vue";

export default defineComponent({
  emits: ["done"],
  setup(props, ctx) {
    const result = ref("");
    const keyboard = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      ".",
      "0",
      "del",
    ];
    const updateResult = (key) => {
      if (key === "del") {
        return (result.value = result.value.substr(0, result.value.length - 1));
      }

      result.value += key;
      if (/^[0]+/.test(result.value)) {
        return (result.value = "");
      }
      if (key === "." && result.value.split(".").length > 2) {
        return (result.value = result.value.substr(0, result.value.length - 1));
      }
    };
    const complete = () => ctx.emit("done", [true, result.value]);
    const cancel = () => ctx.emit("done", [false]);
    return { result, keyboard, updateResult, complete, cancel };
  },
});
</script>

<style lang="stylus">
.number-input
  background-color white

.mt-300
  margin-top 300px

.cancel
  background-color white
.cancel, .complete
  padding 20px 3px
</style>
