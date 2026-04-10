<template>
  <NuxtLayout name="dashboard">
    <div class="flex flex-col gap-10 max-w-7xl mx-auto pb-10 w-full relative">
      <!-- HEADER -->
      <div
        class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0 animate-fade-in"
      >
        <div>
          <h1 class="text-[32px] font-black text-slate-900 mb-1.5 leading-tight">
            Bạn bè
          </h1>
          <p class="text-[14px] text-slate-500 max-w-sm leading-relaxed">
            Kết nối với những người bạn có cùng mục tiêu để luyện tập một cách hiệu quả
            hơn.
          </p>
        </div>
        <div class="relative w-[340px] shrink-0 mt-1">
          <i
            class="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          ></i>
          <input
            type="text"
            placeholder="Tìm kiếm theo tên hoặc ID..."
            class="w-full bg-white border-0 rounded-[14px] py-4 pl-11 pr-4 text-[13px] outline-none focus:ring-2 focus:ring-slate-300 transition-shadow placeholder:text-slate-400 font-medium"
          />
        </div>
      </div>

      <!-- MAIN GRID -->
      <div
        class="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-8 items-start relative z-10 w-full"
      >
        <!-- LEFT COLUMN -->
        <div class="flex flex-col gap-10 w-full animate-fade-in-left anim-delay-100">
          <!-- Suggested friends -->
          <section>
            <div class="flex justify-between items-center mb-5 px-1">
              <h2 class="text-[17px] font-bold text-slate-800 flex items-center gap-2">
                <i class="fa-solid fa-wand-magic-sparkles text-amber-500"></i>
                Bạn bè gợi ý
              </h2>
              <button
                class="text-[12px] font-bold text-blue-700 hover:text-blue-800 transition-colors"
              >
                Xem tất cả
              </button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <!-- Suggestion Card 1 -->
              <div
                class="bg-white rounded-[20px] p-5 border border-slate-100 shadow-sm flex flex-col gap-4 transition-transform hover:-translate-y-1 duration-300"
              >
                <div class="flex items-center gap-4">
                  <div class="relative shrink-0">
                    <img
                      src="https://api.dicebear.com/7.x/adventurer/svg?seed=MinhAnh&backgroundColor=f8fafc"
                      alt="Minh Anh"
                      class="w-14 h-14 rounded-[14px] object-cover bg-slate-50 border border-slate-100 p-0.5"
                    />
                    <span
                      class="absolute -bottom-1 -right-1 bg-[#0F5F6C] text-white text-[9px] font-black px-1.5 py-[2px] rounded border-[1.5px] border-white shadow-sm tracking-widest"
                      >B2</span
                    >
                  </div>
                  <div>
                    <h3 class="text-[15px] font-bold text-slate-900 leading-tight">
                      Minh Anh
                    </h3>
                    <p class="text-[11px] font-medium text-slate-500 mt-1 leading-snug">
                      85% tương đồng trình độ
                    </p>
                  </div>
                </div>
                <button
                  class="w-full bg-[#0B3A82] text-white font-bold text-[13px] py-2.5 rounded-xl transition-colors hover:bg-blue-900 shadow-sm flex items-center justify-center gap-2"
                >
                  <i class="fa-solid fa-user-plus text-[12px]"></i> Thêm bạn
                </button>
              </div>

              <!-- Suggestion Card 2 -->
              <div
                class="bg-white rounded-[20px] p-5 border border-slate-100 shadow-sm flex flex-col gap-4 transition-transform hover:-translate-y-1 duration-300"
              >
                <div class="flex items-center gap-4">
                  <div class="relative shrink-0">
                    <img
                      src="https://api.dicebear.com/7.x/adventurer/svg?seed=TranLong&backgroundColor=dcfce7"
                      alt="Trần Long"
                      class="w-14 h-14 rounded-[14px] object-cover bg-green-50 border border-green-100 p-0.5"
                    />
                    <span
                      class="absolute -bottom-1 -right-1 bg-[#92400E] text-white text-[9px] font-black px-1.5 py-[2px] rounded border-[1.5px] border-white shadow-sm tracking-widest"
                      >C1</span
                    >
                  </div>
                  <div>
                    <h3 class="text-[15px] font-bold text-slate-900 leading-tight">
                      Trần Long
                    </h3>
                    <p class="text-[11px] font-medium text-slate-500 mt-1 leading-snug">
                      Trình độ cao, sẵn sàng giúp đỡ
                    </p>
                  </div>
                </div>
                <button
                  class="w-full bg-[#0B3A82] text-white font-bold text-[13px] py-2.5 rounded-xl transition-colors hover:bg-blue-900 shadow-sm flex items-center justify-center gap-2"
                >
                  <i class="fa-solid fa-user-plus text-[12px]"></i> Thêm bạn
                </button>
              </div>
            </div>
          </section>

          <!-- Friend Requests -->
          <section class="bg-[#F1F3F5] rounded-[28px] p-7 pb-8 relative overflow-hidden">
            <!-- Decor -->
            <div
              class="absolute -right-8 -top-8 w-32 h-32 bg-slate-200/50 rounded-full blur-2xl"
            ></div>

            <div class="flex items-center gap-3 mb-6 relative z-10">
              <i class="fa-regular fa-envelope text-[#0B3A82] text-[18px]"></i>
              <h2 class="text-[17px] font-bold text-slate-800">Lời mời kết bạn</h2>
              <span
                class="bg-red-100 text-red-600 text-[11px] font-bold px-2 py-[2px] rounded-full"
                >3</span
              >
            </div>

            <div class="flex flex-col gap-3.5 relative z-10">
              <!-- Request Item 1 -->
              <div
                class="bg-white rounded-[20px] p-3.5 px-4 flex items-center justify-between shadow-sm border border-transparent hover:border-slate-200 transition-all cursor-default"
              >
                <div class="flex items-center gap-4">
                  <img
                    src="https://api.dicebear.com/7.x/adventurer/svg?seed=ManhLinh"
                    alt="Mạnh Linh"
                    class="w-[46px] h-[46px] rounded-[14px] object-cover bg-slate-50 border border-slate-100"
                  />
                  <div>
                    <h4 class="text-[15px] font-bold text-slate-900 leading-none mb-1">
                      Mạnh Linh
                    </h4>
                    <p class="text-[11px] font-medium text-slate-500">
                      Muốn cùng bạn luyện HSK
                    </p>
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <button
                    class="w-10 h-10 rounded-[12px] bg-[#0B3A82] text-white flex items-center justify-center hover:bg-blue-900 transition-colors shadow-sm outline-none focus:ring-2 focus:ring-blue-800/30"
                  >
                    <i class="fa-solid fa-check"></i>
                  </button>
                  <button
                    class="w-10 h-10 rounded-[12px] bg-slate-200/80 text-slate-600 flex items-center justify-center hover:bg-slate-300 transition-colors outline-none focus:ring-2 focus:ring-slate-400/30"
                  >
                    <i class="fa-solid fa-xmark"></i>
                  </button>
                </div>
              </div>

              <!-- Request Item 2 -->
              <div
                class="bg-white rounded-[20px] p-3.5 px-4 flex items-center justify-between shadow-sm border border-transparent hover:border-slate-200 transition-all cursor-default"
              >
                <div class="flex items-center gap-4">
                  <img
                    src="https://api.dicebear.com/7.x/adventurer/svg?seed=QuangAn"
                    alt="Quang An"
                    class="w-[46px] h-[46px] rounded-[14px] object-cover bg-slate-50 border border-slate-100"
                  />
                  <div>
                    <h4 class="text-[15px] font-bold text-slate-900 leading-none mb-1">
                      Quang An
                    </h4>
                    <p class="text-[11px] font-medium text-slate-500">
                      Người chơi mới tiềm năng
                    </p>
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <button
                    class="w-10 h-10 rounded-[12px] bg-[#0B3A82] text-white flex items-center justify-center hover:bg-blue-900 transition-colors shadow-sm outline-none focus:ring-2 focus:ring-blue-800/30"
                  >
                    <i class="fa-solid fa-check"></i>
                  </button>
                  <button
                    class="w-10 h-10 rounded-[12px] bg-slate-200/80 text-slate-600 flex items-center justify-center hover:bg-slate-300 transition-colors outline-none focus:ring-2 focus:ring-slate-400/30"
                  >
                    <i class="fa-solid fa-xmark"></i>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        <!-- RIGHT COLUMN -->
        <div
          class="bg-slate-50/80 rounded-[32px] p-7 border border-slate-100/50 flex flex-col h-full min-h-[500px] animate-fade-in-right anim-delay-100"
        >
          <div class="flex items-center justify-between mb-6 px-1">
            <h2 class="text-[17px] font-bold text-slate-900">Danh sách bạn bè</h2>
            <button
              class="text-slate-400 hover:text-slate-600 transition-colors w-8 h-8 flex items-center justify-end outline-none focus:text-slate-600"
            >
              <i class="fa-solid fa-ellipsis-vertical text-[16px]"></i>
            </button>
          </div>

          <div class="flex flex-col gap-5">
            <!-- Friend 1: Ngoc Bich -->
            <div
              class="flex items-center justify-between group cursor-pointer px-1 rounded-xl hover:bg-slate-100 -mx-1 p-1 transition-colors"
            >
              <div class="flex items-center gap-3.5">
                <div class="relative">
                  <img
                    src="https://api.dicebear.com/7.x/adventurer/svg?seed=NgocBich"
                    alt="Ngọc Bích"
                    class="w-10 h-10 rounded-full object-cover bg-white shadow-sm border border-slate-100"
                  />
                  <span
                    class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-teal-500 rounded-full border-2 border-slate-50"
                  ></span>
                </div>
                <div>
                  <h4
                    class="text-[14px] font-bold text-slate-800 leading-tight group-hover:text-[#0B3A82] transition-colors mb-0.5"
                  >
                    Ngọc Bích
                  </h4>
                  <p class="text-[11px] font-medium text-teal-600">Online</p>
                </div>
              </div>
              <span
                class="bg-cyan-100 text-teal-700 text-[9px] font-black px-2 py-[2px] rounded-[6px]"
                >HSK 1</span
              >
            </div>

            <!-- Friend 2: Quoc Tuan -->
            <div
              class="flex items-center justify-between group cursor-pointer px-1 rounded-xl hover:bg-slate-100 -mx-1 p-1 transition-colors"
            >
              <div class="flex items-center gap-3.5">
                <div class="relative">
                  <img
                    src="https://api.dicebear.com/7.x/adventurer/svg?seed=QuocTuan"
                    alt="Quốc Tuấn"
                    class="w-10 h-10 rounded-full object-cover bg-white shadow-sm border border-slate-100"
                  />
                  <span
                    class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-teal-500 rounded-full border-2 border-slate-50"
                  ></span>
                </div>
                <div>
                  <h4
                    class="text-[14px] font-bold text-slate-800 leading-tight group-hover:text-[#0B3A82] transition-colors mb-0.5"
                  >
                    Quốc Tuấn
                  </h4>
                  <p class="text-[11px] font-medium text-teal-600">Đang luyện nói...</p>
                </div>
              </div>
              <span
                class="bg-cyan-100 text-teal-700 text-[9px] font-black px-2 py-[2px] rounded-[6px]"
                >HSK 2</span
              >
            </div>

            <!-- Friend 3: Thuy Duong -->
            <div
              class="flex items-center justify-between group cursor-pointer px-1 rounded-xl hover:bg-slate-100 -mx-1 p-1 transition-colors"
            >
              <div class="flex items-center gap-3.5">
                <div class="relative">
                  <img
                    src="https://api.dicebear.com/7.x/adventurer/svg?seed=ThuyDuong"
                    alt="Thùy Dương"
                    class="w-10 h-10 rounded-full object-cover bg-white shadow-sm border border-slate-100 opacity-80"
                  />
                  <span
                    class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-slate-300 rounded-full border-2 border-slate-50"
                  ></span>
                </div>
                <div>
                  <h4
                    class="text-[14px] font-bold text-slate-800/80 leading-tight group-hover:text-slate-800 transition-colors mb-0.5"
                  >
                    Thùy Dương
                  </h4>
                  <p class="text-[11px] font-medium text-slate-400">Offline (2h trước)</p>
                </div>
              </div>
              <span
                class="bg-slate-200 text-slate-500 text-[9px] font-black px-2 py-[2px] rounded-[6px]"
                >HSK 4</span
              >
            </div>

            <!-- Friend 4: Van Khanh -->
            <div
              class="flex items-center justify-between group cursor-pointer px-1 rounded-xl hover:bg-slate-100 -mx-1 p-1 transition-colors"
            >
              <div class="flex items-center gap-3.5">
                <div class="relative">
                  <img
                    src="https://api.dicebear.com/7.x/adventurer/svg?seed=VanKhanh"
                    alt="Văn Khánh"
                    class="w-10 h-10 rounded-full object-cover bg-white shadow-sm border border-slate-100 opacity-80"
                  />
                  <span
                    class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-slate-300 rounded-full border-2 border-slate-50"
                  ></span>
                </div>
                <div>
                  <h4
                    class="text-[14px] font-bold text-slate-800/80 leading-tight group-hover:text-slate-800 transition-colors mb-0.5"
                  >
                    Văn Khánh
                  </h4>
                  <p class="text-[11px] font-medium text-slate-400">
                    Offline (1 ngày trước)
                  </p>
                </div>
              </div>
              <span
                class="bg-slate-200 text-slate-400 text-[9px] font-black px-2 py-[2px] rounded-[6px]"
                >HSK 5</span
              >
            </div>
          </div>

          <button
            class="w-full mt-auto mb-1 bg-white text-[#0B3A82] font-bold text-[13px] py-3.5 rounded-full hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-sm border border-slate-100"
          >
            <i class="fa-solid fa-arrows-rotate text-[12px]"></i> Tìm thêm bạn bè
          </button>
        </div>
      </div>

      <!-- Floating Action Button -->
      <!-- Added z-50 to ensure it overlaps everything on screen -->
      <button
        class="fixed bottom-10 right-10 w-[56px] h-[56px] bg-[#0B3A82] text-white rounded-full flex items-center justify-center shadow-lg shadow-blue-900/40 hover:bg-blue-900 hover:scale-105 transition-all z-50 outline-none focus:ring-4 focus:ring-blue-800/30"
      >
        <i class="fa-solid fa-user-plus text-[18px] mr-0.5"></i>
      </button>
    </div>
  </NuxtLayout>
</template>

<script setup>
useHead({ title: "Bạn bè · AI Speaking Assistant" });
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
  opacity: 0;
}
.animate-fade-in-left {
  animation: fadeInLeft 0.6s ease-out forwards;
  opacity: 0;
}
.animate-fade-in-right {
  animation: fadeInRight 0.6s ease-out forwards;
  opacity: 0;
}

.anim-delay-100 {
  animation-delay: 100ms;
}
</style>
