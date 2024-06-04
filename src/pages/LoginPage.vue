<template>
  <div class="">
    <div class="flex bg-primary">
      <div class="flex justify-center items-center w-1/2">
        <div class="w-[70%]"><LoginAnimation /></div>
        <div class="">
          <div class="flex items-center justify-center"></div>
        </div>
      </div>
      <div class="h-screen w-1/2">
        <div class="flex justify-center items-center h-screen">
          <div class="w-[617px] h-[500px] bg-white rounded-2xl p-7 shadow-lg">
            <div
              class="mb-10 font-semibold text-primary cursor-pointer text-xl"
            >
              <span class="text-primary">Login</span> to your account
            </div>

            <div class="pl-7 pr-7">
              <div class="relative mb-6">
                <div
                  class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
                >
                  <UserIcon class="h-9 w-9 text-gray-500" />
                </div>
                <input
                  v-model="username"
                  type="text"
                  id="floating_outlined"
                  class="pl-16 border-b-2 rounded-md block px-2.5 pb-2.5 pt-4 w-full text-lg text-black bg-transparent border-2 border-primary appearance-none dark:text-black dark:primary dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                />
                <label
                  for="floating_outlined"
                  class="ml-12 absolute text-lg text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >Username</label
                >
              </div>
              <div class="relative mb-6">
                <div
                  class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
                >
                  <LockClosedIcon class="h-9 w-9 text-gray-500" />
                </div>
                <input
                  v-model="password"
                  type="password"
                  id="floating_outlined2"
                  class="pl-16 text-lg border-b-2 rounded-md block px-2.5 pb-2.5 pt-4 w-full text-gray-900 bg-transparent border-2 border-primary appearance-none dark:text-black dark:primary dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                />
                <label
                  for="floating_outlined2"
                  class="ml-12 absolute text-lg text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >Password</label
                >
              </div>

              <router-link class="" to="/">
                <div class="text-start text-sm font-medium text-primary">
                  Forgot Password?
                  <span class="hover:underline text-blue-500 cursor-pointer">
                    Click Here</span
                  >
                </div>
              </router-link>

              <button
                class="w-full h-12 bg-primary mt-16 text-white rounded-lg font-semibold mb-2 hover:bg-white hover:text-primary hover:border-primary border-primary border-2 transition duration-300"
                type="submit"
                @click="login"
              >
                Submit
              </button>

              <router-link class="" to="/registerPage">
                <div class="text-center text-sm font-medium text-primary">
                  No account yet?
                  <span class="hover:underline text-blue-500 cursor-pointer">
                    Register</span
                  >
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
// import logo from "/src/assets/voting-amico.svg";
import LoginAnimation from "../components/LoginAnimation.vue";

import {
  UserIcon,
  LockClosedIcon,
  UserGroupIcon,
} from "@heroicons/vue/24/outline";
</script>
