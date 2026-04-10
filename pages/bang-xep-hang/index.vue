<template>
  <NuxtLayout name="dashboard">
    <!-- Header -->
    <div
      class="flex items-center justify-between mb-2 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
    >
      <h1 class="text-[24px] font-black text-slate-800">Bảng Xếp Hạng</h1>
    </div>

    <!-- Main Content Container -->
    <div class="flex flex-col gap-6 mx-auto pb-10 w-full">
      <!-- Top Title section -->
      <div
        class="flex flex-col items-center justify-center mt-4 opacity-0 animate-[fadeInDown_0.6s_ease-out_0.2s_forwards]"
      >
        <h2
          class="text-[36px] font-black text-[#0B3A82] tracking-tight mb-2 drop-shadow-sm"
        >
          Đấu Trường Ngôn Ngữ
        </h2>
        <p class="text-[15px] text-slate-500 font-medium">
          Tuần 42 &bull; Còn lại 2 ngày 14 giờ
        </p>
      </div>

      <!-- Podium Section -->
      <div
        class="relative w-full max-w-[800px] mx-auto h-[350px] flex items-end justify-center mb-8 px-4"
      >
        <!-- RANK 2 -->
        <div class="relative flex flex-col items-center z-10 w-[220px]">
          <!-- Avatar floating -->
          <div
            class="absolute -top-[68px] z-20 group opacity-0 animate-[fadeInUp_0.6s_ease-out_0.5s_forwards]"
          >
            <div
              class="w-[96px] h-[96px] rounded-full border-[5px] border-slate-50 shadow-lg p-1 bg-gradient-to-br from-slate-100 to-white relative transition-transform duration-300 group-hover:-translate-y-2"
            >
              <img
                src="~/assets/images/433966299_919881073210081_7511676866786403341_n.jpg"
                alt="Minh Tuấn"
                class="w-full h-full rounded-full object-cover"
              />
              <!-- Silver Badge -->
              <div
                class="absolute top-0 -right-1 w-8 h-8 bg-gradient-to-b from-slate-300 to-slate-400 rounded-full flex items-center justify-center text-white text-[15px] font-black border-2 border-white shadow-md"
              >
                2
              </div>
            </div>
          </div>
          <!-- Card Base -->
          <div
            class="w-full bg-slate-50 rounded-t-[36px] rounded-bl-[36px] rounded-br-[16px] pt-[52px] pb-8 flex flex-col items-center shadow-sm border border-slate-100 h-[210px] transition-all duration-300 origin-bottom opacity-0 animate-[growUp_0.6s_ease-out_0.5s_forwards]"
          >
            <h3 class="text-[18px] font-bold text-slate-800">Minh Tuấn</h3>
            <span class="text-[11px] font-bold text-teal-700 mt-1.5 mb-7">HSK 5</span>
            <span class="text-[18px] font-black text-blue-800">2,450 XP</span>
          </div>
        </div>

        <!-- RANK 1 -->
        <div
          class="relative flex flex-col items-center z-30 w-[260px] shadow-2xl shadow-blue-900/15 rounded-b-[24px]"
        >
          <!-- Avatar floating -->
          <div
            class="absolute -top-[84px] z-20 group opacity-0 animate-[fadeInUp_0.6s_ease-out_0.4s_forwards]"
          >
            <!-- Glow effect -->
            <div
              class="absolute inset-0 rounded-full bg-orange-400/40 blur-[20px] animate-pulse"
            ></div>
            <div
              class="w-[124px] h-[124px] rounded-full border-[6px] border-white shadow-xl p-1.5 bg-gradient-to-tr from-orange-200 to-orange-50 relative mb-4 transition-transform duration-300 group-hover:-translate-y-2"
            >
              <img
                src="~/assets/images/664938395_822677114214082_529364762039288672_n.jpg"
                alt="Ngọc Mai"
                class="w-full h-full rounded-full object-cover border-2 border-white bg-white"
              />
              <!-- Gold Star Badge -->
              <div
                class="absolute -top-3 left-1/2 -translate-x-1/2 w-9 h-9 bg-gradient-to-b from-[#F59E0B] to-[#D97706] rounded-full flex items-center justify-center text-white text-[14px] shadow-md border-[3px] border-white z-10"
              >
                <i class="fa-solid fa-star text-[12px] drop-shadow-sm"></i>
              </div>
            </div>
          </div>
          <!-- Card Base -->
          <div
            class="w-full bg-[#0d47a1] bg-gradient-to-br from-blue-800 to-blue-900 rounded-t-[44px] rounded-b-[24px] pt-[60px] pb-10 flex flex-col items-center h-[280px] origin-bottom opacity-0 animate-[growUp_0.6s_ease-out_0.4s_forwards]"
          >
            <h3 class="text-[22px] font-bold text-white mt-1">Ngọc Mai</h3>
            <span class="text-[11px] font-bold text-blue-200 mt-1.5 mb-auto">HSK 6</span>
            <span
              class="text-[26px] font-black text-white flex items-center gap-2 drop-shadow-lg leading-none"
            >
              <i class="fa-solid fa-bolt text-yellow-400 text-[18px]"></i>
              3,120 XP
            </span>
          </div>
        </div>

        <!-- RANK 3 -->
        <div class="relative flex flex-col items-center z-10 w-[220px]">
          <!-- Avatar floating -->
          <div
            class="absolute -top-[64px] z-20 group opacity-0 animate-[fadeInUp_0.6s_ease-out_0.6s_forwards]"
          >
            <div
              class="w-[90px] h-[90px] rounded-full border-[5px] border-slate-50 shadow-md p-1 bg-gradient-to-br from-orange-100 to-white relative transition-transform duration-300 group-hover:-translate-y-2"
            >
              <img
                src="~/assets/images/433966299_919881073210081_7511676866786403341_n.jpg"
                alt="Alex Nguyen"
                class="w-full h-full rounded-full object-cover"
              />
              <!-- Bronze Badge -->
              <div
                class="absolute top-0 -right-2 w-8 h-8 bg-gradient-to-b from-[#D97706] to-[#92400E] rounded-full flex items-center justify-center text-white text-[15px] font-black border-2 border-white shadow-md"
              >
                3
              </div>
            </div>
          </div>
          <!-- Card Base -->
          <div
            class="w-full bg-slate-50 rounded-t-[36px] rounded-br-[36px] rounded-bl-[16px] pt-[48px] pb-8 flex flex-col items-center shadow-sm border border-slate-100 h-[190px] transition-all duration-300 origin-bottom opacity-0 animate-[growUp_0.6s_ease-out_0.6s_forwards]"
          >
            <h3 class="text-[17px] font-bold text-slate-800">Alex Nguyen</h3>
            <span class="text-[11px] font-bold text-teal-700 mt-1.5 mb-6">HSK 4</span>
            <span class="text-[17px] font-black text-blue-800">1,890 XP</span>
          </div>
        </div>
      </div>

      <!-- Main Content Grid -->
      <div
        class="grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-8 mt-2 items-start w-full relative z-40"
      >
        <!-- Left: Leaderboard List -->
        <div
          class="flex flex-col gap-4 relative opacity-0 animate-[fadeInLeft_0.6s_ease-out_0.8s_forwards]"
        >
          <!-- Small overlay shadow to hide gap at top logically -->
          <div class="flex justify-between items-center px-1 mb-1">
            <div class="flex items-center gap-2.5 text-slate-800 font-bold text-[16px]">
              <i class="fa-solid fa-user-group text-blue-700 text-[15px]"></i>
              Tất cả bạn bè
            </div>
            <span class="text-[13px] font-medium text-slate-500">Tổng cộng: 24</span>
          </div>

          <!-- Rank 4 -->
          <div
            class="bg-white rounded-[20px] p-4 flex items-center gap-4 transition-all hover:shadow-md border border-slate-50 hover:border-slate-100 cursor-pointer"
          >
            <div class="w-7 text-center text-[16px] font-bold text-slate-600 shrink-0">
              4
            </div>
            <div
              class="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-slate-100 bg-slate-50"
            >
              <img
                src="~/assets/images/664938395_822677114214082_529364762039288672_n.jpg"
                class="w-full h-full object-cover px-1 pt-1"
              />
            </div>
            <div class="flex-1 min-w-0 pr-2">
              <h4 class="text-[15px] font-bold text-slate-800 truncate mb-1">
                Khánh Linh
              </h4>
              <div class="flex items-center gap-2">
                <span
                  class="bg-cyan-100 text-teal-800 text-[9px] font-black px-2 py-[2px] rounded-full uppercase tracking-wider"
                  >HSK 4</span
                >
                <span class="text-[12px] text-slate-500 truncate"
                  >Thành tích xuất sắc 3 ngày liền</span
                >
              </div>
            </div>
            <div class="flex flex-col items-end shrink-0 mr-2">
              <span class="text-[16px] font-black text-blue-800 leading-tight"
                >1,420</span
              >
              <span class="text-[9px] font-bold text-slate-400/80 uppercase"
                >XP TUẦN</span
              >
            </div>
            <button
              class="bg-[#0B3A82] hover:bg-blue-900 text-white font-bold text-[13px] px-5 py-2.5 rounded-[12px] shrink-0 transition-colors shadow-sm focus:ring-2 focus:ring-blue-800/20 outline-none"
            >
              Thách đấu
            </button>
          </div>

          <!-- Rank 5 (Current User) -->
          <div
            class="bg-[#EEF2FF] rounded-[20px] p-4 flex items-center gap-4 border-2 border-blue-200 relative overflow-hidden transition-all shadow-sm"
          >
            <!-- BẠN Flag -->
            <div
              class="absolute right-0 top-0 bg-[#0B3A82] text-white text-[9px] font-black px-2.5 py-1 rounded-bl-xl shadow-sm tracking-widest z-10"
            >
              BẠN
            </div>
            <div class="w-7 text-center text-[16px] font-bold text-blue-700 shrink-0">
              5
            </div>
            <div
              class="w-12 h-12 rounded-full overflow-hidden shrink-0 border-[3px] border-white shadow-sm bg-blue-50"
            >
              <img
                src="~/assets/images/433966299_919881073210081_7511676866786403341_n.jpg"
                class="w-full h-full object-cover px-1 pt-1"
              />
            </div>
            <div class="flex-1 min-w-0 pr-2">
              <h4
                class="text-[15px] font-bold text-slate-900 truncate tracking-tight mb-1"
              >
                Đặng Huy (Bạn)
              </h4>
              <div class="flex items-center gap-2">
                <span
                  class="bg-indigo-100 text-indigo-800 text-[9px] font-black px-2 py-[2px] rounded-full uppercase tracking-wider"
                  >HSK 3</span
                >
                <div
                  class="h-1.5 w-[90px] bg-blue-200/60 rounded-full overflow-hidden ml-1"
                >
                  <div class="h-full bg-[#0B3A82] w-[45%] rounded-full"></div>
                </div>
              </div>
            </div>
            <div class="flex flex-col items-end shrink-0 mr-6">
              <span class="text-[16px] font-black text-blue-800 leading-tight"
                >1,215</span
              >
              <span class="text-[9px] font-bold text-blue-800/50 uppercase">XP TUẦN</span>
            </div>
            <!-- Empty action slot for current user / Profile indicator -->
            <button
              class="w-[84px] h-[38px] flex justify-end items-center text-slate-400 hover:text-slate-600 transition-colors outline-none shrink-0 pr-1"
            >
              <i
                class="fa-regular fa-user border-[2px] border-slate-300 rounded-full p-[5px] text-[15px]"
              ></i>
            </button>
          </div>

          <!-- Rank 6 -->
          <div
            class="bg-white rounded-[20px] p-4 flex items-center gap-4 transition-all hover:shadow-md border border-slate-50 hover:border-slate-100 cursor-pointer"
          >
            <div class="w-7 text-center text-[16px] font-bold text-slate-600 shrink-0">
              6
            </div>
            <div
              class="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-slate-100 bg-slate-50"
            >
              <img
                src="~/assets/images/663475564_984181414788307_7468468408698592801_n.jpg"
                class="w-full h-full object-cover px-1 pt-1"
              />
            </div>
            <div class="flex-1 min-w-0 pr-2">
              <h4 class="text-[15px] font-bold text-slate-800 truncate mb-1">Thế Anh</h4>
              <div class="flex items-center gap-2">
                <span
                  class="bg-cyan-100 text-teal-800 text-[9px] font-black px-2 py-[2px] rounded-full uppercase tracking-wider"
                  >HSK 5</span
                >
                <span class="text-[12px] text-slate-500 truncate"
                  >Vừa hoàn thành bài học "Ẩm thực"</span
                >
              </div>
            </div>
            <div class="flex flex-col items-end shrink-0 mr-2">
              <span class="text-[16px] font-black text-blue-800 leading-tight">980</span>
              <span class="text-[9px] font-bold text-slate-400/80 uppercase"
                >XP TUẦN</span
              >
            </div>
            <button
              class="bg-[#0B3A82] hover:bg-blue-900 text-white font-bold text-[13px] px-5 py-2.5 rounded-[12px] shrink-0 transition-colors shadow-sm focus:ring-2 focus:ring-blue-800/20 outline-none"
            >
              Thách đấu
            </button>
          </div>

          <!-- Rank 7 -->
          <div
            class="bg-white rounded-[20px] p-4 flex items-center gap-4 transition-all hover:shadow-md border border-slate-50 hover:border-slate-100 cursor-pointer"
          >
            <div class="w-7 text-center text-[16px] font-bold text-slate-600 shrink-0">
              7
            </div>
            <div
              class="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-slate-100 bg-slate-50"
            >
              <img
                src="~/assets/images/623074249_929262443001452_7912104950858286531_n.jpg"
                class="w-full h-full object-cover px-1 pt-1"
              />
            </div>
            <div class="flex-1 min-w-0 pr-2">
              <h4 class="text-[15px] font-bold text-slate-800 truncate mb-1">Quốc Bảo</h4>
              <div class="flex items-center gap-2">
                <span
                  class="bg-cyan-100 text-teal-800 text-[9px] font-black px-2 py-[2px] rounded-full uppercase tracking-wider"
                  >HSK 2</span
                >
                <span class="text-[12px] text-slate-500 truncate"
                  >Cần thêm 120 XP để thăng hạng</span
                >
              </div>
            </div>
            <div class="flex flex-col items-end shrink-0 mr-2">
              <span class="text-[16px] font-black text-blue-800 leading-tight">850</span>
              <span class="text-[9px] font-bold text-slate-400/80 uppercase"
                >XP TUẦN</span
              >
            </div>
            <button
              class="bg-[#0B3A82] hover:bg-blue-900 text-white font-bold text-[13px] px-5 py-2.5 rounded-[12px] shrink-0 transition-colors shadow-sm focus:ring-2 focus:ring-blue-800/20 outline-none"
            >
              Thách đấu
            </button>
          </div>
        </div>

        <!-- Right: Summary Widgets -->
        <div
          class="flex flex-col gap-6 pt-1 opacity-0 animate-[fadeInRight_0.6s_ease-out_0.8s_forwards]"
        >
          <!-- Orange Goal Widget -->
          <div
            class="bg-gradient-to-br from-[#E67E22] to-[#F39C12] rounded-[24px] p-7 text-white shadow-[0_12px_24px_-8px_rgba(230,126,34,0.4)] relative overflow-hidden group"
          >
            <!-- Decorative stars in background -->
            <div
              class="absolute -top-4 -right-4 text-[70px] opacity-10 rotate-12 transition-transform duration-700 group-hover:rotate-45 pointer-events-none"
            >
              <i class="fa-solid fa-star"></i>
            </div>
            <div
              class="absolute bottom-10 -right-8 text-[90px] opacity-10 -rotate-12 transition-transform duration-700 group-hover:-rotate-45 pointer-events-none"
            >
              <i class="fa-solid fa-star"></i>
            </div>

            <h3
              class="text-[20px] font-black mb-2 drop-shadow-sm relative z-10 leading-tight"
            >
              Mục tiêu tuần
            </h3>
            <p
              class="text-[13px] text-orange-50 leading-relaxed font-medium relative z-10"
            >
              Bạn còn thiếu 1,235 XP để lọt vào Top 3.
            </p>

            <div class="mt-8 relative z-10">
              <div
                class="flex justify-between items-center text-[10px] font-black tracking-widest uppercase mb-1.5 text-orange-100"
              >
                <span>TIẾN ĐỘ</span>
                <span>60%</span>
              </div>
              <div
                class="w-full h-[6px] bg-orange-900/20 rounded-full overflow-hidden backdrop-blur-sm"
              >
                <div
                  class="h-full bg-white rounded-full w-[60%] shadow-[0_0_10px_rgba(255,255,255,0.8)] relative overflow-hidden"
                >
                  <!-- Shimmer effect -->
                  <div
                    class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-50 translate-x-[-100%] animate-[shimmer_2s_infinite]"
                  ></div>
                </div>
              </div>
            </div>

            <button
              class="w-full bg-white hover:bg-orange-50 focus:ring-4 focus:ring-white/30 outline-none text-[#D35400] font-black text-[14px] py-4 rounded-[14px] mt-6 transition-all shadow-md active:scale-[0.98] relative z-10"
            >
              NHẬN XP NGAY
            </button>
          </div>

          <!-- Tip Widget -->
          <div
            class="bg-slate-50/80 rounded-[28px] p-7 border border-slate-100 shadow-sm backdrop-blur-sm"
          >
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-10 h-10 rounded-full bg-[#0B5A7A] flex items-center justify-center text-white shadow-md"
              >
                <i class="fa-regular fa-lightbulb text-[16px]"></i>
              </div>
              <h3 class="text-[16px] font-bold text-slate-800">Mẹo Thăng Hạng</h3>
            </div>

            <p class="text-[13px] text-slate-600 leading-relaxed w-[96%] mt-1">
              Chơi các trò chơi
              <span class="font-bold text-slate-800">Daily Flashcards</span>
              giúp bạn kiếm được gấp đôi XP vào khung giờ vàng (18:00 - 20:00). Đừng bỏ
              lỡ!
            </p>

            <div class="w-full h-px bg-slate-200/60 my-5"></div>

            <div class="flex items-center gap-4">
              <div class="flex shrink-0">
                <img
                  src="https://api.dicebear.com/7.x/adventurer/svg?seed=friend1"
                  class="w-7 h-7 rounded-full border-[2px] border-slate-50 object-cover bg-white shadow-sm z-30 relative"
                />
                <img
                  src="https://api.dicebear.com/7.x/adventurer/svg?seed=friend2"
                  class="w-7 h-7 rounded-full border-[2px] border-slate-50 object-cover bg-white shadow-sm z-20 -ml-2.5 relative"
                />
                <img
                  src="https://api.dicebear.com/7.x/adventurer/svg?seed=friend3"
                  class="w-7 h-7 rounded-full border-[2px] border-slate-50 object-cover bg-white shadow-sm z-10 -ml-2.5 relative"
                />
                <div
                  class="w-7 h-7 rounded-full border-[2px] border-slate-50 bg-slate-200 text-slate-600 flex items-center justify-center text-[9px] font-bold z-0 -ml-2.5 relative shadow-sm"
                >
                  +12
                </div>
              </div>
              <span class="text-[10px] text-slate-400 font-medium leading-[1.3] flex-1">
                Bạn bè của bạn đã hoàn thành bài tập hôm nay.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
useHead({ title: "Bảng Xếp Hạng · AI Speaking Assistant" });
</script>

<style scoped>
@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes growUp {
  from {
    transform: scaleY(0);
    opacity: 0;
  }
  to {
    transform: scaleY(1);
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
