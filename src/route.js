import { createWebHistory, createRouter } from "vue-router";
import AdminPage from "../src/pages/AdminPage.vue";
import LoginPage from "../src/pages/LoginPage.vue";
// import LoginPage from "../src/components/LoginAnimation.vue";
import RegisterPage from "../src/pages/RegisterPage.vue";
import VotePage from "../src/pages/VotePage.vue";
import HomePage from "./pages/UserHomePage.vue";

const routes = [
  { path: "/", name: "LoginPage", component: LoginPage },
  { path: "/adminPage", name: "AdminPage", component: AdminPage },
  { path: "/registerPage", name: "RegisterPage", component: RegisterPage },
  { path: "/votePage", name: "VotePage", component: VotePage },
  { path: "/homePage", name: "homePage", component: HomePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
