<template>
  <div class="detailed-analysis-page font-inter bg-slate-50 min-h-screen pb-24">
    <!-- ===== HEADER ===== -->
    <header
      class="sticky top-0 z-50 bg-white border-b border-slate-200 px-6 py-3 flex items-center justify-between"
    >
      <div class="flex items-center gap-4">
        <NuxtLink
          to="/phan-tich"
          class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors text-slate-700"
        >
          <i class="pi pi-arrow-left text-lg"></i>
        </NuxtLink>
        <div>
          <h1 class="text-[17px] font-bold text-slate-900 leading-tight">
            Phân tích chi tiết
          </h1>
          <p class="text-[12px] text-slate-500">Bài tập: Chào hỏi cơ bản</p>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <button
          class="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-4 py-2 rounded-full text-[13px] transition-colors"
        >
          <i class="pi pi-share-alt"></i>
          Chia sẻ
        </button>
        <button
          class="bg-blue-800 hover:bg-blue-900 text-white font-semibold px-6 py-2 rounded-full text-[13px] transition-colors"
        >
          Tiếp tục
        </button>
      </div>
    </header>

    <!-- ===== MAIN CONTENT ===== -->
    <main class="max-w-6xl mx-auto pt-10 px-6 flex flex-col gap-10">
      <!-- Pronunciation breakdown -->
      <section class="flex flex-col items-center gap-6 animate-fade-in-down">
        <div class="flex items-end gap-3 flex-wrap justify-center font-bold">
          <!-- Nǐ -->
          <div
            class="flex flex-col items-center bg-blue-100 rounded-xl px-4 py-3 min-w-[60px] cursor-pointer hover:scale-105 transition-transform shadow-sm"
          >
            <span
              class="text-[12px] text-blue-800 font-black tracking-wider uppercase mb-1"
              >Nǐ</span
            >
            <span class="text-[26px] text-blue-900 leading-none">你</span>
          </div>
          <!-- hǎo -->
          <div
            class="flex flex-col items-center bg-orange-100 rounded-xl px-4 py-3 min-w-[60px] cursor-pointer hover:scale-105 transition-transform shadow-sm"
          >
            <span
              class="text-[12px] text-orange-800 font-black tracking-wider uppercase mb-1"
              >hǎo</span
            >
            <span class="text-[26px] text-orange-900 leading-none">好</span>
          </div>

          <span class="text-slate-400 text-2xl mx-1 mb-3">,</span>

          <!-- hěn -->
          <div
            class="flex flex-col items-center bg-blue-100 rounded-xl px-4 py-3 min-w-[60px] cursor-pointer hover:scale-105 transition-transform shadow-sm"
          >
            <span
              class="text-[12px] text-blue-800 font-black tracking-wider uppercase mb-1"
              >hěn</span
            >
            <span class="text-[26px] text-blue-900 leading-none">很</span>
          </div>
          <!-- gāo -->
          <div
            class="flex flex-col items-center bg-red-100 rounded-xl px-4 py-3 min-w-[60px] cursor-pointer hover:scale-105 transition-transform shadow-sm relative"
          >
            <span
              class="text-[12px] text-red-800 font-black tracking-wider uppercase mb-1"
              >gāo</span
            >
            <span class="text-[26px] text-red-900 leading-none">高</span>
            <!-- Error indicator -->
            <div
              class="absolute -bottom-2 -right-2 bg-red-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px] shadow-md"
            >
              <i class="fa-solid fa-exclamation"></i>
            </div>
          </div>
          <!-- xìng -->
          <div
            class="flex flex-col items-center bg-blue-100 rounded-xl px-4 py-3 min-w-[60px] cursor-pointer hover:scale-105 transition-transform shadow-sm"
          >
            <span
              class="text-[12px] text-blue-800 font-black tracking-wider uppercase mb-1"
              >xìng</span
            >
            <span class="text-[26px] text-blue-900 leading-none">兴</span>
          </div>
        </div>
        <p class="text-[14px] text-slate-500 italic">
          "Rất vui được làm quen với bạn."
        </p>
      </section>

      <!-- Score metrics -->
      <section class="grid grid-cols-1 md:grid-cols-3 gap-5 animate-fade-in-up anim-delay-100">
        <!-- Accuracy -->
        <div
          class="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
        >
          <div class="flex items-start justify-between mb-3">
            <div
              class="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-700"
            >
              <i class="fa-solid fa-certificate"></i>
            </div>
            <span
              class="bg-blue-50 text-blue-700 text-[10px] font-black uppercase px-2.5 py-1 rounded-full tracking-wider"
              >Tốt</span
            >
          </div>
          <div class="mb-3">
            <h3 class="text-[28px] font-black text-slate-900 leading-none mb-1">
              95%
            </h3>
            <p class="text-[12px] font-semibold text-slate-500">
              Độ chính xác (Accuracy)
            </p>
          </div>
          <div class="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
            <div
              class="h-full bg-blue-800 rounded-full"
              style="width: 95%"
            ></div>
          </div>
        </div>

        <!-- Fluency -->
        <div
          class="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
        >
          <div class="flex items-start justify-between mb-3">
            <div
              class="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-700"
            >
              <i class="fa-solid fa-leaf"></i>
            </div>
            <span
              class="bg-orange-50 text-orange-700 text-[10px] font-black uppercase px-2.5 py-1 rounded-full tracking-wider"
              >Trung bình</span
            >
          </div>
          <div class="mb-3">
            <h3 class="text-[28px] font-black text-slate-900 leading-none mb-1">
              82%
            </h3>
            <p class="text-[12px] font-semibold text-slate-500">
              Độ trôi chảy (Fluency)
            </p>
          </div>
          <div class="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
            <div
              class="h-full bg-orange-600 rounded-full"
              style="width: 82%"
            ></div>
          </div>
        </div>

        <!-- Tone -->
        <div
          class="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
        >
          <div class="flex items-start justify-between mb-3">
            <div
              class="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center text-sky-600"
            >
              <i class="fa-solid fa-music"></i>
            </div>
            <span
              class="bg-sky-50 text-sky-600 text-[10px] font-black uppercase px-2.5 py-1 rounded-full tracking-wider"
              >Cần cố gắng</span
            >
          </div>
          <div class="mb-3">
            <h3 class="text-[28px] font-black text-slate-900 leading-none mb-1">
              70%
            </h3>
            <p class="text-[12px] font-semibold text-slate-500">
              Thanh điệu (Tone)
            </p>
          </div>
          <div class="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
            <div
              class="h-full bg-sky-800 rounded-full"
              style="width: 70%"
            ></div>
          </div>
        </div>
      </section>

      <!-- Comparison Chart -->
      <section
        class="bg-slate-100 rounded-3xl p-8 flex flex-col gap-8 shadow-inner border border-slate-200/60 animate-fade-in-up anim-delay-200"
      >
        <div class="flex items-center justify-between">
          <h2 class="text-[18px] font-bold text-slate-900">
            So sánh với người bản xứ
          </h2>
          <div
            class="flex items-center gap-4 text-[12px] font-semibold text-slate-600"
          >
            <div class="flex items-center gap-1.5">
              <div class="w-3 h-3 rounded-full bg-blue-800"></div>
              Bản xứ
            </div>
            <div class="flex items-center gap-1.5">
              <div class="w-3 h-3 rounded-full bg-amber-700"></div>
              Bạn
            </div>
          </div>
        </div>

        <!-- Chart Graphic -->
        <div
          class="h-[140px] w-full flex items-end justify-start gap-2.5 px-4 overflow-hidden"
        >
          <!-- Synthetic bar chart simulating speech pitch over time -->
          <div
            v-for="(col, i) in chartData"
            :key="i"
            class="relative w-2.5 h-full flex items-end justify-center group"
          >
            <!-- Native bar (background, wider) -->
            <div
              class="absolute bottom-0 w-2.5 rounded-t-full bg-blue-300/60 transition-all"
              :style="{ height: col.native + '%' }"
            ></div>
            <!-- Native point (dot at top) -->
            <div
              class="absolute w-2.5 h-2.5 rounded-full bg-blue-800 z-10 transition-all opacity-80"
              :style="{ bottom: `calc(${col.native}% - 5px)` }"
            ></div>

            <!-- User bar (foreground, narrower) -->
            <div
              class="absolute bottom-0 w-1.5 rounded-t-full bg-amber-700 transition-all z-20 group-hover:bg-amber-600"
              :style="{ height: col.user + '%' }"
            ></div>
          </div>
        </div>

        <!-- Controls -->
        <div class="flex items-center justify-center gap-4 pt-2">
          <button
            class="w-12 h-12 flex items-center justify-center rounded-full bg-slate-200 text-slate-700 hover:bg-slate-300 transition-colors"
          >
            <i class="fa-solid fa-play ml-1"></i>
          </button>
          <button
            class="flex items-center gap-2 bg-blue-800 hover:bg-blue-900 text-white font-bold px-6 py-3.5 rounded-full text-[14px] shadow-lg shadow-blue-900/20 transition-all hover:scale-105"
          >
            <i class="fa-solid fa-microphone text-[16px]"></i>
            Thử lại
          </button>
          <button
            class="w-12 h-12 flex items-center justify-center rounded-full bg-slate-200 text-slate-700 hover:bg-slate-300 transition-colors"
          >
            <i class="fa-solid fa-volume-high"></i>
          </button>
        </div>
      </section>

      <!-- Bottom Layout: Errors & Tips -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <!-- Errors block -->
        <section
          class="bg-slate-50/50 rounded-3xl p-6 border border-slate-100 flex flex-col gap-4 animate-fade-in-left anim-delay-300"
        >
          <div class="flex items-center gap-3 pl-2">
            <div
              class="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600"
            >
              <i class="fa-solid fa-triangle-exclamation text-[13px]"></i>
            </div>
            <h2 class="text-[17px] font-bold text-slate-900">
              5 lỗi phổ biến của bạn
            </h2>
          </div>

          <div class="flex flex-col gap-3">
            <!-- Error 1 -->
            <div
              class="bg-white rounded-2xl p-4 flex items-center gap-4 cursor-pointer hover:shadow-md transition-shadow border border-slate-100"
            >
              <span class="text-[24px] font-black text-red-600 w-6 text-center"
                >1</span
              >
              <div class="flex-1">
                <h4 class="text-[14px] font-bold text-slate-800 mb-0.5">
                  Âm 'G' trong 'Gāo'
                </h4>
                <p class="text-[12px] text-slate-500">
                  Phát âm quá nhẹ, giống âm 'K'
                </p>
              </div>
              <i class="pi pi-chevron-right text-slate-400 text-[12px]"></i>
            </div>
            <!-- Error 2 -->
            <div
              class="bg-white rounded-2xl p-4 flex items-center gap-4 cursor-pointer hover:shadow-md transition-shadow border border-slate-100"
            >
              <span
                class="text-[24px] font-black text-orange-500 w-6 text-center"
                >2</span
              >
              <div class="flex-1">
                <h4 class="text-[14px] font-bold text-slate-800 mb-0.5">
                  Thanh 3 trong 'Nǐ'
                </h4>
                <p class="text-[12px] text-slate-500">Độ xuống chưa đủ sâu</p>
              </div>
              <i class="pi pi-chevron-right text-slate-400 text-[12px]"></i>
            </div>
            <!-- Error 3 -->
            <div
              class="bg-white rounded-2xl p-4 flex items-center gap-4 cursor-pointer hover:shadow-md transition-shadow border border-slate-100"
            >
              <span
                class="text-[24px] font-black text-slate-400 w-6 text-center"
                >3</span
              >
              <div class="flex-1">
                <h4 class="text-[14px] font-bold text-slate-800 mb-0.5">
                  Trọng âm câu
                </h4>
                <p class="text-[12px] text-slate-500">
                  Ngắt nghỉ chưa tự nhiên
                </p>
              </div>
              <i class="pi pi-chevron-right text-slate-400 text-[12px]"></i>
            </div>
          </div>
        </section>

        <!-- Tips block -->
        <section class="flex flex-col gap-4 pt-1 animate-fade-in-right anim-delay-300">
          <div class="flex items-center gap-3 pl-2">
            <div
              class="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center text-sky-600"
            >
              <i class="fa-solid fa-lightbulb text-[13px]"></i>
            </div>
            <h2 class="text-[17px] font-bold text-slate-900">Mẹo cải thiện</h2>
          </div>

          <!-- Tip 1 -->
          <div
            class="relative bg-blue-50 border border-blue-100 rounded-2xl p-6 overflow-hidden mt-1"
          >
            <h4 class="text-[15px] font-bold text-blue-900 mb-2 relative z-10">
              Luyện tập âm vòm họng
            </h4>
            <p
              class="text-[13px] text-slate-700 leading-relaxed mb-4 relative z-10 w-[95%]"
            >
              Để phát âm chữ <strong>Gāo</strong> chính xác hơn, hãy cố gắng đẩy
              hơi từ cuống lưỡi. Đặt lưỡi thấp xuống để tạo không gian vang
              trong khoang miệng.
            </p>
            <button
              class="text-[12px] font-bold text-blue-700 hover:underline flex items-center gap-1.5 relative z-10"
            >
              Xem video hướng dẫn
              <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
            </button>
            <i
              class="fa-solid fa-head-side-cough absolute -bottom-6 -right-4 text-[100px] text-blue-100/60 z-0"
            ></i>
          </div>

          <!-- Tip 2 -->
          <div class="bg-orange-50 border border-orange-100 rounded-2xl p-6">
            <h4 class="text-[15px] font-bold text-orange-900 mb-2">
              Quy tắc biến điệu thanh 3
            </h4>
            <p class="text-[13px] text-slate-700 leading-relaxed">
              Khi hai thanh 3 đi liền nhau (Nǐ hǎo), thanh 3 thứ nhất sẽ biến
              thành thanh 2. Bạn đã làm khá tốt nhưng cần mượt mà hơn.
            </p>
          </div>
        </section>
      </div>
    </main>

    <!-- ===== FIXED BOTTOM FOOTER ===== -->
    <footer
      class="fixed bottom-0 left-0 right-0 h-20 bg-white border-t border-slate-200 px-6 flex items-center justify-between z-50"
    >
      <div class="flex items-center gap-3">
        <div
          class="w-12 h-12 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center overflow-hidden"
        >
          <img
            src="https://api.dicebear.com/7.x/bottts/svg?seed=AITutor&backgroundColor=ccfbf1"
            alt="AI Avatar"
            class="w-full h-full object-cover p-1"
          />
        </div>
        <div>
          <h4 class="text-[14px] font-bold text-slate-900 mb-0.5">
            Hỏi gia sư AI
          </h4>
          <p class="text-[12px] text-slate-500">
            Giải đáp thắc mắc về phát âm ngay lập tức
          </p>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <button
          class="bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 font-bold px-6 py-2.5 rounded-xl text-[14px] transition-colors"
        >
          Lưu kết quả
        </button>
        <button
          class="bg-blue-800 hover:bg-blue-900 text-white font-bold px-8 py-2.5 rounded-xl text-[14px] shadow-lg shadow-blue-900/20 transition-all"
        >
          Bài tiếp theo
        </button>
      </div>
    </footer>
  </div>
</template>

<script setup>
useHead({ title: "Phân tích chi tiết · AI Speaking Assistant" });

// Generate aesthetic synthetic data for the comparison chart
const chartData = [
  { native: 20, user: 15 },
  { native: 35, user: 25 },
  { native: 50, user: 55 },
  { native: 65, user: 60 },
  { native: 80, user: 70 },
  { native: 60, user: 65 },
  { native: 40, user: 45 },
  { native: 30, user: 25 },
  { native: 45, user: 40 },
  { native: 70, user: 80 }, // spike
  { native: 55, user: 50 },
  { native: 40, user: 30 },
  { native: 25, user: 20 },
  { native: 35, user: 30 },
  { native: 50, user: 45 },
  { native: 65, user: 55 },
  { native: 90, user: 70 }, // spike 2
  { native: 75, user: 65 },
  { native: 55, user: 50 },
  { native: 40, user: 35 },
  { native: 25, user: 30 },
  { native: 60, user: 50 },
  { native: 45, user: 40 },
  { native: 35, user: 35 },
];
</script>

<style scoped>
@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
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

.animate-fade-in-down { animation: fadeInDown 0.6s ease-out forwards; opacity: 0; }
.animate-fade-in-up { animation: fadeInUp 0.6s ease-out forwards; opacity: 0; }
.animate-fade-in-left { animation: fadeInLeft 0.6s ease-out forwards; opacity: 0; }
.animate-fade-in-right { animation: fadeInRight 0.6s ease-out forwards; opacity: 0; }

.anim-delay-100 { animation-delay: 100ms; }
.anim-delay-200 { animation-delay: 200ms; }
.anim-delay-300 { animation-delay: 300ms; }

html,
body {
  overflow-x: hidden;
}
</style>
