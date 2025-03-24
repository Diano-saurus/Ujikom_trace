<template>
  <div class="w-full min-h-full bg-white rounded-lg px-4 py-4">
    <!-- Settings text -->
    <div class="w-full h-16 flex items-center">
      <img src="../assets/Settings.svg" alt="" class="w-8 h-8" />
      <span class="font-semibold text-xl px-2">Settings</span>
    </div>

    <!-- Card -->
    <div class="container mt-2 flex gap-8 overflow-x-auto">
      <Settingscard
        v-for="card in cards"
        :key="card.title"
        :route="card.route"
        :imgSrc="card.imgSrc"
        :title="card.title"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Settingscard from "../components/settingscard.vue";
import user from "../assets/User.svg";
import group from "../assets/UserGroup.svg";
import status from "../assets/Audit.svg";

const cards = ref([
  { route: "mUser", imgSrc: user, title: "User Management" },
  { route: "mApp", imgSrc: group, title: "Master Application" },
  { route: "mStatus", imgSrc: status, title: "Master Status" },
]);
</script>

<style lang="scss" scoped></style>
