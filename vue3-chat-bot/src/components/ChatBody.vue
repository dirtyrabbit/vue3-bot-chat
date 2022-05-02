<template>
  <div class="content">
    <!-- chat display -->
    <el-row>
      <el-col :span="24">
        <el-scrollbar ref="scrollbarRef" height="250px">
          <div v-for="value in msgList" :key="value">
            <el-row v-if="value.botmsg != null">
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: left;
                  margin: 5px;
                "
              >
                <!-- Print bot response -->
                <el-avatar :size="25" :icon="UserFilled" />
              </div>
              <div>
                <div class="msgbox">
                  <div class="msgcontent">
                    {{ value.botmsg }}
                  </div>
                </div>
              </div>
            </el-row>

            <!-- Print user input -->
            <el-row v-if="value.input != null" justify="end">
              <div class="msgbox">
                <div class="msgcontent">{{ value.input }}</div>
              </div>
            </el-row>
          </div>
        </el-scrollbar>
      </el-col>
    </el-row>
    <el-row style="height: 48px">
      <hot-button></hot-button>
    </el-row>

    <!-- chat input -->
    <el-row class="inputrow" justify="center">
      <el-col :span="19">
        <el-input v-model="input" placeholder="Please input" />
      </el-col>
      <el-col :span="4">
        <el-button type="primary" @click="sentMsg" :icon="Promotion" />
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import HotButton from "./HotButton.vue";
import { Promotion } from "@element-plus/icons-vue";
import { ref, nextTick } from "vue";
import { UserFilled } from "@element-plus/icons-vue";

const value = ref(0);
import type { ElScrollbar } from "element-plus";
const innerRef = ref<HTMLDivElement>();
const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>();

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
  scrollDown();
}

function returnMsg() {
  msgList.value.push({ botmsg: "I not ready" });
}

function scrollDown() {
  nextTick(() => {
    scrollbarRef.value!.setScrollTop(scrollbarRef.value.wrap$.scrollHeight);
  });
}
</script>

<style scoped>
.content {
  height: 300px;
  background-color: #dedfe0;
  /* margin: 5px; */
}
.msgbox {
  display: flex;
  justify-content: center;
  margin: 5px;
  align-items: center;
  min-height: 24px;
  max-width: 140px;
  background-color: #fff;
  border-radius: 10px;
}
.msgcontent {
  display: flex;
  margin: 5px;
  min-width: 36px;
  justify-content: center;
}
.inputrow {
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
.el-row {
  margin-top: 5px;
}
.el-col {
  margin-right: 5px;
  border-radius: 4px;
}
</style>
