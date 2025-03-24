<template>
  <div class="max-w-full min-h-full bg-white rounded-lg">
    <!-- Dashboard Header -->
    <div class="w-full h-16 px-4 flex items-center">
      <img src="../assets/Dashboard.svg" alt="" class="w-8 h-8" />
      <span class="font-semibold text-xl px-2">Dashboard</span>
    </div>

    <!-- Top bar -->
    <div class="flex gap-4 sticky">
      <!-- User Feedback -->
      <div class="w-1/3 h-28 bg-slate-100 mx-4 rounded-lg border-2 container">
        <div class="flex justify-between">
          <div class="flex flex-col h-full p-6">
            <span class="text-[1.8rem] font-semibold mb-2"
              >User's Feedback</span
            >
            <p class="text-sm text-gray-600">January 2024</p>
          </div>
          <!-- Total Feedback -->
          <div class="w-[10.5rem] h-24 bg-orange-50 m-2 rounded-lg">
            <div class="py-2 flex justify-between">
              <h4 class="font-semibold text-sm mx-2 py-1">Total Feedback</h4>
              <el-button
                class="w-6 mx-4"
                type="text"
                plain
                @click="dateVisible = true"
              >
                <img src="../assets/more_horiz.svg" alt="action icon" />
              </el-button>
            </div>
            <div class="flex flex-col h-14 mx-2">
              <h2 class="text-end text-4xl font-bold">6</h2>
            </div>
          </div>
        </div>
      </div>

      <!-- List -->
      <div class="w-2/3 h-28 bg-slate-100 mx-4 rounded-lg border-2 flex">
        <dashboardlist
          v-for="data in datas"
          :key="data.title"
          :imgSrc="data.imgSrc"
          :title="data.title"
          :amount="data.amount"
          class="border-l-2"
        />
      </div>
    </div>

    <!-- Main Section -->
    <div class="m-4">
      <!-- App List Header -->
      <div class="w-full h-16 flex items-center">
        <img src="../assets/App.svg" alt="" class="w-8 h-8" />
        <span class="font-semibold text-xl px-2">App's List</span>
      </div>
      <div class="flex justify-between gap-8">
        <dashboardtable :tableData="tableData" />
      </div>

      <!-- General Feedback Header -->
      <div class="w-full h-16 mt-4 flex items-center">
        <img src="../assets/Mail.svg" alt="" class="w-8 h-8" />
        <span class="font-semibold text-xl px-2">General Feedback List</span>
      </div>

      <!-- Feedback Table -->
      <div class="w-full h-[100%] bg-slate-100 border-2 border-slate-200">
        <el-table :data="feedbackList" style="width: 100%; height: 100%">
          <!-- Feedback Column -->
          <el-table-column label="Feedback" width="1250">
            <template #header="scope">
              <div class="text-base font-semibold text-slate-800">
                {{ scope.column.label }}
              </div>
            </template>
            <template #default="scope">
              <div>
                <p class="font-bold">{{ scope.row.title }}</p>
                <p class="text-gray-600">{{ scope.row.description }}</p>
              </div>
            </template>
          </el-table-column>

          <!-- Action Column -->
          <el-table-column label="Action" width="150">
            <template #header="scope">
              <div class="text-base font-semibold text-slate-800">
                {{ scope.column.label }}
              </div>
            </template>
            <template #default="scope">
              <el-button text @click="openDialog(scope.row)">
                Lihat<el-icon :style="{ marginLeft: '4px' }"><Right /></el-icon>
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <!-- Feedback Dialog -->
      <el-dialog v-model="visible" title="Bug Report Detail" width="600" center>
        <!-- Title -->
        <div
          class="my-2 p-2 flex border-2 border-slate-200 rounded-md items-center gap-2"
        >
          <p>
            Feedback Title:
            <span class="font-semibold">{{ selectedFeedback?.title }}</span>
          </p>
        </div>

        <!-- Info -->
        <div class="my-2 p-2 border-2 border-slate-200 rounded-md items-center">
          <div class="flex gap-2 py-1">
            <p>
              User Name:
              <span class="font-semibold">{{ selectedFeedback?.name }}</span>
            </p>
          </div>
          <div class="flex gap-2 py-1">
            <p>
              User Group:
              <span class="font-semibold">{{ selectedFeedback?.group }}</span>
            </p>
          </div>
          <div class="flex gap-2 py-1">
            <p>
              Email:
              <span class="font-semibold">{{ selectedFeedback?.mail }}</span>
            </p>
          </div>
        </div>

        <!-- Desc -->
        <div
          class="my-2 p-2 flex border-2 border-slate-200 rounded-md items-center gap-2"
        >
          <p>
            Description:
            <span class="font-semibold">{{
              selectedFeedback?.description
            }}</span>
          </p>
        </div>

        <!-- Footer -->
        <template #footer>
          <div class="dialog-footer">
            <el-button
              type="info"
              @click="visible = false"
              plain
              :style="{ width: '100%' }"
            >
              Close
            </el-button>
          </div>
        </template>
      </el-dialog>
    </div>
  </div>        
</template>

<script setup>
import { ref, onMounted } from "vue";
import dashboardlist from "../components/dashboardlist.vue";
import dashboardtable from "../components/dashboardtable.vue";
import bug from "../assets/Bug.svg";
import list from "../assets/List.svg";
import mail from "../assets/Mail.svg";
import axios from "axios";

const dateVisible = ref(false);

const visible = ref(false);

const selectedFeedback = ref();

const openDialog = (row) => {
  selectedFeedback.value = row;
  visible.value = true;
};

const datas = ref([
  { imgSrc: bug, title: "Bug Report", amount: 2 },
  { imgSrc: list, title: "Feature request", amount: 2 },
  { imgSrc: mail, title: "General Feedback", amount: 3 },
]);

const tableData = ref([]);

const getTableData = async () => {
  try {
    const response = await axios.get("https://b8ae-36-72-54-195.ngrok-free.app/api/master-app", {
      headers: {
          "ngrok-skip-browser-warning": "true",
          "Content-Type": "application/json",
        },
    });

    const dataArray = Array.isArray(response.data) 
      ? response.data 
      : response.data.data;

      tableData.value = dataArray.map((app, index) => ({
      No: index + 1,
      Name: app.app_name,
      Status: app.status,
    }));
  } catch (error) {
    console.error("Error getting data:", error.response?.data || error);
  }
};

onMounted(() => {
  getTableData();
});


const feedbackList = ref([
  {
    title: "Tema Baru Untuk Dashboard",
    name: "Puji Susanto",
    group: "SMI",
    mail: "JJ.SMI@gmail.com",
    description:
      "Sepertinya lebih bagus jika bagian Dashboard mendapatkan peningkatan dari segi tampilan",
  },
  {
    title: "Sistem Rating",
    name: "Puji Susanto",
    group: "SMI",
    mail: "JJ.SMI@gmail.com",
    description: "Tingkatkan sistem teknis untuk pemberian rating webapp",
  },
]);
</script>

<style scoped>
.my-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
  font-weight: 1000;
}

.el-table {
  --el-table-bg-color: rgb(241 245 249);
  --el-table-tr-bg-color: rgb(241 245 249);
  --el-table-header-bg-color: rgb(241 245 249);
  border-radius: 8px;
  overflow: hidden;
}
</style>
