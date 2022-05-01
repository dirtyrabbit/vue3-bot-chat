<script setup>
import ChatHeader from './components/ChatHeader.vue'
import ChatBody from './components/ChatBody.vue'

import { UserFilled } from '@element-plus/icons-vue'
// import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
    <div style="display: flex; position: fixed; bottom:20px; left:10px; align-items: center">

    <el-popover
      
      placement="top-start"
      :width="300"
      trigger="click"
      popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 0px; height: 400px;"
    >
      <!-- bot chat button icon -->
      <template #reference>
        <el-avatar :icon="UserFilled" />
      </template>

      <!-- bot chat content -->
      <template #default>
        <chat-header></chat-header>
        <chat-body ></chat-body>
      </template>

    </el-popover>
  </div>
</template>