<template>
  <div class="w-full">
    <!-- Table -->
    <el-table
      :data="tableData"
      header-cell-class-name="table-header"
      cell-class-name="table-cell text-base"
      class="w-full"
      height="475px"
    >
      <!-- Header -->
      <el-table-column
        v-for="(header, index) in headers"
        :key="index"
        :prop="header.prop"
        :label="header.label"
        align="center"
        header-align="center"
        class="text-center"
      >
        <!-- Bold Header -->
        <template #header="scope">
          <div class="text-lg font-semibold text-slate-800">
            {{ scope.column.label }}
          </div>
        </template>

        <!-- Status Column -->
        <!-- <template v-if="header.prop === 'Status'" #default="scope">
          <img :src="scope.row.Status" alt="status" class="w-28 mx-auto" />
        </template> -->

        <!-- Status Column End -->

        <!-- Action Column -->
        <template v-if="header.prop === 'Action'" #default="scope">
          <!-- Action Button -->
          <el-button
            class="w-12 mx-auto"
            type="text"
            plain
            @click="openDialog(scope.row)"
          >
            <img src="../assets/Action.svg" alt="action icon" class="h-8" />
          </el-button>
          <!-- Action Button End -->
        </template>
        <!-- Action Column End -->
      </el-table-column>
    </el-table>

    <!-- Action Dialog -->
    <el-dialog v-model="visible" title="Bug Report Detail" width="600" center>
      <div v-if="selectedRow">
        <!-- Header -->
        <div
          class="my-2 p-2 flex justify-between border-t-4 border-slate-200 rounded-md items-center"
        >
          <p class="font-semibold">{{ selectedRow.Name }}</p>
          <!-- <img :src="selectedRow.Status" alt="status" class="h-6" /> -->
        </div>

        <!-- Title -->
        <div
          class="my-2 p-2 flex border-2 border-slate-200 rounded-md items-center gap-2"
        >
          <p>
            Report Title:
            <span class="font-semibold">{{ selectedRow.Contents }}</span>
          </p>
        </div>

        <!-- Info -->
        <div class="my-2 p-2 border-2 border-slate-200 rounded-md items-center">
          <div class="flex gap-2 py-1">
            <p>
              Email: <span class="font-semibold">{{ selectedRow.Email }}</span>
            </p>
          </div>
        </div>

        <!-- Desc -->
        <div
          class="my-2 p-2 flex border-2 border-slate-200 rounded-md items-center gap-2"
        >
          <p>Description: <span class="font-semibold">{{ selectedRow.Description }}</span></p>
        </div>

        <!-- File  -->
        <div class="my-2 p-2 items-center">
          <p>File Attachment:</p>
          <div v-if="selectedRow.Image">
            <img
              :src="selectedRow.Image"
              alt="Screenshot"
              class="w-64 h-auto my-2 rounded-lg shadow"
            />
          </div>
          <p v-else class="font-semibold">No file available</p>
        </div>
      </div>

      <!-- Dialog Footer -->
      <template #footer>
        <div class="dialog-footer">
          <div class="flex pb-2">
            <el-button
              type="danger"
              @click="visible = false"
              plain
              :style="{ width: '50%' }"
            >
              <el-icon :style="{ marginRight: '8px' }"><CircleClose /></el-icon>
              Reject
            </el-button>
            <el-button
              type="success"
              @click="visible = false"
              :style="{ width: '50%' }"
            >
              <el-icon :style="{ marginRight: '8px' }"><CircleCheck /></el-icon>
              Accept
            </el-button>
          </div>
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
</template>

<script setup>
import { ref } from "vue";
import { ElButton, ElDialog } from "element-plus";

const props = defineProps({
  tableData: { type: Array, required: true },
  headers: { type: Array, required: true },
});

const visible = ref(false);
const selectedRow = ref(null);

const openDialog = (row) => {
  selectedRow.value = row;
  visible.value = true;
};
</script>

<style>
.my-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
}
</style>
