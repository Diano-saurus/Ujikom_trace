import { defineAsyncComponent } from "vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Login",
    component: defineAsyncComponent(() => import("../view/Login.vue")),
  },

  // Layout Routes
  {
    path: "/layout",
    name: "Layout",
    component: defineAsyncComponent(() =>
      import("../layout/DefaultLayout.vue")
    ),
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: defineAsyncComponent(() => import("../view/Dashboard.vue")),
      },
      {
        path: "bug",
        name: "Bug",
        component: defineAsyncComponent(() => import("../view/Bug.vue")),
      },
      {
        path: "request",
        name: "Request",
        component: defineAsyncComponent(() => import("../view/Request.vue")),
      },
      {
        path: "inbox",
        name: "Inbox",
        component: defineAsyncComponent(() => import("../view/Inbox.vue")),
      },
      {
        path: "settings",
        name: "Settings",
        component: defineAsyncComponent(() => import("../view/Settings.vue")),
      },
    ],
  },

  //Navbar routes
  {
    path: "/navbar",
    name: "Navbar",
    component: defineAsyncComponent(() => import("../layout/navbar.vue")),
    children: [
      {
        path: "user",
        name: "mUser",
        component: defineAsyncComponent(() => import("../view/mUser.vue")),
      },
      {
        path: "app",
        name: "mApp",
        component: defineAsyncComponent(() => import("../view/mApp.vue")),
      },
      {
        path: "status",
        name: "mStatus",
        component: defineAsyncComponent(() => import("../view/mStatus.vue")),
      },
      {
        path: "notification",
        name: "Notification",
        component: defineAsyncComponent(() =>
          import("../view/Notification.vue")
        ),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
