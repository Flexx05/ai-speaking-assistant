<template>
  <NuxtLayout name="dashboard">
    <div class="flex flex-col gap-5 max-w-7xl mx-auto">
      <!-- Page Header -->
      <div class="animate-fade-in opacity-0">
        <h1 class="text-[26px] font-black text-slate-800 mb-1">Bảng điều khiển</h1>
        <p class="text-[14px] text-slate-500">Theo dõi tiến độ và bắt đầu luyện tập</p>
      </div>
      <!-- ===== TOP ROW ===== -->
      <div class="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-5">
        <!-- Hero Banner -->
        <div
          class="relative bg-[#1855c4] rounded-3xl p-8 md:p-10 overflow-hidden flex flex-col justify-center min-h-[260px] animate-slide-right opacity-0 shadow-sm"
        >
          <h2
            class="text-[36px] md:text-[42px] font-extrabold text-white tracking-tight mb-3 z-10 leading-tight"
          >
            早上好，Alex。
          </h2>
          <p
            class="text-white text-[16px] md:text-[18px] max-w-[460px] leading-relaxed mb-8 z-10 opacity-90"
          >
            你已完成 HSK 3 目标的 85%。准备好开始早晨的口语练习了吗？
          </p>
          <button
            class="self-start bg-white text-[#1855c4] font-semibold text-[15px] px-6 py-3 rounded-xl hover:bg-slate-50 transition-all active:scale-95 flex items-center justify-center gap-2 shadow-sm z-10"
          >
            开始练习

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>

          <span
            class="absolute -right-2 -bottom-6 md:right-8 md:-bottom-8 text-[120px] md:text-[150px] font-bold text-[#3872e6] leading-none select-none pointer-events-none"
            >你好</span
          >
        </div>

        <!-- Streak Card -->
        <div
          class="bg-white rounded-2xl p-6 flex flex-col items-center gap-2 shadow-sm animate-slide-left opacity-0"
        >
          <p class="text-[11px] font-bold text-slate-400 tracking-widest uppercase">
            Chuỗi
          </p>
          <div class="flex items-center gap-2 my-1">
            <span class="text-[52px] font-black text-slate-800 leading-none">5</span>
            <i class="fa-solid fa-fire text-orange-500 text-[34px]"></i>
          </div>
          <p class="text-[13px] text-slate-500">Ngày liên tiếp</p>
          <div class="flex gap-2 mt-3">
            <span
              v-for="day in streakDays"
              :key="day.label"
              v-text="day.label"
              :class="[
                'w-8 h-8 flex items-center justify-center rounded-full text-[11px] font-semibold border transition-all',
                day.active
                  ? 'bg-orange-500 text-white border-orange-500'
                  : 'bg-slate-50 text-slate-400 border-slate-200',
              ]"
            ></span>
          </div>
        </div>
      </div>

      <!-- ===== MIDDLE ROW ===== -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_280px] gap-5 items-start animate-slide-up opacity-0 delay-100"
      >
        <!-- Daily Goal Card -->
        <div class="bg-white rounded-2xl p-6 shadow-sm">
          <h3 class="text-[15px] font-bold text-slate-800 mb-4">Mục tiêu hàng ngày</h3>

          <div class="flex justify-center my-2">
            <div class="relative w-36 h-36">
              <svg viewBox="0 0 120 120" class="w-full h-full">
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="#f0f4f8"
                  stroke-width="10"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="#1a56db"
                  stroke-width="10"
                  stroke-dasharray="314.16"
                  stroke-dashoffset="62.83"
                  stroke-linecap="round"
                  transform="rotate(-90 60 60)"
                />
              </svg>
              <div class="absolute inset-0 flex flex-col items-center justify-center">
                <span class="text-[28px] font-black text-blue-700 leading-none">80%</span>
                <span class="text-[12px] text-slate-500 font-medium mt-1">HSK 3</span>
              </div>
            </div>
          </div>

          <div class="mt-4">
            <div class="flex justify-between items-center mb-2">
              <span class="text-[13px] text-slate-500">Từ vựng</span>
              <span class="text-[13px] font-bold text-slate-800">1,204 / 1,500</span>
            </div>
            <div class="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                class="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"
                style="width: 80%"
              ></div>
            </div>
          </div>
        </div>

        <!-- Schedule Card -->
        <div class="bg-white rounded-2xl p-6 shadow-sm">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-[15px] font-bold text-slate-800">Lịch trình</h3>
            <div class="flex gap-1">
              <button
                class="w-7 h-7 flex items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 transition"
              >
                <i class="pi pi-chevron-left text-[12px]"></i>
              </button>
              <button
                class="w-7 h-7 flex items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 transition"
              >
                <i class="pi pi-chevron-right text-[12px]"></i>
              </button>
            </div>
          </div>

          <div class="grid grid-cols-7 gap-1 mb-3">
            <div
              v-for="d in calHeader"
              :key="d"
              v-text="d"
              class="text-center text-[11px] font-semibold text-slate-400 py-1"
            ></div>
            <div
              v-for="d in [27, 28, 29, 30, 31]"
              :key="'p' + d"
              v-text="d"
              class="flex items-center justify-center w-8 h-8 mx-auto text-[13px] text-slate-300 rounded-full"
            ></div>
            <div
              v-for="d in 9"
              :key="'c' + d"
              v-text="d"
              :class="[
                'flex items-center justify-center w-8 h-8 mx-auto text-[13px] font-medium rounded-full cursor-pointer transition-all',
                d === 6
                  ? 'bg-blue-700 text-white font-bold'
                  : 'text-slate-700 hover:bg-blue-50 hover:text-blue-700',
              ]"
            ></div>
          </div>

          <div class="flex items-center gap-3 bg-slate-50 rounded-xl p-3">
            <div
              class="w-10 h-10 bg-teal-700 rounded-xl flex items-center justify-center text-white flex-shrink-0"
            >
              <i class="fa-solid fa-users text-[16px]"></i>
            </div>
            <div>
              <p class="text-[13px] font-bold text-slate-800">Cuộc gọi luyện nói nhóm</p>
              <p class="text-[12px] text-blue-600">Hôm nay lúc 4:30 PM</p>
            </div>
          </div>
        </div>

        <!-- Right Column -->
        <div class="flex flex-col gap-4">
          <!-- Next Session Card -->
          <div
            class="relative bg-gradient-to-br from-orange-500 to-orange-400 rounded-2xl p-6 overflow-hidden min-h-[160px] text-white"
          >
            <p class="text-[13px] font-semibold opacity-90 leading-snug mb-2">
              Buổi học tiếp<br />theo bắt đầu sau
            </p>
            <p class="text-[36px] font-black leading-none mb-4">15 phút</p>
            <button
              class="text-[13px] font-bold underline underline-offset-2 opacity-90 hover:opacity-100"
            >
              Nhắc tôi →
            </button>
            <i
              class="fa-solid fa-fire absolute right-5 bottom-4 text-[52px] opacity-20"
            ></i>
          </div>

          <!-- Voice Analysis -->
          <div class="bg-white rounded-2xl p-4 shadow-sm">
            <div class="flex items-center justify-between mb-2">
              <span class="text-[13px] font-bold text-slate-800"
                >Phân tích giọng nói</span
              >
              <div class="voice-bars">
                <span class="bar" style="height: 8px"></span>
                <span class="bar" style="height: 16px; animation-delay: 0.2s"></span>
                <span class="bar" style="height: 12px; animation-delay: 0.4s"></span>
                <span class="bar" style="height: 20px; animation-delay: 0.6s"></span>
              </div>
            </div>
            <p class="text-[12px] text-slate-500 leading-relaxed">
              Trợ lý AI đang phân tích giọng nói từ cuộc trò chuyện của bạn...
            </p>
          </div>
        </div>
      </div>

      <!-- ===== BOTTOM: Daily Tip ===== -->
      <div
        class="bg-white rounded-2xl p-6 flex flex-col md:flex-row items-center gap-5 shadow-sm animate-slide-up opacity-0 delay-200"
      >
        <div
          class="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center text-white flex-shrink-0"
        >
          <i class="fa-solid fa-lightbulb text-[20px]"></i>
        </div>
        <div class="flex-1 min-w-0">
          <h4 class="text-[15px] font-bold text-slate-800 mb-1">Mẹo hay hàng ngày</h4>
          <p class="text-[13px] text-slate-500 leading-relaxed">
            Quy tắc "Thanh ba": khi hai âm tiết mang thanh ba đi liền nhau, âm tiết đầu
            tiên sẽ chuyển thành thanh hai. Luyện tập với:
            <strong class="text-blue-700">Nǐ hǎo (你好)</strong>.
          </p>
        </div>
        <button
          class="bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm px-6 py-3 rounded-full transition-colors whitespace-nowrap flex-shrink-0"
        >
          Luyện tập ngay
        </button>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { ref } from "vue";

useHead({ title: "Trang chủ - AI Speaking Assistant" });

const searchQuery = ref("");

const streakDays = [
  { label: "T2", active: false },
  { label: "T3", active: false },
  { label: "T4", active: false },
  { label: "T5", active: false },
  { label: "T6", active: true },
  { label: "T7", active: false },
  { label: "CN", active: false },
];

const calHeader = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
</script>

<style scoped>
.voice-bars {
  display: flex;
  align-items: flex-end;
  gap: 3px;
  height: 20px;
}
.bar {
  width: 4px;
  background: #1a56db;
  border-radius: 2px;
  animation: voicebar 1.2s ease-in-out infinite alternate;
}
@keyframes voicebar {
  from {
    transform: scaleY(0.4);
  }
  to {
    transform: scaleY(1);
  }
}

/* Animations added */
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes slide-right {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes slide-left {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
}
.animate-slide-right {
  animation: slide-right 0.8s ease-out forwards;
}
.animate-slide-left {
  animation: slide-left 0.8s ease-out forwards;
}
.animate-slide-up {
  animation: slide-up 0.8s ease-out forwards;
}

.delay-100 {
  animation-delay: 100ms;
}
.delay-200 {
  animation-delay: 200ms;
}
.opacity-0 {
  opacity: 0;
}
</style>
