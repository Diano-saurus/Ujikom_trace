<template>
  <div class="flex flex-col min-h-screen bg-slate-200">
    <div class="flex flex-1">
      <!-- Main Content Wrapper -->
      <div class="flex flex-col w-full">
        <!-- Header -->
        <div
          class="flex w-full h-20 bg-white items-center justify-between px-4"
        >
          <a href="" class="flex border-slate-200 shadow-sm">
            <img
              src="../assets/Logo.svg"
              alt="dashboard"
              class="w-[150px] mx-6 my-3"
            />
          </a>

          <div class="m-2 flex items-center">
            <router-link to="/navbar/notification">
              <img
                src="../assets/Notification.svg"
                alt="Notification Icon"
                class="w-8 h-8 mx-2"
              />
            </router-link>

            <!-- PopOver -->
            <div class="w-12 h-12 overflow-hidden rounded-full">
              <el-popover center :width="200" trigger="click">
                <template #reference>
                  <img src="../assets/profile.jpeg" class="cursor-pointer"/>
                </template>
                <template #default>
                  <div>
                    <img
                      src="../assets/profile.jpeg"
                      class="w-16 h-16 mx-auto rounded-full"
                    />
                    <p class="font-semibold text-lg mx-auto">Radian</p>
                    <el-button
                      @click="logOut"
                      type="danger"
                      plain
                      class="w-full"
                      >Log Out</el-button
                    >
                  </div>
                </template>
              </el-popover>
            </div>
          </div>
        </div>

        <!-- Content -->
        <div class="flex-1 bg-slate-100 p-4">
          <router-view />
        </div>

        <!-- Footer -->
        <div class="w-full bg-orange-50">
          <div class="container mx-auto py-2 text-end text-sm">
            <span class="font-semibold text-slate-800"
              >2023©Nexamedia Pratama</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const logOut = async () => {
  localStorage.removeItem(`Authorization`);
  window.location.href = "http://localhost:5173";
};
</script>

<style lang="scss" scoped></style>
