<template>
  <div>
    <template>
      <div class="flex bg-secondary h-screen w-screen">
        <div class="w-[20%] bg-primary h-screen">
          <div class="h-[25%] w-full flex items-center justify-center">
            <!-- <img class="w-80" src="../assets/SWIFTAID_+.png" alt="" /> -->
          </div>
          <div
            class="h-[75%] w-full flex flex-col items-end text-3xl space-y-2 text-white font-medium"
          >
            <div
              :class="currentTab === 0 ? 'active-tab' : 'general-tab'"
              @click="currentTab = 0"
            >
              <div class="flex gap-2 cursor-pointer">
                <div>
                  <mdicon
                    class=""
                    name="view-dashboard"
                    :width="65"
                    :height="65"
                  />
                </div>
                <div class="flex items-center">Dashboard</div>
              </div>
            </div>

            <div
              :class="currentTab === 1 ? 'active-tab' : 'general-tab'"
              @click="currentTab = 1"
            >
              <div class="flex gap-2 cursor-pointer">
                <div>
                  <mdicon
                    class=""
                    name="chart-bar-stacked"
                    :width="65"
                    :height="65"
                  />
                </div>
                <div class="flex items-center">Reports</div>
              </div>
            </div>

            <div
              :class="currentTab === 2 ? 'active-tab' : 'general-tab'"
              @click="currentTab = 2"
            >
              <div class="flex gap-2 cursor-pointer">
                <div>
                  <mdicon
                    class=""
                    name="ClipboardList"
                    :width="65"
                    :height="65"
                  />
                </div>
                <div class="flex items-center">Records</div>
              </div>
            </div>

            <div
              :class="currentTab === 3 ? 'active-tab' : 'general-tab'"
              @click="currentTab = 3"
            >
              <div class="flex gap-2 cursor-pointer">
                <div>
                  <mdicon
                    class=""
                    name="MapMarkerQuestion"
                    :width="65"
                    :height="60"
                  />
                </div>
                <div class="flex items-center">Help</div>
              </div>
            </div>

            <div
              :class="currentTab === 4 ? 'active-tab' : 'general-tab'"
              @click="currentTab = 4"
            >
              <div class="flex gap-2 cursor-pointer">
                <div>
                  <mdicon class="" name="logout" :width="65" :height="65" />
                </div>
                <div class="flex items-center">Sign Out</div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-[80%]">
          <div class="h-[13%] w-full p-5">
            <div class="flex w-full h-full bg-white rounded-lg shadow-xl">
              <div class="w-[77%] p-3">
                <div
                  class="w-[100%] h-full rounded-xl text-primary font-semibold text-4xl flex items-center justify-start"
                >
                  Welcome Back, {{ firstName }}
                </div>
              </div>
              <div class="flex w-[23%]">
                <div class="w-[25%] flex items-center justify-end">
                  <mdicon
                    class="text-primary"
                    name="account-circle"
                    :width="70"
                    :height="70"
                  />
                </div>
                <div class="w-[75%]">
                  <div
                    class="pt-5 h-[50%] text-xl font-medium flex items-center justify-center text-primary"
                  >
                    <div>{{ lastName }}dadawd, {{ firstName }}awdawd</div>
                  </div>
                  <div
                    class="pb-5 h-[50%] text-l flex items-center justify-center text-primary"
                  >
                    Operator
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Current tab -->
          <Transition name="fade" mode="out-in">
            <DashboardTab v-if="currentTab === 0" />
            <Tab2 v-else-if="currentTab === 1" />
            <Tab3 v-else-if="currentTab === 2" />
            <Tab4 v-else-if="currentTab === 3" />
          </Transition>
        </div>
      </div>
      <!-- <div v-else class="flex justify-center items-center h-48">
        <div
          class="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500"
        ></div>
        <div class="ml-4 text-purple-500">Loading...</div>
      </div> -->
    </template>
  </div>
</template>
<script setup>
import { ref } from "vue";

import Dashboard from "../userTabs/DashboardTab.vue";
import Tab2 from "../userTabs/Tab2.vue";
import Tab3 from "../userTabs/Tab3.vue";
import Tab4 from "../userTabs/Tab4.vue";

import { useRouter } from "vue-router";
const currentTab = ref(0);
</script>
