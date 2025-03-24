<template>
  <div class="w-full px-4">
    <el-table
      :data="settingsTable"
      header-cell-class-name="table-header"
      cell-class-name="table-cell text-base"
      class="w-full"
    >
      <el-table-column
        v-for="(header, index) in headers"
        :key="index"
        :prop="header.prop"
        :label="header.label"
        align="center"
      >
        <template #header="scope">
          <div class="text-base font-semibold text-slate-800">
            {{ scope.column.label }}
          </div>
        </template>

        <!-- Action Column -->
        <template v-if="header.prop === 'Action'" #default="{ row }">
          <el-button
            class="w-12 mx-auto"
            type="text"
            plain
            @click="openDialog(row)"
          >
            <img src="../assets/Action.svg" alt="action icon" class="h-8" />
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- Dialog -->
    <el-dialog v-model="visible" title="Detail" width="600" center>
      <!-- Dialog Title -->
      <div
        class="my-2 p-2 flex border-2 border-slate-200 rounded-md items-center gap-2"
      >
        <p>
          ID: <span class="font-semibold">{{ selectedRow?.code || "N/A" }}</span>
        </p>
      </div>

      <!-- Dialog Data -->
      <div class="my-2 p-2 border-2 border-slate-200 rounded-md">
        <span class="px-2">Name:</span>
        <el-input v-model="selectedRow.name" style="width: 85%" class="mx-2"/>
      </div>

      <!-- Dialog Footer -->
      <template #footer>
        <div class="dialog-footer">
          <div class="flex pb-2">
            <el-button
              type="danger"
              @click="handleDelete"
              :style="{ width: '50%' }"
            >
              <el-icon :style="{ marginRight: '8px' }"><CircleClose /></el-icon>
              Delete
            </el-button>
            <el-button
              type="warning"
              @click="handleUpdate"
              :style="{ width: '50%' }"
            >
              <el-icon :style="{ marginRight: '8px' }"><CircleCheck /></el-icon>
              Update
            </el-button>
          </div>
          <el-button type="info" @click="visible = false" plain :style="{ width: '100%' }">
            Close
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import { ElMessageBox } from "element-plus";

const props = defineProps({
  settingsTable: { type: Array, required: true },
  headers: { type: Array, required: true },
  deleteItem: { type: Function, required: true },
  updateItem: { type: Function, required: true },
});

const visible = ref(false);
const selectedRow = ref({});

const openDialog = (row) => {
  selectedRow.value = { ...row };
  visible.value = true;
};

// Delete Function
const handleDelete = async () => {
  try {
    await ElMessageBox.confirm("Apakah anda yakin untuk menghapus data?", "Warning", {
      confirmButtonText: "Ok",
      cancelButtonText: "Cancel",
      type: "warning",
    });

    await props.deleteItem(selectedRow.value.code);
    visible.value = false;
  } catch (error) {
    console.error("Delete Error:", error);
  }
};

// Update Function
const handleUpdate = async () => {
  try {
    await props.updateItem(selectedRow.value.code, selectedRow.value.name);
    visible.value = false;
  } catch (error) {
    console.error("Update Error:", error);
  }
};
</script>

<style scoped>
.table-header {
  font-weight: bold;
  text-transform: uppercase;
}
</style>
