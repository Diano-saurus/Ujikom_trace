<template>
    <div class="text-red-400">
        <p>Halo</p>
        <el-button type="primary"
        @click="showData"
        >Primary</el-button>
        <el-input v-model="input" style="width: 240px" placeholder="Please input" />
        <p>{{ data }}</p>
        <el-input
    v-model="passwordInput"
    style="width: 240px"
    type="password"
    placeholder="Please input password"
    show-password
  />
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    const input = ref('')
    const passwordInput = ref('')
    const data = "halooo Guys"

    const showData = () => {
        console.log(input.value)
    }
</script>

<style>


</style>