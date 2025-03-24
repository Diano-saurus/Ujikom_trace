<template>
  <datafilter />

  <div class="w-full h-[85%] mt-4 bg-white rounded-b-lg">
    <div class="w-full h-16 px-4 mb-4 flex items-center">
      <img src="../assets/List.svg" alt="" class="w-8 h-8" />
      <span class="font-semibold text-xl px-2">Feature Request List</span>
    </div>

    <tabledata :tableData="tableData" :headers="tableHeaders" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import datafilter from "../components/datafilter.vue";
import tabledata from "../components/tabledata.vue";
import status from "../assets/Status.svg";
import action from "../assets/Action.svg";
import axios from "axios";

const tableHeaders = ref([
  { prop: "Name", label: "App/Web Name" },
  { prop: "Username", label: "User name" },
  { prop: "Usergroup", label: "User group" },
  { prop: "Email", label: "Email" },
  { prop: "Contents", label: "Feature Name" },
  { prop: "Status", label: "Status" },
  { prop: "Action", label: "Action" },
]);

const tableData = ref([]);

const getComments = async () => {
  try {
    const response = await axios.get("https://api.restful-api.dev/objects");
    tableData.value = response.data.map((comment) => ({
      id: comment.id,
      Name: comment.name || "Unknown Name",
      Username: comment.username || "Unknown User",
      Usergroup: comment.usergroup || "General",
      Email: comment.email || "example@gmail.com",
      Contents: comment.contents || "No Title",
      Status: status,
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
