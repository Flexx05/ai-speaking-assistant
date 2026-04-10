<template>
  <NuxtLayout name="dashboard">
    <div class="flex flex-col gap-6 max-w-7xl mx-auto pb-10">
      <!-- Page Header -->
      <div class="animate-fade-in opacity-0">
        <h1 class="text-[26px] font-black text-slate-800 mb-1">
          Trung tâm luyện tập
        </h1>
        <p class="text-[14px] text-slate-500">
          Nâng cao kỹ năng nói và nghe thông qua trò chuyện cùng AI
        </p>
      </div>

      <!-- ===== TOP SECTION: Gọi thoại + Voice chat ===== -->
      <div class="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-5">
        <!-- Left: Gọi thoại card -->
        <div
          class="relative bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 rounded-2xl p-7 overflow-hidden flex flex-col gap-5 min-h-[260px] animate-slide-right opacity-0"
        >
          <!-- Online indicator -->
          <div class="flex items-center gap-2">
            <span
              class="w-2.5 h-2.5 rounded-full bg-orange-400 animate-pulse"
            ></span>
          </div>

          <div>
            <h2 class="text-[32px] font-black text-white mb-2">Gọi thoại</h2>
            <p class="text-[14px] text-blue-200">
              Có thể gọi ngẫu hứng hoặc chọn chủ đề cho sẵn.
            </p>
          </div>

          <!-- Waveform + topic chip -->
          <div
            class="flex items-center gap-3 bg-white/10 rounded-2xl px-4 py-3 backdrop-blur-sm border border-white/20"
          >
            <!-- Animated waveform bars -->
            <div class="flex items-end gap-1 h-10">
              <span
                v-for="(h, i) in waveHeights"
                :key="i"
                class="w-1.5 bg-white/80 rounded-full transition-all"
                :style="{ height: h + 'px', animationDelay: i * 0.1 + 's' }"
              ></span>
            </div>
            <!-- Topic -->
            <div class="ml-auto flex flex-col items-end">
              <span
                class="text-[10px] font-bold text-blue-200 uppercase tracking-wider mb-1"
                >Chủ đề</span
              >
              <span class="text-[13px] font-semibold text-white"
                >你去哪儿喝咖啡？</span
              >
            </div>
          </div>

          <!-- CTA Button -->
          <NuxtLink
            to="/luyen-tap/voice-chat"
            class="flex items-center justify-center gap-2 bg-white text-blue-700 font-bold text-[14px] py-3.5 rounded-2xl hover:bg-blue-50 transition-all shadow-lg no-underline"
          >
            <i class="fa-solid fa-phone"></i>
            Bắt đầu gọi ngay
          </NuxtLink>

          <!-- Decorative -->
          <span
            class="absolute right-8 top-8 text-[100px] font-black text-white/5 leading-none select-none pointer-events-none"
            >多</span
          >
        </div>

        <!-- Right: Voice chat preview card -->
        <div class="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-4 animate-slide-left opacity-0">
          <!-- Chat icon -->
          <div
            class="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center"
          >
            <i class="pi pi-comments text-slate-500 text-[20px]"></i>
          </div>

          <h3 class="text-[17px] font-bold text-slate-800 -mt-1">Voice chat</h3>

          <!-- Chat bubble -->
          <div class="bg-slate-50 rounded-xl p-3 space-y-1">
            <p class="text-[11px] font-bold text-slate-400 uppercase">AI</p>
            <p class="text-[13px] text-slate-800 font-medium">
              你今天过得怎么样？
            </p>
          </div>

          <!-- Waveform visual -->
          <div class="flex items-center gap-0.5 h-8 px-1">
            <span
              v-for="(h, i) in chatWaveHeights"
              :key="'cw' + i"
              :class="i < 10 ? 'bg-orange-400' : 'bg-blue-200'"
              class="w-1 rounded-full flex-shrink-0"
              :style="{ height: h + 'px' }"
            ></span>
          </div>

          <!-- Progress -->
          <div>
            <div class="flex justify-between text-[11px] font-semibold mb-1.5">
              <span class="text-slate-400 uppercase tracking-wider"
                >Tiến độ</span
              >
              <span class="text-orange-500">32% Hoàn thành</span>
            </div>
            <div class="h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                class="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"
                style="width: 32%"
              ></div>
            </div>
          </div>

          <!-- Record CTA -->
          <NuxtLink
            to="/luyen-tap/voice-chat"
            class="flex items-center justify-center gap-2 bg-teal-700 hover:bg-teal-800 text-white font-bold text-[14px] py-3 rounded-xl transition-all mt-auto no-underline"
          >
            <i class="fa-solid fa-microphone"></i>
            Ghi âm tin nhắn
          </NuxtLink>
        </div>
      </div>

      <!-- ===== Bài tập khởi động ===== -->
      <div class="animate-slide-up opacity-0 delay-100">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-[18px] font-bold text-slate-800">
            Bài tập khởi động
          </h2>
          <button
            class="text-[13px] font-semibold text-blue-700 hover:underline"
          >
            Xem tất cả →
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="exercise in exercises"
            :key="exercise.id"
            class="bg-white rounded-2xl p-5 shadow-sm cursor-pointer hover:shadow-md hover:-translate-y-0.5 transition-all group"
          >
            <!-- Level badge + icon -->
            <div class="flex items-start justify-between mb-3">
              <div
                class="w-10 h-10 rounded-xl flex items-center justify-center text-[16px] font-black"
                :class="exercise.iconBg"
              >
                <span :class="exercise.iconColor">{{ exercise.icon }}</span>
              </div>
              <div class="text-right">
                <p
                  class="text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-0.5"
                >
                  Độ khó
                </p>
                <span
                  class="text-[11px] font-bold px-2 py-0.5 rounded-full"
                  :class="exercise.badgeClass"
                  >{{ exercise.level }}</span
                >
              </div>
            </div>

            <h4
              class="text-[15px] font-bold text-slate-800 mb-1.5 group-hover:text-blue-700 transition-colors"
            >
              {{ exercise.title }}
            </h4>
            <p class="text-[12px] text-slate-500 leading-relaxed mb-4">
              {{ exercise.desc }}
            </p>

            <div class="flex items-center gap-1.5 text-[12px] text-slate-400">
              <i class="pi pi-clock text-[12px]"></i>
              <span>{{ exercise.duration }} phút</span>
            </div>
          </div>
        </div>
      </div>

      <!-- ===== Progress Banner ===== -->
      <div class="bg-slate-100 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 animate-slide-up opacity-0 delay-200">
        <div class="flex-1">
          <h3 class="text-[17px] font-bold text-slate-800 mb-1">
            Bạn đang tiến bộ rất tốt!
          </h3>
          <p class="text-[13px] text-slate-500 mb-5">
            Bạn đã hoàn thành 85% mục tiêu nói HSK 3 tuần này.
          </p>
          <div class="flex items-center gap-3">
            <button
              class="bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm px-5 py-2.5 rounded-full transition-colors"
            >
              Xem lại lỗi sai
            </button>
            <button class="text-blue-700 font-semibold text-sm hover:underline">
              Thống kê tuần ↗
            </button>
          </div>
        </div>

        <!-- Mini chart -->
        <div class="flex-shrink-0 w-[180px]">
          <div class="flex items-end justify-between mb-1">
            <span
              class="text-[9px] font-bold uppercase text-slate-400 tracking-wider"
              >Điểm tuần</span
            >
            <span class="text-[13px] font-black text-blue-700">94/100</span>
          </div>
          <div class="flex items-end gap-2 h-16">
            <div
              v-for="(bar, i) in weekBars"
              :key="i"
              class="flex-1 rounded-t-sm transition-all"
              :class="bar.active ? 'bg-blue-700' : 'bg-slate-300'"
              :style="{ height: bar.height + '%' }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
useHead({ title: "Luyện tập - AI Speaking Assistant" });
// Animated waveform for the call card
const waveHeights = [
  12, 20, 32, 24, 36, 16, 28, 20, 14, 32, 18, 26, 14, 20, 30,
];

// Chat waveform bars
const chatWaveHeights = [
  8, 12, 20, 16, 24, 18, 14, 20, 10, 16, 8, 12, 6, 10, 8, 12, 6, 10, 14, 8,
];

const exercises = [
  {
    id: 1,
    icon: "b",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-700",
    title: "Thanh mẫu",
    level: "Cơ bản",
    badgeClass: "bg-green-100 text-green-700",
    desc: "Tập trung vào các âm phụ, âm bật hơi và không bật hơi.",
    duration: 8,
  },
  {
    id: 2,
    icon: "ang",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    title: "Vận mẫu",
    level: "Trung cấp",
    badgeClass: "bg-orange-100 text-orange-700",
    desc: "Làm chủ các tổ hợp nguyên âm phức tạp và âm mũi.",
    duration: 12,
  },
  {
    id: 3,
    icon: "ǎ",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    title: "Thanh điệu",
    level: "Nâng cao",
    badgeClass: "bg-red-100 text-red-700",
    desc: "Làm chủ 4 thanh chính và 1 thanh nhẹ.",
    duration: 15,
  },
];

const weekBars = [
  { height: 45, active: false },
  { height: 60, active: false },
  { height: 80, active: false },
  { height: 100, active: true },
  { height: 55, active: false },
  { height: 30, active: false },
  { height: 40, active: false },
];
</script>

<style scoped>
.no-underline {
  text-decoration: none;
}

/* Animations */
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes slide-right {
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes slide-left {
  from { opacity: 0; transform: translateX(30px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes slide-up {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
.animate-slide-right { animation: slide-right 0.8s ease-out forwards; }
.animate-slide-left { animation: slide-left 0.8s ease-out forwards; }
.animate-slide-up { animation: slide-up 0.8s ease-out forwards; }

.delay-100 { animation-delay: 100ms; }
.delay-200 { animation-delay: 200ms; }
.opacity-0 { opacity: 0; }
</style>
