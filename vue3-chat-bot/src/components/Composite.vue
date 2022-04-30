<script setup>
import ChatHeader from './ChatHeader.vue'
import { UserFilled } from '@element-plus/icons-vue'
// import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
    <div style="display: flex; align-items: center">

    <el-popover
      placement="top-start"
      :width="300"
      trigger="click"
      popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
    >
      <template #reference>
        <el-avatar :icon="UserFilled" />
      </template>

      <template #default>
        <chat-header></chat-header>
      </template>
    </el-popover>
  </div>
</template>