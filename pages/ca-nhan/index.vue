<template>
  <NuxtLayout name="dashboard">
    <div class="max-w-4xl mx-auto pb-10 animate-fade-in-up">
      <!-- User Info Section -->
      <div class="flex flex-col items-center mb-10">
        <!-- Avatar -->
        <div class="relative mb-5 group cursor-pointer">
          <div
            class="w-[130px] h-[130px] rounded-full p-[3px] bg-gradient-to-tr from-[#0034b5] to-[#40a3ff] shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <div
              class="w-full h-full rounded-full border-4 border-white bg-slate-800 overflow-hidden relative"
            >
              <img
                src="~/assets/images/433966299_919881073210081_7511676866786403341_n.jpg"
                alt="Panda Chibi"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
          <!-- Edit icon -->
          <button
            class="absolute bottom-1 right-1 w-9 h-9 bg-[#A66127] text-white rounded-full flex items-center justify-center border-2 border-white shadow-md hover:bg-[#8D501F] transition-colors hover:scale-110 active:scale-95"
          >
            <i class="pi pi-pencil text-[14px]"></i>
          </button>
        </div>

        <!-- Name -->
        <h2 class="text-3xl font-extrabold text-[#003A96] mb-3">Alex Chen</h2>

        <!-- Tags -->
        <div class="flex items-center gap-2.5">
          <span
            class="px-3 py-1.5 bg-[#E6EEF9] text-[#003A96] text-[13px] font-bold rounded-full"
            >Cấp độ 4</span
          >
          <span
            class="px-3 py-1.5 bg-[#D2EFFF] text-[#006F96] text-[13px] font-bold rounded-full"
            >HSK 3</span
          >
          <span
            class="px-2 py-1.5 text-[#A66127] text-[13px] font-extrabold flex items-center gap-1.5"
          >
            <i class="fa-solid fa-fire text-[#B6560A]"></i>
            15 Ngày liên tiếp
          </span>
        </div>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-10 px-2">
        <!-- Card 1 -->
        <div
          class="bg-white rounded-[24px] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col justify-between hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all cursor-pointer"
        >
          <i
            class="fa-solid fa-bolt-lightning text-[#3C82F6] text-[22px] mb-4"
          ></i>
          <div>
            <div
              class="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider mb-1"
            >
              Tổng XP
            </div>
            <div class="text-[26px] font-extrabold text-slate-800 leading-none">
              12,450
            </div>
          </div>
        </div>
        <!-- Card 2 -->
        <div
          class="bg-white rounded-[24px] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col justify-between hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all cursor-pointer"
        >
          <i class="fa-regular fa-clock text-[#A66127] text-[22px] mb-4"></i>
          <div>
            <div
              class="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider mb-1"
            >
              Thời gian học
            </div>
            <div class="text-[26px] font-extrabold text-slate-800 leading-none">
              42 Giờ
            </div>
          </div>
        </div>
        <!-- Card 3 -->
        <div
          class="bg-white rounded-[24px] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col justify-between hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all cursor-pointer"
        >
          <i
            class="fa-solid fa-graduation-cap text-[#497A8C] text-[22px] mb-4"
          ></i>
          <div>
            <div
              class="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider mb-1"
            >
              Khóa học
            </div>
            <div class="text-[26px] font-extrabold text-slate-800 leading-none">
              08
            </div>
          </div>
        </div>
        <!-- Card 4 -->
        <div
          class="bg-white rounded-[24px] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col justify-between hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all cursor-pointer"
        >
          <i class="fa-solid fa-medal text-[#D23348] text-[22px] mb-4"></i>
          <div>
            <div
              class="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider mb-1"
            >
              Hạng Gold
            </div>
            <div class="text-[26px] font-extrabold text-slate-800 leading-none">
              #03
            </div>
          </div>
        </div>
      </div>

      <!-- Chibi Collection -->
      <div class="mb-10 px-2">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-[18px] font-bold text-[#003A96]">Bộ sưu tập Chibi</h3>
          <button
            class="text-[13px] font-bold text-[#A66127] hover:text-[#8D501F] transition-colors"
          >
            Xem tất cả
          </button>
        </div>
        <!-- List -->
        <div class="flex gap-4 md:gap-5 overflow-x-auto pb-4 hide-scrollbar">
          <!-- Chibi 1 (Active/Selected) -->
          <div
            class="flex flex-col items-center min-w-[100px] md:min-w-[110px]"
          >
            <div
              class="w-[100px] h-[100px] md:w-[110px] md:h-[110px] rounded-3xl bg-[#EEF5F9] border-[2px] border-[#CBDDF8] flex items-center justify-center mb-2.5 overflow-hidden shadow-sm hover:scale-105 cursor-pointer transition-transform duration-300"
            >
              <img
                src="~/assets/images/433966299_919881073210081_7511676866786403341_n.jpg"
                class="w-[60%] h-[60%] object-cover rounded-full shadow-sm"
                alt="Gấu Trúc"
              />
            </div>
            <span class="text-[13px] font-extrabold text-slate-800"
              >Gấu Trúc</span
            >
          </div>

          <!-- Chibi 2 -->
          <div
            class="flex flex-col items-center min-w-[100px] md:min-w-[110px]"
          >
            <div
              class="w-[100px] h-[100px] md:w-[110px] md:h-[110px] rounded-3xl bg-[#F6EBE5] border-[2px] border-transparent flex items-center justify-center mb-2.5 overflow-hidden hover:border-[#F6EBE5] hover:scale-105 transition-all duration-300 cursor-pointer shadow-sm"
            >
              <img
                src="~/assets/images/623074249_929262443001452_7912104950858286531_n.jpg"
                class="w-[60%] h-[60%] object-cover rounded-full shadow-sm"
                alt="Rồng Con"
              />
            </div>
            <span class="text-[13px] font-bold text-slate-500">Rồng Con</span>
          </div>

          <!-- Chibi 3 -->
          <div
            class="flex flex-col items-center min-w-[100px] md:min-w-[110px]"
          >
            <div
              class="w-[100px] h-[100px] md:w-[110px] md:h-[110px] rounded-3xl bg-[#F4F4F6] border-[2px] border-transparent flex items-center justify-center mb-2.5 overflow-hidden hover:border-[#F4F4F6] hover:scale-105 transition-all duration-300 cursor-pointer shadow-sm"
            >
              <img
                src="~/assets/images/663475564_984181414788307_7468468408698592801_n.jpg"
                class="w-[60%] h-[60%] object-cover rounded-full shadow-sm"
                alt="Cáo Nhí"
              />
            </div>
            <span class="text-[13px] font-bold text-slate-500">Cáo Nhí</span>
          </div>

          <!-- Chibi 4 -->
          <div
            class="flex flex-col items-center min-w-[100px] md:min-w-[110px]"
          >
            <div
              class="w-[100px] h-[100px] md:w-[110px] md:h-[110px] rounded-3xl bg-[#F4EBEB] border-[2px] border-transparent flex items-center justify-center mb-2.5 overflow-hidden hover:border-[#F4EBEB] hover:scale-105 transition-all duration-300 cursor-pointer shadow-sm"
            >
              <img
                src="~/assets/images/664362137_1419784983250800_788801404379665627_n.jpg"
                class="w-[60%] h-[60%] object-cover rounded-full shadow-sm"
                alt="Hổ Béo"
              />
            </div>
            <span class="text-[13px] font-bold text-slate-500">Hổ Béo</span>
          </div>

          <!-- Chibi 5 -->
          <div
            class="flex flex-col items-center min-w-[100px] md:min-w-[110px]"
          >
            <div
              class="w-[100px] h-[100px] md:w-[110px] md:h-[110px] rounded-3xl bg-[#EAF2ED] border-[2px] border-transparent flex items-center justify-center mb-2.5 overflow-hidden hover:border-[#EAF2ED] hover:scale-105 transition-all duration-300 cursor-pointer shadow-sm"
            >
              <img
                src="~/assets/images/664938395_822677114214082_529364762039288672_n.jpg"
                class="w-[60%] h-[60%] object-cover rounded-full shadow-sm"
                alt="Thỏ Ngọc"
              />
            </div>
            <span class="text-[13px] font-bold text-slate-500">Thỏ Ngọc</span>
          </div>
        </div>
      </div>

      <!-- Badge Collection -->
      <div class="mb-10 px-2">
        <h3 class="text-[18px] font-bold text-[#003A96] mb-4">
          Bộ sưu tập Huy hiệu
        </h3>
        <div
          class="bg-[#F5F6F8] rounded-[30px] p-6 lg:p-8 flex items-center gap-6 lg:gap-8 overflow-x-auto hide-scrollbar"
        >
          <!-- Badge 1 Earned -->
          <div
            class="relative shrink-0 transition-transform duration-300 hover:scale-110 cursor-pointer"
          >
            <div
              class="w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-slate-100"
            >
              <i
                class="fa-solid fa-wand-sparkles text-[26px] text-[#AC652A]"
              ></i>
            </div>
            <span
              class="absolute -bottom-1 -right-2 bg-[#004751] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full border-2 border-white shadow-sm"
              >Lvl 3</span
            >
          </div>

          <!-- Badge 2 Earned -->
          <div
            class="relative shrink-0 transition-transform duration-300 hover:scale-110 cursor-pointer"
          >
            <div
              class="w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-slate-100"
            >
              <i class="fa-solid fa-book-open text-[22px] text-[#003A96]"></i>
            </div>
            <span
              class="absolute -bottom-1 -right-2 bg-[#004751] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full border-2 border-white shadow-sm"
              >Lvl 5</span
            >
          </div>

          <!-- Badge 3 Earned -->
          <div
            class="relative shrink-0 transition-transform duration-300 hover:scale-110 cursor-pointer"
          >
            <div
              class="w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-slate-100"
            >
              <i class="fa-solid fa-dumbbell text-[22px] text-[#B92A2A]"></i>
            </div>
            <span
              class="absolute -bottom-1 -right-2 bg-[#004751] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full border-2 border-white shadow-sm"
              >Lvl 2</span
            >
          </div>

          <!-- Badges Locked -->
          <div
            class="shrink-0 transition-transform hover:scale-105 cursor-pointer"
          >
            <div
              class="w-[70px] h-[70px] bg-slate-100/50 rounded-full flex items-center justify-center"
            >
              <i class="fa-solid fa-trophy text-[22px] text-[#DCE1E5]"></i>
            </div>
          </div>

          <div
            class="shrink-0 transition-transform hover:scale-105 cursor-pointer"
          >
            <div
              class="w-[70px] h-[70px] bg-slate-100/50 rounded-full flex items-center justify-center"
            >
              <i class="fa-solid fa-medal text-[22px] text-[#DCE1E5]"></i>
            </div>
          </div>

          <div
            class="shrink-0 transition-transform hover:scale-105 cursor-pointer"
          >
            <div
              class="w-[70px] h-[70px] bg-slate-100/50 rounded-full flex items-center justify-center"
            >
              <i class="fa-solid fa-flask text-[22px] text-[#DCE1E5]"></i>
            </div>
          </div>

          <!-- Filler for spacing -->
          <div class="min-w-[20px]"></div>
        </div>
      </div>

      <!-- Learning Progress Chart -->
      <div class="mb-4 px-2">
        <div
          class="bg-white rounded-[30px] p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-slate-50"
        >
          <div class="flex items-center justify-between mb-10">
            <h3 class="text-[18px] font-bold text-slate-800">
              Tiến trình học tập
            </h3>
            <div
              class="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full"
            >
              <span class="w-3 h-3 rounded-full bg-[#003A96]"></span>
              <span class="text-[12px] font-semibold text-slate-500"
                >XP Hàng ngày</span
              >
            </div>
          </div>

          <!-- Chart Bars Container -->
          <div
            class="h-[180px] flex items-end justify-between px-2 sm:px-6 relative w-full gap-2"
          >
            <!-- Mon -->
            <div
              class="flex flex-col items-center gap-4 w-[12%] group h-full justify-end"
            >
              <div
                class="w-full max-w-[65px] bg-[#F1F4F8] rounded-t-[10px] transition-colors group-hover:bg-[#E2E8F0] shadow-sm"
                style="height: 25%"
              ></div>
              <span
                class="text-[12px] font-bold text-slate-400 text-center uppercase"
                >ThS 2</span
              >
            </div>

            <!-- Tue -->
            <div
              class="flex flex-col items-center gap-4 w-[12%] group h-full justify-end"
            >
              <div
                class="w-full max-w-[65px] bg-[#F1F4F8] rounded-t-[10px] transition-colors group-hover:bg-[#E2E8F0] shadow-sm"
                style="height: 35%"
              ></div>
              <span
                class="text-[12px] font-bold text-slate-400 text-center uppercase"
                >ThS 3</span
              >
            </div>

            <!-- Wed -->
            <div
              class="flex flex-col items-center gap-4 w-[12%] group h-full justify-end"
            >
              <div
                class="w-full max-w-[65px] bg-[#F1F4F8] rounded-t-[10px] transition-colors group-hover:bg-[#E2E8F0] shadow-sm"
                style="height: 15%"
              ></div>
              <span
                class="text-[12px] font-bold text-slate-400 text-center uppercase"
                >ThS 4</span
              >
            </div>

            <!-- Thu -->
            <div
              class="flex flex-col items-center gap-4 w-[12%] group h-full justify-end"
            >
              <div
                class="w-full max-w-[65px] bg-[#F1F4F8] rounded-t-[10px] transition-colors group-hover:bg-[#E2E8F0] shadow-sm"
                style="height: 55%"
              ></div>
              <span
                class="text-[12px] font-bold text-slate-400 text-center uppercase"
                >ThS 5</span
              >
            </div>

            <!-- Fri (Active) -->
            <div
              class="flex flex-col items-center gap-4 w-[14%] sm:w-[13%] group relative h-full justify-end"
            >
              <div
                class="absolute -top-12 bg-slate-800 text-white text-[12px] font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 hidden sm:block shadow-lg"
              >
                1200 XP
                <div
                  class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45"
                ></div>
              </div>
              <div
                class="w-full max-w-[70px] bg-[#003A96] rounded-t-[10px] transition-all hover:brightness-110 shadow-md"
                style="height: 85%"
              ></div>
              <span
                class="text-[12px] font-bold text-slate-400 text-center uppercase"
                >ThS 6</span
              >
            </div>

            <!-- Sat -->
            <div
              class="flex flex-col items-center gap-4 w-[12%] group h-full justify-end"
            >
              <div
                class="w-full max-w-[65px] bg-[#F1F4F8] rounded-t-[10px] transition-colors group-hover:bg-[#E2E8F0] shadow-sm"
                style="height: 45%"
              ></div>
              <span
                class="text-[12px] font-bold text-slate-400 text-center uppercase"
                >ThS 7</span
              >
            </div>

            <!-- Sun -->
            <div
              class="flex flex-col items-center gap-4 w-[12%] group h-full justify-end"
            >
              <div
                class="w-full max-w-[65px] bg-[#F1F4F8] rounded-t-[10px] transition-colors group-hover:bg-[#E2E8F0] shadow-sm"
                style="height: 20%"
              ></div>
              <span
                class="text-[12px] font-bold text-slate-400 text-center uppercase"
                >CN</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: "Cá nhân - AI Speaking Assistant",
});
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
