<template>
  <!-- Data Filter -->
  <datafilter />

  <!-- Main Page -->
  <div class="w-full h-[85%] mt-4 bg-white rounded-b-lg">
    <!-- Bug Text -->
    <div class="w-full h-16 px-4 -mb-2 flex items-center">
      <img src="../assets/Bug.svg" alt="" class="w-8 h-8" />
      <span class="font-semibold text-xl px-2">Bug Report List</span>
    </div>

    <!-- Table -->
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
  { prop: "Email", label: "Email" },
  { prop: "Contents", label: "Report title" },
  { prop: "Status", label: "Status" },
  { prop: "Action", label: "Action" },
]);

const tableData = ref([]);

const getData = async () => {
  try {
    const token = localStorage.getItem(`Authorization`);

    const response = await axios.get("https://b8ae-36-72-54-195.ngrok-free.app/api/bug-reports/all",{
      headers:{
        Authorization: token,
       'ngrok-skip-browser-warning': 'true',
       'Content-Type': 'application/json',
    }});

    const dataArray = Array.isArray(response.data) 
      ? response.data 
      : response.data.data || [];

    tableData.value = dataArray.map((bug) => ({
      id: bug.id,
      Name: bug.app_name || "Unknown Name",
      Email: bug.user_email || "-",
      Contents: bug.report_title || "No Title",
      Description: bug.detail_report || "No description",
      Status: bug.status || "-",
      Action: action,
      Image: bug.file_report,
    }));
  } catch (error) {
    console.error("Error:", error);
    
  }
};

onMounted(() => {
  getData();
});
</script>
