<template>
  <div class="px-4 py-2">
    <div
      class="w-full h-20 bg-slate-100 mt-2 rounded-lg flex items-center justify-between px-4 text-slate-800 shadow-md"
    >
      <!-- Left Section -->
      <p class="text-lg">
        {{ title }} - <span class="font-semibold">{{ project }}</span> oleh
        <span class="font-semibold">{{ username }}</span> pada
        <span class="font-semibold">{{ date }}</span>
      </p>
      <!-- Right Section -->
      <p class="text-base">{{ day }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  project: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
