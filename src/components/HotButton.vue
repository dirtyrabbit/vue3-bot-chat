<template>
  <div class="btn_list">
    <el-button type="info" v-on:click="click_submit">{{ text }}</el-button>
  </div>
</template>

<script setup>
const emit = defineEmits(["pressHotBut"]);
const props = defineProps({
  text: String,
});
const click_submit = function () {
  emit("pressHotBut", props.text);
  
};
</script>

<style scoped>
.btn_list {
  display: flex;
  bottom: 50px;
  margin: 5px;
}
</style>
