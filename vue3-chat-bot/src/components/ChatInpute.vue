<template>
<div class = "content">
    <el-row>
        <el-col :span="20">
            <el-input v-model="input" placeholder="Please input" />
        </el-col>
        <el-col :span="2">
            <el-button type="primary" :icon="Promotion" />
        </el-col>
        
    </el-row>
</div>
</template>

<script setup lang="ts">
import { Promotion } from '@element-plus/icons-vue'
import { ref } from 'vue'
const input = ref('')
</script>

<style scoped>
.content{
    margin: 5px;
}
</style>