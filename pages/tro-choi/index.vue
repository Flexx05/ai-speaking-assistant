<template>
  <NuxtLayout name="dashboard">
    <div
      class="flex flex-col gap-6 max-w-[1100px] mx-auto pb-10 w-full relative"
    >
      <!-- HERO BANNER -->
      <div
        class="relative bg-gradient-to-r from-[#174BB5] via-[#1A54C9] to-[#1E62EB] rounded-[36px] p-10 overflow-hidden text-white shadow-lg mt-2 animate-slide-up opacity-0"
      >
        <!-- Geometric overlapping circles in background -->
        <div
          class="absolute -top-[10%] -right-[15%] w-[500px] h-[500px] rounded-full bg-[#1A54C9] opacity-80 mix-blend-overlay"
        ></div>
        <div
          class="absolute top-[20%] -right-[30%] w-[600px] h-[600px] rounded-full bg-[#3B82F6] opacity-30 mix-blend-overlay"
        ></div>

        <div class="relative z-10 flex flex-col h-full justify-between">
          <div>
            <div
              class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 mb-6 text-white border border-white/20"
            >
              <i class="fa-solid fa-share-nodes text-[12px]"></i>
            </div>
            <h1
              class="text-[44px] font-black leading-[1.1] mb-5 tracking-tight w-full max-w-lg drop-shadow-md"
            >
              Đấu trường<br />học thuật.
            </h1>
            <p
              class="text-[14px] text-blue-100 font-medium max-w-md leading-relaxed mb-10"
            >
              Hãy chơi các trò chơi nhập vai để học chữ cái và thanh điệu tiếng
              Trung. Công cụ tốt nhất của bạn chính là phản xạ ngôn ngữ của
              chính mình.
            </p>
          </div>

          <div class="flex items-center gap-8 text-white mt-auto">
            <div class="flex flex-col">
              <span class="text-[26px] font-black tracking-tight leading-none"
                >2,450</span
              >
              <span
                class="text-[10px] font-bold text-blue-200 mt-1 uppercase tracking-widest"
                >TỔNG XP</span
              >
            </div>
            <div class="w-px h-10 bg-white/20"></div>
            <div class="flex flex-col">
              <span class="text-[26px] font-black tracking-tight leading-none"
                >#14</span
              >
              <span
                class="text-[10px] font-bold text-blue-200 mt-1 uppercase tracking-widest"
                >XẾP HẠNG</span
              >
            </div>
          </div>
        </div>
      </div>

      <!-- MAIN GRID (Featured + Small Cards vs Progress Week) -->
      <div class="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-6 items-start mt-2">
        <!-- LEFT COLUMN: Games -->
        <div class="flex flex-col gap-6 w-full animate-slide-right opacity-0 delay-100">
          <!-- FEATURED CARD -->
          <div
            class="bg-white rounded-[32px] p-8 shadow-sm border border-slate-100 flex flex-col w-full relative group hover:shadow-md transition-shadow cursor-default"
          >
            <div class="flex items-start justify-between mb-4">
              <div class="flex flex-col">
                <div
                  class="inline-flex items-center gap-1.5 bg-orange-100/80 text-orange-700 text-[10px] font-bold px-2.5 py-1 rounded-md tracking-widest uppercase mb-4 self-start"
                >
                  <i class="fa-solid fa-star text-orange-500 text-[10px]"></i>
                  Lựa chọn phổ biến
                </div>
                <h2 class="text-[24px] font-black text-slate-900 leading-tight">
                  Ghép thanh điệu
                </h2>
              </div>
              <div class="flex flex-col items-end">
                <span
                  class="text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-0.5"
                  >ĐIỂM CAO</span
                >
                <span class="text-[22px] font-black text-[#174BB5] leading-none"
                  >12,400</span
                >
              </div>
            </div>

            <p
              class="text-[13px] text-slate-500 font-medium leading-relaxed max-w-[85%] mb-8"
            >
              Kéo dấu thanh điệu chính xác vào từ. Làm chủ bốn thanh điệu với độ
              chính xác xúc giác cùng bạn đồng hành Chibi!
            </p>

            <!-- Interactive Game Preview Zone -->
            <div
              class="border-[3px] border-dashed border-slate-200 rounded-[24px] h-[140px] flex items-center justify-center p-6 relative bg-slate-50/50 mb-8 mx-4"
            >
              <div
                class="flex items-end gap-3 text-slate-200 font-bold text-[60px] font-sans leading-none tracking-widest select-none pointer-events-none"
              >
                <span>f</span>
                <!-- Floating tile -->
                <div
                  class="w-16 h-16 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center -translate-y-4 border border-slate-50 text-[#174BB5]"
                >
                  ǎ
                </div>
                <span>l à</span>
              </div>
            </div>

            <!-- Footer action -->
            <div class="flex items-center justify-between mt-auto">
              <div class="flex items-center gap-3">
                <div class="flex shrink-0">
                  <img
                    src="https://api.dicebear.com/7.x/adventurer/svg?seed=userA"
                    class="w-8 h-8 rounded-full border-2 border-white bg-slate-100 object-cover shadow-sm relative z-20"
                  />
                  <img
                    src="https://api.dicebear.com/7.x/adventurer/svg?seed=userB"
                    class="w-8 h-8 rounded-full border-2 border-white bg-slate-100 object-cover shadow-sm relative z-10 -ml-3"
                  />
                  <div
                    class="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600 shadow-sm relative z-0 -ml-3"
                  >
                    +24
                  </div>
                </div>
                <span class="text-[12px] font-medium text-slate-400"
                  >Đang trực tuyến</span
                >
              </div>

              <button
                class="bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-[14px] px-8 py-3 rounded-xl transition-all shadow-md focus:ring-4 focus:ring-orange-500/20 outline-none"
              >
                Chơi ngay
              </button>
            </div>
          </div>

          <!-- SMALL CARDS -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <!-- Small Card 1 -->
            <div
              class="bg-white rounded-[24px] p-6 shadow-sm border border-slate-100 flex flex-col group cursor-pointer hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <h3 class="text-[17px] font-bold text-slate-900 mb-2">
                Mê cung giọng nói
              </h3>
              <p
                class="text-[12px] text-slate-500 font-medium leading-relaxed mb-10 pr-2"
              >
                Vượt qua các hành lang cổ bằng cách phát âm chính xác. Di chuyển
                nhân vật bằng giọng nói của bạn!
              </p>
              <div class="flex items-end justify-between mt-auto">
                <div class="flex flex-col">
                  <span
                    class="text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-0.5"
                    >ĐỘ KHÓ</span
                  >
                  <span class="text-[14px] font-black text-[#D97706]"
                    >Nâng cao</span
                  >
                </div>
                <div
                  class="w-10 h-10 rounded-full bg-[#174BB5] text-white flex items-center justify-center text-[14px] shadow-md group-hover:scale-110 transition-transform"
                >
                  <i class="fa-solid fa-play ml-0.5"></i>
                </div>
              </div>
            </div>

            <!-- Small Card 2 -->
            <div
              class="bg-white rounded-[24px] p-6 shadow-sm border border-slate-100 flex flex-col group cursor-pointer hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <h3 class="text-[17px] font-bold text-slate-900 mb-2">
                Câu đố nhanh
              </h3>
              <p
                class="text-[12px] text-slate-500 font-medium leading-relaxed mb-10 pr-2"
              >
                Thử thách từ vựng tính giờ kịch tính. Bạn có đủ nhanh để đánh
                bại kỷ lục của Lumi không?
              </p>
              <div class="flex items-end justify-between mt-auto">
                <div class="flex flex-col">
                  <span
                    class="text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-0.5"
                    >KỶ LỤC</span
                  >
                  <span class="text-[14px] font-black text-[#174BB5]"
                    >00:42s</span
                  >
                </div>
                <div
                  class="w-10 h-10 rounded-full bg-[#174BB5] text-white flex items-center justify-center text-[14px] shadow-md group-hover:scale-110 transition-transform"
                >
                  <i class="fa-solid fa-play ml-0.5"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT COLUMN: Weekly Progress -->
        <div
          class="bg-gradient-to-b from-[#0F5A73] to-[#0A4255] rounded-[32px] p-8 text-white shadow-md flex flex-col h-full min-h-[460px] relative overflow-hidden text-clip w-full animate-slide-left opacity-0 delay-100"
        >
          <h2 class="text-[20px] font-bold text-white mb-2 relative z-10">
            Tiến độ tuần
          </h2>

          <div class="flex flex-col gap-6 mt-8 relative z-10">
            <!-- Progress 1 -->
            <div>
              <div
                class="flex justify-between items-center text-[12px] font-bold mb-3"
              >
                <span class="text-teal-50">Độ thành thạo</span>
                <span class="text-white">78%</span>
              </div>
              <div
                class="w-full h-2.5 bg-teal-900/50 rounded-full overflow-hidden"
              >
                <div
                  class="h-full bg-[#F59E0B] rounded-full shadow-[0_0_8px_rgba(245,158,11,0.6)]"
                  style="width: 78%"
                ></div>
              </div>
            </div>

            <!-- Progress 2 -->
            <div>
              <div
                class="flex justify-between items-center text-[12px] font-bold mb-3"
              >
                <span class="text-teal-50">Độ chính xác thanh điệu</span>
                <span class="text-white">92%</span>
              </div>
              <div
                class="w-full h-2.5 bg-teal-900/50 rounded-full overflow-hidden mb-8"
              >
                <!-- The image shows a light thick gradient/white bar -->
                <div
                  class="h-full bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.6)]"
                  style="width: 92%"
                ></div>
              </div>
            </div>
          </div>

          <!-- Target Sub-widget -->
          <div
            class="bg-white/10 border border-white/10 rounded-[20px] p-5 mt-auto relative z-10 backdrop-blur-sm"
          >
            <div
              class="text-[9px] font-bold text-teal-100 uppercase tracking-widest mb-3 text-center opacity-80"
            >
              THÀNH TÍCH TIẾP THEO
            </div>
            <div class="flex items-center gap-4">
              <div
                class="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center shrink-0"
              >
                <i class="fa-solid fa-trophy text-white text-[16px]"></i>
              </div>
              <div class="flex flex-col">
                <span
                  class="text-[14px] font-bold text-white leading-tight mb-1"
                  >Bậc thầy âm thanh III</span
                >
                <span class="text-[11px] text-teal-100 font-medium"
                  >Còn 250 XP nữa</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CHALLENGES SECTION -->
      <div class="mt-4 flex flex-col animate-slide-up opacity-0 delay-200">
        <div class="flex items-center justify-between mb-4 px-1">
          <div>
            <h2
              class="text-[22px] font-black text-slate-800 tracking-tight leading-tight mb-1"
            >
              Thử thách hàng ngày
            </h2>
            <p class="text-[13px] text-slate-500 font-medium">
              Hoàn thành nhiệm vụ để nhận thêm ngọc và bảo vệ chuỗi học tập của
              bản.
            </p>
          </div>
          <button
            class="text-[13px] font-bold text-[#174BB5] hover:text-blue-800 transition-colors"
          >
            Xem tất cả &rarr;
          </button>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Challenge 1 -->
          <div
            class="bg-white rounded-[24px] p-6 shadow-sm border border-slate-100 flex items-center justify-between gap-4 cursor-pointer hover:shadow-md transition-shadow"
          >
            <div class="flex items-center gap-5">
              <div
                class="w-[52px] h-[52px] rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0"
              >
                <i class="fa-solid fa-bolt text-[22px]"></i>
              </div>
              <div class="flex flex-col">
                <h4 class="text-[16px] font-bold text-slate-900 mb-1">
                  Ác quỷ tốc độ
                </h4>
                <p
                  class="text-[12px] text-slate-500 font-medium leading-relaxed max-w-[200px]"
                >
                  Trong vòng 2 phút hoàn thành 3 câu sau để xem phản xạ của bạn
                  tới đâu.
                </p>
              </div>
            </div>
            <div
              class="flex flex-col items-end shrink-0 pl-4 border-l border-slate-100"
            >
              <span class="text-[18px] font-black text-[#D97706] mb-0.5"
                >200 XP</span
              >
              <span
                class="text-[9px] font-bold text-slate-400 tracking-widest uppercase"
                >PHẦN THƯỞNG</span
              >
            </div>
          </div>

          <!-- Challenge 2 -->
          <div
            class="bg-white rounded-[24px] p-6 shadow-sm border border-slate-100 flex items-center justify-between gap-4 cursor-pointer hover:shadow-md transition-shadow"
          >
            <div class="flex items-center gap-5">
              <div
                class="w-[52px] h-[52px] rounded-2xl bg-blue-100 text-[#174BB5] flex items-center justify-center shrink-0"
              >
                <i class="fa-solid fa-globe text-[22px]"></i>
              </div>
              <div class="flex flex-col">
                <h4 class="text-[16px] font-bold text-slate-900 mb-1">
                  Nói chuyện với bạn bè
                </h4>
                <p
                  class="text-[12px] text-slate-500 font-medium leading-relaxed max-w-[200px]"
                >
                  Hôm nay hãy leo hạng cao hơn trong mê cung giọng nói với số
                  điểm 90%.
                </p>
              </div>
            </div>
            <div
              class="flex flex-col items-end shrink-0 pl-4 border-l border-slate-100"
            >
              <span class="text-[18px] font-black text-[#174BB5] mb-0.5"
                >500 XP</span
              >
              <span
                class="text-[9px] font-bold text-slate-400 tracking-widest uppercase"
                >PHẦN THƯỞNG</span
              >
            </div>
          </div>
        </div>
      </div>

      <!-- FLOATING PUSH BOT WIDGET -->
      <div
        class="fixed bottom-8 right-8 z-50 bg-white rounded-full pl-2 pr-5 py-2 shadow-xl shadow-blue-900/10 flex items-center gap-4 cursor-pointer hover:scale-105 transition-transform border border-slate-100"
      >
        <div
          class="w-10 h-10 bg-[#174BB5] rounded-full text-white flex items-center justify-center shadow-inner"
        >
          <i class="fa-solid fa-microphone text-[16px]"></i>
        </div>
        <span
          class="text-[11px] font-bold text-slate-700 tracking-wide uppercase mt-0.5"
          >HUẤN LUYỆN VIÊN AI</span
        >
        <button
          class="text-slate-400 hover:text-slate-600 transition-colors outline-none ml-2 pt-0.5"
        >
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
useHead({ title: "Trò chơi · AI Speaking Assistant" });
</script>

<style scoped>
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
.delay-300 { animation-delay: 300ms; }
.opacity-0 { opacity: 0; }
</style>
