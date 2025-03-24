<template>
  <!-- Filter -->
  <div
    class="w-full h-20 bg-white rounded-t-lg px-4 py-4 flex items-center justify-between border-2 shadow-lg mb-4"
  >
    <!-- Back Button -->
    <RouterLink to="/layout/Settings">
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

    <!-- Search Bar -->
    <div class="flex items-center gap-2">
      <el-input
        v-model="search"
        style="width: 260px; height: 2.5rem"
        placeholder="Search"
      >
        <template #prefix>
          <el-icon class="el-input__icon"><Search /></el-icon>
        </template>
      </el-input>

      <!-- Search Button -->
      <el-button type="primary" size="large" style="background-color: #fb923c">
        <el-icon><Search /></el-icon>
      </el-button>

      <!-- Add Data -->
      <el-button
        size="large"
        class="w-36"
        style="background-color: #fb923c"
        type="primary"
        @click="addVisible = true"
      >
        Add New Group
        <el-icon><Plus /></el-icon>
      </el-button>

      <el-dialog
        v-model="addVisible"
        title="Add Application Name"
        width="500"
        center
      >
        <el-form
          :inline="true"
          class="demo-form-inline"
          @submit.prevent="createData"
        >
          <el-form-item label="App Name : ">
            <el-input
              v-model="appName"
              placeholder="Enter App Name"
              clearable
              style="width: 410px"
            />
          </el-form-item>
        </el-form>

        <template #footer>
          <div class="dialog-footer">
            <el-button @click="addVisible = false">Cancel</el-button>
            <el-button
              type="primary"
              @click="createData"
              style="background-color: #fb923c"
              >Confirm</el-button
            >
          </div>
        </template>
      </el-dialog>
    </div>
  </div>
  <div class="w-full h-[85%] bg-white rounded-b-lg">
    <settingstable :settingsTable="settingsTable" :headers="tableHeaders" />
  </div>
</template>

<script setup>
import settingsfilter from "../components/settingsfilter.vue";
import settingstable from "../components/settingstable.vue";
import action from "../assets/Action.svg";
import { ref, onMounted } from "vue";
import axios from "axios";

const tableHeaders = ref([
  { prop: "No", label: "No." },
  { prop: "Usercode", label: "User Code" },
  { prop: "Username", label: "User Name" },
  { prop: "Action", label: "Action" },
]);

const getComments = async () => {
  try {
    const response = await axios.get("https://api.restful-api.dev/objects");
    settingsTable.value = response.data.map((comment) => ({
      No: comment.contents || "-",
      Usercode: comment.usercode || "General",
      Username: comment.username || "Unknown Name",
      Action: action,
    }));
  } catch (error) {
    console.error("Error:", error);
  }
};

onMounted(() => {
  getComments();
});
</script>

<style lang="scss" scoped></style>
