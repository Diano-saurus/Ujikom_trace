<template>
  <div class="flex w-full gap-4">
    <!-- Table -->
    <div class="w-full h-80 bg-slate-100 border-2 rounded-lg">
      <el-table :data="tableData" height="100%" width="100%">
        <!-- First Column -->
        <el-table-column
          prop="Name"
          label="Web/App Name"
          align="left"
          header-align="left"
          width="1200px"
        >
          <template #header="scope">
            <div class="text-base font-semibold text-slate-800">
              {{ scope.column.label }}
            </div>
          </template>
        </el-table-column>

        <!-- Status Column -->
        <el-table-column
          prop="Status"
          label="Status"
          align="center"
          header-align="center"
        >
          <template #header="scope">
            <div class="text-base font-semibold text-slate-800">
              {{ scope.column.label }}
            </div>
          </template>
          <template #default="scope">
            <img
              :src="scope.row.Status"
              alt="Status Icon"
              class="w-16 mx-auto object-contain"
            />
          </template>
        </el-table-column>

        <!-- Action Column -->
        <el-table-column
          prop="Action"
          label="Action"
          align="center"
          header-align="center"
          width="86px"
        >
          <template #header="scope">
            <div class="text-base font-semibold text-slate-800">
              {{ scope.column.label }}
            </div>
          </template>
          <template #default="scope">
            <el-button
              style="width: 32px"
              type="text"
              plain
              @click="openDialog(scope.row)"
            >
              <img
                src="../assets/Action.svg"
                alt="action"
                class="h-6 w-6 object-cover"
              />
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- Table Dialog -->
    <el-dialog
      v-model="dialogVisible"
      title="App's List Detail"
      width="500"
      center
    >
      <div
        class="my-2 p-2 flex justify-between border-2 border-slate-200 rounded-md items-center"
      >
        <p class="font-semibold">{{ selectedRow?.Name }}</p>
        <img :src="selectedRow?.Status" alt="Status Icon" />
      </div>
      <div
        class="my-2 p-2 flex justify-end border-2 border-slate-200 rounded-md items-center"
      >
        <el-dropdown placement="bottom" size="small">
          <el-button> Change Status </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="updateStatus('Normal')"
                >Normal</el-dropdown-item
              >
              <el-dropdown-item @click="updateStatus('Traffic')"
                >Traffic</el-dropdown-item
              >
              <el-dropdown-item @click="updateStatus('Down')"
                >Down</el-dropdown-item
              >
              <el-dropdown-item @click="updateStatus('Maintenance')"
                >Maintenance</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <template #footer>
        <div class="dialog-footer flex">
          <el-button
            type="danger"
            @click="cancelChange"
            plain
            :style="{ width: '50%' }"
          >
            Cancel
            <el-icon :style="{ marginLeft: '8px' }"><CircleClose /></el-icon>
          </el-button>
          <el-button
            type="success"
            @click="confirmChange"
            :style="{ width: '50%' }"
          >
            Confirm
            <el-icon :style="{ marginLeft: '8px' }"><CircleCheck /></el-icon>
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ElButton, ElDialog } from "element-plus";
import normal from "../assets/Normal.png";
import traffic from "../assets/Traffic.png";
import down from "../assets/Down.png";
import maintenance from "../assets/Maintenance.png";

const dialogVisible = ref(false);

const selectedRow = ref(null);

const tempStatus = ref(null);

const openDialog = (row) => {
  selectedRow.value = row;
  tempStatus.value = row.Status;
  dialogVisible.value = true;
};

const statusMap = {
  Normal: normal,
  Traffic: traffic,
  Down: down,
  Maintenance: maintenance,
};

const updateStatus = (newStatus) => {
  tempStatus.value = statusMap[newStatus];
};

const cancelChange = () => {
  tempStatus.value = selectedRow.value.Status;
  dialogVisible.value = false;
};

const confirmChange = () => {
  selectedRow.value.Status = tempStatus.value;
  dialogVisible.value = false;
};

defineProps({
  tableData: {    
    type: Array,
    required: true,
  }
});
</script>

<style scoped>
.table-cell {
  padding: 8px;
}

.el-table {
  --el-table-bg-color: rgb(241 245 249);
  --el-table-tr-bg-color: rgb(241 245 249);
  --el-table-header-bg-color: rgb(241 245 249);
}
</style>
