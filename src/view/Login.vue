<template>
  <div
    class="bg-orange-400 min-h-screen flex items-center justify-center font-poppins"
  >
    <!-- Main container with two sections -->
    <div
      class="container max-w-5xl bg-white mx-auto m-12 rounded-xl shadow-xl flex h-[650px]"
    >
      <!-- Left side: Form -->
      <div class="w-1/2 p-8">
        <!-- Logo -->
        <img src="../assets/Logo.svg" alt="logo" class="pt-4 w-48 mx-auto" />
        <h1 class="pt-10 font-medium text-3xl">Login</h1>
        <p class="text-md mb-2">Masukan Email dan Password untuk login.</p>

        <!-- Email input -->
        <div class="max-w-sm">
          <el-input
            v-model="email"
            placeholder="Enter Email"
            class="mb-4"
            size="large"
            style="width: 445px"
          />

          <!-- Password input -->
          <el-input
            v-model="password"
            type="password"
            placeholder="Enter Password"
            class="mb-4"
            show-password
            size="large"
            style="width: 445px"
          />

          <!-- Remember me checkbox -->
          <el-checkbox
            v-model="rememberMe"
            label="Remember me"
            class="mb-4 font-bold"
          />
        </div>

        <!-- Login Button -->
        <div class="flex justify-center w-full">
            <el-button
              size="large"
              class="w-full"
              style="background-color: #fb923c"
              type="primary"
              @click="login"
            >
              Login
            </el-button>
        </div>
      </div>

      <!-- Right side: Illustration and text over the image -->
      <div
        class="w-1/2 relative flex justify-center items-center bg-pink-50 rounded-r-lg"
      >
        <!-- Image -->
        <img
          src="../assets/frame.svg"
          alt="Illustration"
          class="-mt-64 w-[500px] h-auto object-cover"
        />

        <!-- Text over the image -->
        <div class="absolute bottom-12 px-4 text-center text-slate-600">
          <h2 class="text-3xl font-semibold">Selamat Datang</h2>
          <p class="text-lg mt-4 max-w-md">
            TRACE merupakan website pengelola User Feedback, sehingga masukan
            dari User akan lebih terorganisir dengan baik dan mudah.
          </p>
          <img src="../assets/nexa.png" alt="nexa" class="w-20 mx-auto pt-4" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios"
import { ref } from "vue";
import Swal from 'sweetalert2'

const email = ref("");
const password = ref("");

const login = async () => {
  try {
    const response = await axios.post("https://b8ae-36-72-54-195.ngrok-free.app/api/login",
      {
        email: email.value,
        password: password.value,
      }
  );
    console.log("API Response:", response.data);
    localStorage.setItem(`Authorization`, `Bearer ${response.data.token}`);
    window.location.href = "http://localhost:5173/layout/dashboard";
  } catch (error) { 
    Swal.fire({
      icon: "error",
      title: "Login Gagal!",
    });
    console.log(error)
  }
};


</script>

<style scoped></style>