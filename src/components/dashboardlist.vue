<template>
  <div class="w-1/3 h-full justify-between flex p-4">
    <div class="flex items-center h-full">
      <img :src="imgSrc" alt="" class="w-12" />
    </div>
    <div class="font-semibold flex flex-col justify-between h-full">
      <h6 class="text-start">{{ title }}</h6>
      <h4 class="text-end text-2xl">{{ amount }}</h4>
    </div>
  </div>
</template>

<script setup>
defineProps({
  imgSrc: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
