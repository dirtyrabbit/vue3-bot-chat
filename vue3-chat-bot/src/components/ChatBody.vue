<template>
  <div class="content">
    <!-- chat display -->
    <el-row>
      <el-col :span="24">
        <el-scrollbar height="300px">

          <div v-for="(value ) in msgList" :key="value">
            <div class = "botmsg" align="left">
              {{ value.botmsg }}
            </div>
            <div class = "botmsg" align="right">
              {{ value.input }}
            </div>
          </div>

          <hot-button></hot-button>
        </el-scrollbar>
      </el-col>
    </el-row>

    <!-- chat input -->
    <el-row>
      <div>
        <el-col :span="20">
          <el-input v-model="input" placeholder="Please input" />
        </el-col>
        <el-col :span="2">
          <el-button type="primary" @click="sentMsg" :icon="Promotion" />
        </el-col>
      </div>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import HotButton from "./HotButton.vue";
import { Promotion } from "@element-plus/icons-vue";
import { ref } from "vue";
const input = ref("");
const botmsg = ref("Hi, I'm helper bot, May I help you?");
const msgList = ref([{}]);
msgList.value.push({ botmsg: botmsg.value });

//Regular Expression
function isValid(str) {
  return /^\w+$/.test(str);
} 

function sentMsg() {
  if (isValid(input.value)) {
    msgList.value.push({ input: input.value });
    returnMsg();
  }
  input.value = "";
}

function returnMsg() {
  msgList.value.push({ botmsg: "I not ready" });
}
</script>

<style scoped>
.content {
  height: 300px;
  background-color: #dedfe0;
  margin: 5px;
}
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
</style>
