<template>
  <div
    class="flex min-h-screen bg-slate-100 font-inter relative overflow-hidden lg:overflow-visible"
  >
    <!-- Mobile Sidebar Overlay -->
    <div
      v-if="isSidebarOpen"
      @click="isSidebarOpen = false"
      class="fixed inset-0 bg-black/50 z-40 lg:hidden"
    ></div>

    <!-- ===== SIDEBAR ===== -->
    <aside
      :class="[
        'w-[280px] min-w-[280px] bg-white flex flex-col py-6 shadow-[4px_0_24px_rgba(0,0,0,0.05)] lg:shadow-sm fixed lg:sticky top-0 h-[100dvh] overflow-y-auto z-50 transition-transform duration-300',
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
      ]"
    >
      <!-- Logo -->
      <div class="px-5 pb-5 border-b border-slate-100 flex items-center justify-between">
        <span class="text-xl font-bold text-blue-700 leading-tight"
          >AI Speaking Assistant</span
        >
        <button
          @click="isSidebarOpen = false"
          class="lg:hidden text-slate-400 hover:text-slate-700"
        >
          <i class="fa-solid fa-xmark text-xl"></i>
        </button>
      </div>

      <!-- User Info -->
      <div class="flex items-center gap-3 mx-3 my-4 p-3 bg-slate-50 rounded-xl">
        <div class="w-10 h-10 rounded-full overflow-hidden bg-blue-100 flex-shrink-0">
          <img
            src="~/assets/images/433966299_919881073210081_7511676866786403341_n.jpg"
            alt="Avatar"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="flex flex-col gap-0.5">
          <span class="text-[13px] font-bold text-slate-800">Cấp 4</span>
          <span class="text-[11px] font-semibold text-blue-700">HSK 3</span>
        </div>
      </div>

      <!-- Navigation -->
      <nav class="flex-1 px-0 py-1">
        <ul class="list-none p-0 m-0 space-y-0.5">
          <li v-for="item in navItems" :key="item.path">
            <NuxtLink
              :to="item.path"
              class="flex items-center gap-3 px-5 py-3 text-[14px] font-medium text-slate-500 transition-all duration-150 relative group no-underline"
              :class="
                isActive(item.path)
                  ? 'text-blue-700 font-bold bg-blue-50'
                  : 'hover:text-blue-700 hover:bg-slate-50'
              "
            >
              <i :class="[item.icon, 'w-[18px] text-[15px] flex-shrink-0']"></i>
              <span>{{ item.label }}</span>
              <!-- Active bar -->
              <span
                v-if="isActive(item.path)"
                class="absolute right-0 top-1.5 bottom-1.5 w-1 bg-blue-700 rounded-l-full"
              ></span>
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- Bottom -->
      <div class="border-t border-slate-100 pt-2">
        <button
          class="flex items-center gap-3 w-full px-5 py-2.5 text-[13px] font-medium text-slate-500 hover:text-blue-700 hover:bg-slate-50 transition-all"
        >
          <i class="pi pi-question-circle w-[18px] text-[15px]"></i>
          <span>Trợ giúp</span>
        </button>
        <button
          class="flex items-center gap-3 w-full px-5 py-2.5 text-[13px] font-medium text-slate-500 hover:text-red-500 hover:bg-slate-50 transition-all"
        >
          <i class="pi pi-sign-out w-[18px] text-[15px]"></i>
          <span>Đăng xuất</span>
        </button>
      </div>
    </aside>

    <!-- ===== MAIN CONTENT ===== -->
    <div
      class="flex-1 flex flex-col min-w-0 w-full lg:w-auto h-[100dvh] lg:h-auto overflow-y-auto lg:overflow-visible"
    >
      <!-- Top Header Bar (hidden on voice-chat page) -->
      <DashboardTopBar
        v-if="!hideTopBar"
        @toggle-sidebar="isSidebarOpen = !isSidebarOpen"
      />

      <!-- Page Content -->
      <main class="flex-1 p-6 overflow-y-auto">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isSidebarOpen = ref(false);

// Pages that should hide the top bar
const HIDDEN_TOPBAR_ROUTES = ["/luyen-tap/voice-chat"];
const hideTopBar = computed(() => HIDDEN_TOPBAR_ROUTES.includes(route.path));

const navItems = [
  { path: "/", label: "Bảng điều khiển", icon: "pi pi-th-large" },
  { path: "/luyen-tap", label: "Luyện tập", icon: "fa-solid fa-dumbbell" },
  { path: "/tro-choi", label: "Trò chơi", icon: "fa-solid fa-gamepad" },
  { path: "/phan-tich", label: "Phân tích", icon: "pi pi-chart-bar" },
  { path: "/ca-nhan", label: "Cá nhân", icon: "pi pi-user" },
  { path: "/ban-be", label: "Bạn bè", icon: "fa-solid fa-user-group" },
  { path: "/bang-xep-hang", label: "Bảng xếp hạng", icon: "pi pi-trophy" },
  { path: "/cai-dat", label: "Cài đặt", icon: "pi pi-cog" },
];

function isActive(path) {
  if (path === "/") return route.path === "/";
  return route.path.startsWith(path);
}

// Close sidebar on route change on mobile
watch(
  () => route.path,
  () => {
    if (isSidebarOpen.value) isSidebarOpen.value = false;
  }
);
</script>
