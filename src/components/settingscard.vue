<template>
  <router-link :to="{ name: route }" class="block">
    <div
      class="w-[350px] h-24 px-4 rounded-lg shadow-md border-2 flex items-center hover:shadow-lg transition duration-300 hover:scale-[1.005]"
    >
      <img :src="imgSrc" alt="icon" class="w-16 h-16" />
      <span class="font-semibold text-xl px-4">{{ title }}</span>
    </div>
  </router-link>
</template>

<script setup>
defineProps({
  route: {
    type: String,
    required: true,
  },
  imgSrc: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>

<style scoped></style>
