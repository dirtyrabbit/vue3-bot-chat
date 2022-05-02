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
    <!-- Hot button -->
    <!-- <el-scrollbar>
    <div class="scrollbar-flex-content">
      <div v-for="item in 50" :key="item" class="scrollbar-demo-item">
        {{ item }}
      </div>
    </div>
  </el-scrollbar> -->

    <el-row style="height: 48px">
      <el-scrollbar>
        <div class="scrollbar-flex-content">
          <div v-for="value in hotButData" :key="value" style="display: flex">
            <hot-button :text="value" @pressHotBut="pressHotBut"></hot-button>
          </div>
        </div>
      </el-scrollbar>
    </el-row>

    <!-- chat input -->
    <el-row class="inputrow" justify="center">
      <el-col :span="19">
        <el-input v-model="input" placeholder="Please input" />
      </el-col>
      <el-col :span="4">
        <el-button type="primary" @click="inputMsg" :icon="Promotion" />
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

const hotButData = ref(["info", "info2"]);

//Regular Expression
function isValid(str) {
  return /^\w+$/.test(str);
}

// Sent Button Handle Event
function inputMsg() {
  sentMsg(input.value);
}

// Hot Button Handle Event
const pressHotBut = function (msg) {
  sentMsg(msg);
};

// Print Msg on Display
function sentMsg(msg) {
  if (isValid(msg)) {
    msgList.value.push({ input: msg });
    returnMsg();
  }
  input.value = "";
  scrollDown();
}

//Bot response
function returnMsg() {
  msgList.value.push({ botmsg: "I not ready" });
}

//Display auto scrooll down
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

.el-row {
  margin-top: 5px;
}
.el-col {
  margin-right: 5px;
  border-radius: 4px;
}

.scrollbar-flex-content {
  display: flex;
}
</style>
