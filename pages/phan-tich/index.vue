<template>
  <NuxtLayout name="dashboard">
    <div class="flex flex-col gap-5 pb-20">
      <!-- ===== PAGE HEADER ===== -->
      <div class="flex items-start justify-between animate-fade-in">
        <div>
          <h1 class="text-[28px] font-black text-slate-800 mb-0.5 leading-none">
            Tổng kết
          </h1>
          <p class="text-[13px] text-slate-400 font-medium m-0">
            {{ currentDate }}
          </p>
        </div>
        <button
          class="flex items-center gap-1.5 text-[13px] font-semibold text-slate-600 border border-slate-200 bg-white rounded-xl px-3.5 py-2 hover:bg-slate-50 transition-colors"
        >
          <i class="pi pi-calendar"></i>
          Chọn ngày
        </button>
      </div>

      <!-- ===== TOP STATS ROW ===== -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[200px_1fr_180px] gap-4 animate-fade-in-up anim-delay-100">
        <!-- Accuracy card -->
        <div
          class="bg-white rounded-[18px] p-[18px] shadow-sm relative overflow-hidden flex flex-col justify-between"
        >
          <div class="flex justify-end">
            <span
              class="text-[10px] font-bold text-green-600 bg-green-100 rounded-full px-2 py-0.5"
              >+4% so với hôm qua</span
            >
          </div>
          <div
            class="w-9 h-9 bg-blue-100 rounded-xl flex items-center justify-center mb-1.5"
          >
            <i class="fa-solid fa-circle-half-stroke text-blue-700 text-lg"></i>
          </div>
          <p
            class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1"
          >
            ĐỘ CHÍNH XÁC PHÁT ÂM
          </p>
          <div class="flex items-end justify-between gap-2">
            <span class="text-[42px] font-black text-slate-800 leading-none"
              >88<span class="text-2xl">%</span></span
            >
            <div class="flex items-end gap-[3px] h-9 pb-0.5">
              <span
                v-for="(h, i) in miniBarHeights"
                :key="i"
                class="w-[5px] bg-blue-700 rounded-t-[3px] opacity-70 last:opacity-100"
                :style="{ height: h + 'px' }"
              ></span>
            </div>
          </div>
        </div>

        <!-- Total practice time card (large dark) -->
        <div
          class="bg-gradient-to-br from-blue-900 to-blue-700 text-white flex flex-col justify-between min-h-[160px] relative overflow-hidden rounded-[18px] p-[18px]"
        >
          <p
            class="text-[10px] font-bold text-blue-300 uppercase tracking-widest mb-1.5 z-10 relative"
          >
            TỔNG THỜI GIAN LUYỆN TẬP
          </p>
          <div class="flex items-baseline gap-2 z-10 relative">
            <span class="text-[64px] font-black text-white leading-none"
              >42</span
            >
            <span class="text-[22px] font-bold text-blue-300">phút</span>
          </div>
          <div class="mt-2 z-10 relative">
            <div
              class="h-[5px] bg-white/20 rounded-full overflow-hidden mb-1.5"
            >
              <div
                class="h-full w-1/2 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"
              ></div>
            </div>
            <p class="text-[11px] text-blue-300 m-0">
              Bạn đã học nhiều hơn hôm qua 50%
            </p>
          </div>
          <!-- Decorative timer icon -->
          <div
            class="absolute right-4 top-4 text-[80px] text-white/5 leading-none pointer-events-none"
          >
            <i class="fa-regular fa-clock"></i>
          </div>
        </div>

        <!-- Right mini-cards stack -->
        <div class="flex flex-col gap-3">
          <!-- Streak -->
          <div
            class="flex-1 bg-white rounded-2xl py-3.5 px-4 flex items-center gap-3 shadow-sm"
          >
            <div
              class="w-9 h-9 flex items-center justify-center text-base shrink-0 rounded-[11px] bg-orange-100"
            >
              <i class="fa-solid fa-fire text-orange-500"></i>
            </div>
            <div>
              <p
                class="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-0.5"
              >
                CHUỖI HIỆN TẠI
              </p>
              <p class="text-[22px] font-black text-slate-800 leading-none m-0">
                5 <span class="text-[14px] font-bold text-slate-500">Ngày</span>
              </p>
            </div>
          </div>
          <!-- New vocab -->
          <div
            class="flex-1 bg-white rounded-2xl py-3.5 px-4 flex items-center gap-3 shadow-sm"
          >
            <div
              class="w-9 h-9 flex items-center justify-center text-base shrink-0 rounded-[11px] bg-blue-100"
            >
              <i class="fa-solid fa-user-group text-blue-600"></i>
            </div>
            <div>
              <p
                class="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-0.5"
              >
                CỤM TỪ MỚI
              </p>
              <p class="text-[22px] font-black text-slate-800 leading-none m-0">
                128
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- ===== MIDDLE SECTION ===== -->
      <div class="grid grid-cols-1 xl:grid-cols-[1fr_260px] gap-4">
        <!-- Tone comparison chart -->
        <div class="bg-white rounded-[18px] p-5 shadow-sm animate-fade-in-left anim-delay-200">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-[17px] font-bold text-slate-800 m-0">
              So sánh với người bản xứ
            </h2>
            <div
              class="flex items-center gap-1.5 text-[10px] font-bold text-slate-500 uppercase tracking-wider"
            >
              <span
                class="inline-block w-2.5 h-2.5 rounded-full bg-blue-700"
              ></span
              ><span class="mr-2.5">BẠN</span>
              <span
                class="inline-block w-2.5 h-2.5 rounded-full bg-blue-200"
              ></span
              ><span>BẢN XỨ</span>
            </div>
          </div>

          <!-- SVG waveform comparison chart -->
          <div class="flex flex-col gap-2">
            <svg
              viewBox="0 0 500 140"
              class="w-full h-[130px] block"
              preserveAspectRatio="none"
            >
              <!-- Native speaker wave (dashed, lighter) -->
              <path
                d="M0,70 C30,50 60,90 100,70 C140,50 160,85 200,70 C240,55 260,90 300,70 C340,50 360,85 400,70 C440,55 460,90 500,70"
                fill="none"
                stroke="#bfdbfe"
                stroke-width="2.5"
                stroke-dasharray="6 4"
              />
              <!-- User wave (solid, darker) -->
              <path
                d="M0,70 C30,42 65,98 110,68 C150,42 170,92 210,65 C255,38 270,100 315,72 C355,48 375,95 420,68 C455,45 475,88 500,70"
                fill="none"
                stroke="#1d4ed8"
                stroke-width="2.5"
                stroke-linecap="round"
              />
            </svg>
            <!-- X-axis labels -->
            <div
              class="flex justify-between px-1 text-[9px] font-bold text-slate-400 uppercase tracking-wider"
            >
              <span>THANH 1</span>
              <span>THANH 2</span>
              <span>THANH 3</span>
              <span>THANH 4</span>
            </div>
          </div>
        </div>

        <!-- Focus recommendation card -->
        <div
          class="bg-gradient-to-br from-blue-900 to-blue-700 rounded-[18px] p-5 flex flex-col text-white animate-fade-in-right anim-delay-200"
        >
          <p
            class="text-[9px] font-bold text-blue-300 uppercase tracking-widest mb-2"
          >
            CẦN TẬP TRUNG VÀO NGÀY MAI
          </p>
          <h3 class="text-xl font-black text-white leading-tight mb-2.5">
            Làm chủ âm uốn lưỡi 'sh'
          </h3>
          <p class="text-xs text-blue-200 leading-relaxed mb-3.5">
            Các bản ghi âm của bạn cho thấy sự nhầm lẫn liên tục giữa âm 's' và
            'sh'. Chúng tôi đã chuẩn bị một mô-đun đánh riêng cho bạn.
          </p>
          <ul class="list-none p-0 m-0 mb-4 flex flex-col gap-2">
            <li
              class="flex items-center gap-2 text-xs text-blue-100 font-medium"
            >
              <i class="fa-regular fa-circle-check text-blue-300"></i>
              Vị trí đặt lưỡi chuẩn
            </li>
            <li
              class="flex items-center gap-2 text-xs text-blue-100 font-medium"
            >
              <i class="fa-solid fa-table-list text-blue-300"></i>
              15 bài tập cấp tốc tối thiểu
            </li>
          </ul>
          <button
            class="flex items-center justify-center gap-2 bg-blue-500 text-white text-[13px] font-bold p-2.5 rounded-xl border-none cursor-pointer hover:bg-blue-600 transition-colors mt-auto"
          >
            <i class="fa-regular fa-bell"></i>
            Đặt lịch nhắc
          </button>
        </div>
      </div>

      <!-- ===== COMMON ERRORS ===== -->
      <div class="flex flex-col gap-3.5 animate-fade-in-up anim-delay-300">
        <div class="flex items-center justify-between">
          <h2 class="text-[17px] font-bold text-slate-800 m-0">
            Các lỗi thường gặp
          </h2>
          <button
            class="text-[13px] font-semibold text-blue-700 bg-transparent border-none cursor-pointer hover:underline"
          >
            Xem tất cả lịch sử →
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          <div
            v-for="err in commonErrors"
            :key="err.word"
            class="bg-white rounded-2xl p-4 shadow-sm flex flex-col gap-2"
          >
            <div class="flex items-center justify-between">
              <div
                class="text-[10px] font-bold text-red-500 bg-red-50 rounded-full px-2.5 py-1"
              >
                Sai {{ err.count }} lần
              </div>
              <div
                class="w-7 h-7 bg-red-50 rounded-full flex items-center justify-center"
              >
                <i class="fa-solid fa-xmark text-red-500 text-[13px]"></i>
              </div>
            </div>
            <div class="flex items-baseline gap-2">
              <span class="text-2xl font-black text-slate-800">{{
                err.word
              }}</span>
              <span class="text-xs text-slate-400 font-medium">{{
                err.pinyin
              }}</span>
            </div>
            <p class="text-xs text-slate-500 leading-relaxed m-0">
              {{ err.issue }}
            </p>
            <button
              class="flex items-center justify-center gap-1.5 border border-slate-200 bg-slate-50 text-blue-700 text-xs font-bold py-2 px-3.5 rounded-xl cursor-pointer hover:bg-blue-50 hover:border-blue-200 transition-colors mt-auto"
            >
              <i class="fa-regular fa-eye text-blue-600"></i>
              Hướng dẫn
            </button>
          </div>
        </div>
      </div>

      <!-- ===== BOTTOM ROW ===== -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <!-- Learning stats -->
        <div class="bg-white rounded-[18px] p-5 shadow-sm animate-fade-in-left anim-delay-400">
          <h2 class="text-[17px] font-bold text-slate-800 m-0 mb-4">
            Đã học tập
          </h2>
          <div class="flex flex-col">
            <div class="flex items-center justify-between mb-2">
              <div class="flex items-center gap-2.5">
                <div
                  class="w-8 h-8 rounded-lg flex items-center justify-center text-sm shrink-0 bg-orange-100"
                >
                  <i class="fa-solid fa-gauge-high text-orange-500"></i>
                </div>
                <span class="text-[13px] font-semibold text-slate-800"
                  >Tốc độ nói</span
                >
              </div>
              <span class="text-[13px] font-bold text-slate-600"
                >142 ký tự/phút</span
              >
            </div>
            <div class="h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                class="h-full rounded-full transition-all duration-[600ms] bg-orange-400"
                style="width: 71%"
              ></div>
            </div>

            <div class="flex items-center justify-between mb-2 mt-4">
              <div class="flex items-center gap-2.5">
                <div
                  class="w-8 h-8 rounded-lg flex items-center justify-center text-sm shrink-0 bg-blue-100"
                >
                  <i class="fa-solid fa-brain text-blue-600"></i>
                </div>
                <span class="text-[13px] font-semibold text-slate-800"
                  >Khả năng ghi nhớ</span
                >
              </div>
              <span class="text-[13px] font-bold text-slate-600">94%</span>
            </div>
            <div class="h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                class="h-full rounded-full transition-all duration-[600ms] bg-blue-500"
                style="width: 94%"
              ></div>
            </div>
          </div>
        </div>

        <!-- Weekly goal card -->
        <div
          class="bg-gradient-to-br from-indigo-900 to-blue-700 rounded-[18px] p-6 flex flex-col items-center text-center gap-2.5 shadow-lg shadow-blue-700/20 animate-fade-in-right anim-delay-400"
        >
          <div
            class="w-[52px] h-[52px] bg-white/15 rounded-full flex items-center justify-center mb-0.5"
          >
            <i class="fa-solid fa-trophy text-white text-[22px]"></i>
          </div>
          <h3 class="text-lg font-black text-white leading-tight m-0">
            Mục tiêu tuần sắp hoàn thành!
          </h3>
          <p class="text-xs text-blue-200 leading-relaxed m-0">
            Bạn chỉ cần thêm 18 phút để đạt được mục tiêu luyện tập 3 giờ. Cố
            lên!
          </p>
          <button
            class="bg-white text-blue-700 text-[13px] font-bold py-2.5 px-6 rounded-xl hover:bg-blue-50 transition-colors mt-1"
          >
            Xem kế hoạch tuần
          </button>
        </div>
      </div>
    </div>

    <!-- ===== FLOATING BOTTOM BAR ===== -->
    <div class="fixed bottom-6 right-6 flex items-center gap-2.5 z-40">
      <NuxtLink
        to="/phan-tich/chi-tiet"
        class="flex items-center gap-2 bg-white text-slate-800 text-[13px] font-bold py-3 px-5 rounded-full border border-slate-200 shadow-md hover:bg-slate-50 transition-all no-underline"
      >
        <i class="fa-solid fa-chart-column text-[15px]"></i>
        Phân tích chuyên sâu
      </NuxtLink>
      <button
        class="w-[46px] h-[46px] bg-blue-700 rounded-full flex items-center justify-center shadow-lg shadow-blue-700/40 hover:bg-blue-800 hover:scale-105 transition-all border-none"
      >
        <i class="fa-solid fa-microphone text-white text-[16px]"></i>
      </button>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { computed } from "vue";

useHead({ title: "Phân tích · AI Speaking Assistant" });

const currentDate = computed(() => {
  return new Date().toLocaleDateString("vi-VN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
});

const miniBarHeights = [14, 20, 16, 26, 18, 28, 22];

const commonErrors = [
  {
    word: "老师",
    pinyin: "Lǎoshī",
    count: 8,
    issue: 'Vấn đề: Thanh 1 bị ngang ở âm "shī"',
  },
  {
    word: "水果",
    pinyin: "Shuǐguǒ",
    count: 5,
    issue: "Vấn đề: Lỗi biến điệu thanh 3",
  },
  {
    word: "下午",
    pinyin: "Xiàwǔ",
    count: 5,
    issue: 'Vấn đề: Độ rõ của nguyên âm "xiā"',
  },
];
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fadeInLeft {
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes fadeInRight {
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
}

.animate-fade-in { animation: fadeIn 0.6s ease-out forwards; opacity: 0; }
.animate-fade-in-up { animation: fadeInUp 0.6s ease-out forwards; opacity: 0; }
.animate-fade-in-left { animation: fadeInLeft 0.6s ease-out forwards; opacity: 0; }
.animate-fade-in-right { animation: fadeInRight 0.6s ease-out forwards; opacity: 0; }

.anim-delay-100 { animation-delay: 100ms; }
.anim-delay-200 { animation-delay: 200ms; }
.anim-delay-300 { animation-delay: 300ms; }
.anim-delay-400 { animation-delay: 400ms; }
</style>
