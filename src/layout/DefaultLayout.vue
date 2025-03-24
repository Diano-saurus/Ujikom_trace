<template>
  <div class="flex flex-col min-h-screen bg-slate-200">
    <!-- Sidebar and Header Wrapper -->
    <div class="flex flex-1">
      <!-- Sidebar -->
      <div class="bg-white w-80 border-x-2 flex-shrink-0">
        <a href="" class="flex border-b-2 border-slate-200 shadow-sm">
          <img
            src="../assets/Logo.svg"
            alt="dashboard"
            class="w-[150px] mx-6 my-3"
          />
        </a>
        <div class="container my-4 px-8">
          <nav>
            <router-link
              to="/layout/dashboard"
              class="w-full flex items-center h-16 rounded-xl px-2"
              active-class="bg-orange-100"
            >
              <img src="../assets/Dashboard.svg" alt="" class="w-10" />
              <span class="px-4 text-slate-700">Dashboard</span>
            </router-link>
            <router-link
              to="/layout/bug"
              class="w-full flex items-center h-16 rounded-xl px-2 my-4"
              active-class="bg-orange-100"
            >
              <img src="../assets/Bug.svg" alt="" class="w-10" />
              <span class="px-4 text-slate-700">Bug Report List</span>
            </router-link>
            <router-link
              to="/layout/request"
              class="w-full flex items-center h-16 rounded-xl px-2 my-4"
              active-class="bg-orange-100"
            >
              <img src="../assets/List.svg" alt="" class="w-10" />
              <span class="px-4 text-slate-700">Feature Request List</span>
            </router-link>
            <router-link
              to="/layout/inbox"
              class="w-full flex items-center h-16 rounded-xl px-2 my-4"
              active-class="bg-orange-100"
            >
              <img src="../assets/Total.svg" alt="" class="w-10" />
              <span class="px-4 text-slate-700">Inbox</span>
            </router-link>
            <router-link
              to="/layout/settings"
              class="w-full flex items-center h-16 rounded-xl px-2 my-4"
              active-class="bg-orange-100"
            >
              <img src="../assets/Settings.svg" alt="" class="w-10" />
              <span class="px-4 text-slate-700">Settings</span>
            </router-link>
          </nav>
        </div>
      </div>

      <!-- Main Content Wrapper -->
      <div class="flex flex-col w-full">
        <!-- Header -->
        <div
          class="flex w-full h-20 bg-white items-center justify-end px-4 object-cover"
        >
          <div class="mx-2">
            <router-link to="/navbar/notification">
              <img src="../assets/Notification.svg" alt="" />
            </router-link>
          </div>

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
                  <el-button @click="logOut" type="danger" plain class="w-full"
                    >Log Out</el-button
                  >
                </div>
              </template>
            </el-popover>
          </div>
        </div>

        <!-- Content -->
        <div class="flex-1 bg-slate-100 p-4">
          <router-view />
        </div>

        <!-- Footer -->
        <div class="bg-orange-50">
          <div class="container w-full py-2">
            <div class="grid grid-cols-1 gap-7 text-end px-4 text-sm">
              <span class="font-semibold text-slate-800"
                >2023©Nexamedia Pratama</span
              >
            </div>
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
