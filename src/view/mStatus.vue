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
        Add New Status
        <el-icon><Plus /></el-icon>
      </el-button>

      <el-dialog
        v-model="addVisible"
        title="Add Status Name"
        width="500"
        center
      >
        <el-form
          :inline="true"
          class="demo-form-inline"
          @submit.prevent="createData"
        >
          <el-form-item label="Status Name : ">
            <el-input
              v-model="name"
              placeholder="Enter Status Name"
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

  <!-- Table -->
  <div class="w-full h-[85%] bg-white rounded-b-lg">
    <settingstable
      :settingsTable="settingsTable"
      :headers="tableHeaders"
      :deleteItem="deleteItem"
      :updateItem="updateItem"
      @refresh="getData"
    />
  </div>
</template>

<script setup>
import settingstable from "../components/settingstable.vue";
import { ref, onMounted } from "vue";
import axios from "axios";
import Swal from "sweetalert2";

const tableHeaders = ref([
  { prop: "No", label: "No." },
  { prop: "code", label: "Status Code" },
  { prop: "name", label: "Status Name" },
  { prop: "Action", label: "Action" },
]);

const addVisible = ref(false);
const settingsTable = ref([]);
const name = ref("");

// Get Data
const getData = async () => {
  try {
    const response = await axios.get(
      "https://b8ae-36-72-54-195.ngrok-free.app/api/master-status",
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Full API Response:", response);

    let dataArray = [];
    if (Array.isArray(response.data)) {
      dataArray = response.data;
    } else if (Array.isArray(response.data.data)) {
      dataArray = response.data.data;
    }

    settingsTable.value = dataArray.map((status, index) => ({
      No: index + 1,
      code: status.code || status.id || "Unknown",
      name: status.name || status.status || "Unknown Name",
    }));
  } catch (error) {
    console.error("Error getting data:", error.message);
  }
};

// Add Data
const createData = async () => {
  if (!name.value) {
    return Swal.fire({ icon: "error", title: "Nama Aplikasi Tidak Boleh Kosong!" });
  }

  try {
    await axios.post(
      "https://b8ae-36-72-54-195.ngrok-free.app/api/master-status",
      {
        status: name.value,
      }
    );

    addVisible.value = false;
    Swal.fire({ icon: "success", title: "Berhasil DItambahkan!", timer: 1000 });
    getData();
  } catch (error) {
    Swal.fire({ icon: "error", title: "Gagal Ditambahkan!", timer: 1000 });
    console.error("Error:", error.response?.data || error);
  }
};

// Delete Data
const deleteItem = async (code) => {
  try {
    await axios.delete(
      `https://b8ae-36-72-54-195.ngrok-free.app/api/master-status/${code}`
    );
    Swal.fire({ icon: "success", title: "Berhasil Dihapus!", timer: 1000 });
    getData();
  } catch (error) {
    Swal.fire({ icon: "error", title: "Gagal Dihapus!", timer: 1000 });
    console.error("Delete Error:", error);
  }
};

// Update Data
const updateItem = async (code, newName) => {
  try {
    await axios.put(
      `https://b8ae-36-72-54-195.ngrok-free.app/api/master-status/${code}`,
      {
        status: newName,
      }
    );

    Swal.fire({ icon: "success", title: "Berhasil Diperbarui!", timer: 1000 });
    getData();
  } catch (error) {
    Swal.fire({ icon: "error", title: "Gagal Diperbarui!", timer: 1000 });
    console.error("Update Error:", error);
  }
};

onMounted(getData);
</script>

<style lang="scss" scoped></style>
