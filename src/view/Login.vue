<template>
    <p
    class="text-red-400"
    @click="router.push('dashboard')"
    >Haloo</p>
    <el-button type="primary">Primary</el-button>

</template>

<script setup>
import { useRouter } from "vue-router";
let router = useRouter()
   

</script>

<style>


</style>