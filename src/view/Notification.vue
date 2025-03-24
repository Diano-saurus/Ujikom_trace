<template>
  <!-- Data filter -->
  <div
    class="w-full h-20 bg-white rounded-t-lg px-4 py-4 flex items-center justify-between border-2 shadow-lg"
  >
    <RouterLink to="/layout/Dashboard">
      <el-button
        size="large"
        class="w-24"
        style="background-color: #fb923c"
        type="primary"
      >
        <el-icon><ArrowLeft /></el-icon>
        Back
      </el-button>
    </RouterLink>

    <!-- Right item -->
    <div class="flex items-center gap-2">
      <!-- Date -->
      <el-date-picker
        v-model="value1"
        type="daterange"
        range-separator="S/D"
        start-placeholder="00-00-00"
        end-placeholder="00-00-00"
        size="large"
      />

      <!-- New Group button -->
      <el-button
        size="large"
        class="w-36"
        style="background-color: #fb923c"
        type="primary"
      >
        Set Filter
      </el-button>
    </div>
  </div>

  <!-- Card -->
  <div class="w-full min-h-screen bg-white p-2 mt-2">
    <p class="font-semibold text-2xl px-4 py-2">Notifikasi</p>
    <notifcard
      v-for="card in cards"
      :key="card.title"
      :title="card.title"
      :project="card.project"
      :username="card.username"
      :date="card.date"
      :day="card.day"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import notifcard from "../components/notifcard.vue";

const cards = ref([
  {
    title: "Bug report",
    project: "WebApp Kas(Keuangan)",
    username: "Fadli Mahesa",
    date: "18-01-2024",
    day: "Hari ini, 15:28",
  },
  {
    title: "Bug report",
    project: "WebApp Kas(Keuangan)",
    username: "Fadli Mahesa",
    date: "18-01-2024",
    day: "Hari ini, 15:28",
  },
]);
</script>

<style lang="scss" scoped></style>
