<template>
  <header
    class="sticky top-0 z-50 bg-white border-b border-slate-100 px-4 md:px-6 py-3 flex items-center gap-3 md:gap-4"
  >
    <!-- Hamburger Menu (Mobile) -->
    <button
      @click="$emit('toggle-sidebar')"
      class="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 transition-colors"
    >
      <i class="fa-solid fa-bars text-[18px]"></i>
    </button>

    <!-- Search -->
    <div class="flex-1 max-w-xs relative hidden sm:block">
      <i
        class="pi pi-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm"
      ></i>
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Tìm kiếm phân tích hoặc bài học..."
        class="w-full pl-9 pr-4 py-2 text-sm bg-slate-100 rounded-full border-0 outline-none text-slate-700 placeholder-slate-400 focus:bg-slate-200 transition-colors"
      />
    </div>

    <div class="flex items-center gap-2 md:gap-3 ml-auto">
      <!-- Streak chip (Hidden on very small screens) -->
      <div
        class="hidden sm:flex items-center gap-1.5 bg-orange-50 text-orange-500 px-3 py-1.5 rounded-full text-sm font-semibold border border-orange-100"
      >
        <i class="fa-solid fa-fire text-orange-500"></i>
        <span>Chuỗi 5 ngày luyện tập</span>
      </div>

      <!-- Bell -->
      <button
        class="w-9 h-9 flex items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 transition-colors"
      >
        <i class="pi pi-bell text-[16px]"></i>
      </button>

      <!-- CTA (Hidden on mobile) -->
      <button
        class="hidden md:block bg-blue-700 hover:bg-blue-800 text-white text-sm font-bold px-4 py-2 rounded-full transition-colors whitespace-nowrap"
      >
        Luyện tập ngay
      </button>

      <!-- Avatar -->
      <div class="w-9 h-9 rounded-full overflow-hidden bg-blue-100 flex-shrink-0">
        <img
          src="~/assets/images/433966299_919881073210081_7511676866786403341_n.jpg"
          alt="Avatar"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

defineEmits(["toggle-sidebar"]);

const searchQuery = ref("");
</script>
