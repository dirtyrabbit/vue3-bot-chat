<template>
  <div class="input-content">
    <el-row :gutter="6">
      <el-col :span="20">
        <el-input v-model="input" placeholder="Please input" />
      </el-col>
      <el-col :span="4">
        <el-button type="primary" @click="click_submit" :icon="Promotion" />
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { Promotion } from "@element-plus/icons-vue";
import { ref } from "vue";
const input = ref("");
const emit = defineEmits(["inputValue"]);
const click_submit = function () {
  emit("inputValue", input.value);
  
};
</script>

<style scoped>
.input-content {
    width: 280px;

}
</style>
