<template>
  <!-- Data filter -->
  <div class="w-full h-20 bg-white rounded-t-lg px-4 py-4 flex items-center">
    <div class="mx-2 text-lg md:text-base">
      <span class="font-medium mr-2">Data filter</span>

      <!-- Date -->
      <el-date-picker
        v-model="value1"
        type="datetime"
        class="mx-2 text-lg res"
        placeholder="Pick a Date"
        format="YYYY/MM/DD HH:mm:ss"
        style="width: 245px; height: 2.5rem"
      />

      <!-- Company -->
      <el-select
        v-model="value"
        placeholder="Company"
        class="mx-2"
        size="large"
        style="width: 245px"
      >
        <el-option
          v-for="item in company"
          :label="item.label"
          :value="item.value"
        />
      </el-select>

      <!-- Status -->
      <el-select
        v-model="values"
        placeholder="Status"
        class="mx-2"
        size="large"
        style="width: 245px"
      >
        <el-option
          v-for="item in status"
          :label="item.label"
          :value="item.value"
        />
      </el-select>

      <!-- Set filter button -->
      <el-button
        size="large"
        class="w-36 mx-2"
        style="background-color: #fb923c"
        type="primary"
      >
        Set filter
      </el-button>

      <!-- Search form -->
      <el-input
        v-model="input2"
        style="width: 260px; height: 2.5rem"
        placeholder="Search"
        class="mx-2"
        :prefix-icon="Search"
      >
        <template #prefix>
          <el-icon class="el-input__icon"><search /></el-icon>
        </template>
      </el-input>

      <!-- Search button -->
      <el-button
        type="primary"
        size="large"
        class="mx-2"
        style="background-color: #fb923c;
            plain"
      >
        <el-icon><Search /></el-icon>
      </el-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ElIcon } from "element-plus";

const value = ref("");
const values = ref("");

const company = [
  {
    value: "Jamkrida",
    label: "Jamkrida Jabar",
  },
  {
    value: "Nexamedia",
    label: "Nexamedia Pratama",
  },
  {
    value: "Ava",
    label: "Ava Revota",
  },
];

const status = [
  {
    value: "Pending",
    label: "Pending Review",
  },
  {
    value: "Accepted",
    label: "Accepted",
  },
  {
    value: "Rejected",
    label: "Rejected",
  },
  {
    value: "OnProgress",
    label: "On Progress",
  },
  {
    value: "Completed",
    label: "Completed",
  },
];
</script>

<style lang="scss" scoped></style>
