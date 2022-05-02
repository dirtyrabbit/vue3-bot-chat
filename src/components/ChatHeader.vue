<template>
    <div class="content">
        <el-row>
            <el-col :span="4">
                <div>
                    <el-avatar :icon="UserFilled" />
                </div>
            </el-col>
            <el-col :span="8"> 
                <div class="bot-name">
                    <span>HiBot</span>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import { UserFilled } from '@element-plus/icons-vue'
</script>

<style scoped>
.content {
  display: flex;
  margin: 5px;
}
.content > div {
  flex: 1;
  text-align: center;
}

.content > div:not(:last-child) {
  border-right: 1px solid var(--el-border-color);
}
</style>

