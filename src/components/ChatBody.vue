<template>
  <div class="content">
    <!-- chat display -->
    <el-row>
      <el-col :span="24">
        <el-scrollbar ref="scrollbarRef" height="250px">
          <div v-for="value in msgList" :key="value">

            <!-- Print bot response -->
            <el-row v-if="value.botmsg != null">
              <div class="avatar">
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
    <el-row style="height: 48px">
      <el-scrollbar>
        <div class="scrollbar-flex-content">
          <div v-for="value in hotButData" :key="value">
            <hot-button :text="value" @hotButValue="sentMsg"></hot-button>
          </div>
        </div>
      </el-scrollbar>
    </el-row>

    <!-- chat input -->
    <el-row class="inputrow" justify="center">
      <chat-inpute @inputValue="sentMsg"></chat-inpute>
    </el-row>

  </div>
</template>

<script setup lang="ts">
import HotButton from "./HotButton.vue";
import ChatInpute from "./ChatInpute.vue"
import { ref, nextTick } from "vue";
import { UserFilled } from "@element-plus/icons-vue";
import type { ElScrollbar } from "element-plus";

const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>();
const input = ref("");
const botmsg = ref("Hi, I'm helper bot, May I help you?"); //Init Message
const msgList = ref([{}]);
const hotButData = ref(["info", "info2"]); //hot button list

msgList.value.push({ botmsg: botmsg.value }); 

//Regular Expression
function isValid(str) {
  return /^\w+$/.test(str);
}

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
.avatar{
  display: flex;
  justify-content: left;
  bottom: 5px;
  margin: 5px;
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
