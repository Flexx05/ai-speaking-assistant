<template>
  <NuxtLayout name="dashboard">
    <div
      class="max-w-[1150px] mx-auto pb-10 px-4 sm:px-6 w-full animate-fade-in-up flex flex-col gap-8"
    >
      <!-- Top Section -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Profile Card -->
        <div
          class="lg:col-span-2 bg-white rounded-[28px] p-6 lg:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-8 shadow-sm border border-slate-100"
        >
          <!-- Avatar -->
          <div class="relative shrink-0">
            <div
              class="w-[120px] h-[120px] rounded-full border-[5px] border-white bg-slate-50 overflow-hidden shadow-sm"
            >
              <img
                src="~/assets/images/433966299_919881073210081_7511676866786403341_n.jpg"
                alt="Alex Chen"
                class="w-full h-full object-cover"
              />
            </div>
            <span
              class="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#FFD13B] text-[#8C5A00] text-[12px] font-black px-4 py-1 rounded-full shadow-sm border-[2.5px] border-white whitespace-nowrap tracking-wide leading-tight"
            >
              Lvl 4
            </span>
          </div>

          <!-- Info -->
          <div
            class="flex flex-col items-center sm:items-start text-center sm:text-left mt-2 w-full"
          >
            <h1 class="text-[32px] font-black text-[#0B3A82] mb-3 leading-none">
              Alex Chen
            </h1>

            <div
              class="flex flex-wrap items-center justify-center sm:justify-start gap-3 mb-6"
            >
              <span
                class="px-3.5 py-1.5 bg-[#F1F5F9] text-slate-600 text-[13px] font-bold rounded-full"
                >HSK 3 Candidate</span
              >
              <span
                class="px-3.5 py-1.5 bg-[#EEF2FF] text-[#4F46E5] text-[13px] font-bold rounded-full flex items-center gap-1.5"
              >
                <i class="fa-solid fa-fire text-[#4F46E5]"></i> 15 Ngày Liên
                Tiếp
              </span>
            </div>

            <div
              class="flex items-center justify-center sm:justify-start gap-3 w-full sm:w-auto mt-auto"
            >
              <button
                class="bg-[#0B3A82] text-white font-bold text-[14px] px-8 py-2.5 rounded-full hover:bg-blue-900 transition-colors shadow-sm active:scale-95"
              >
                Tiếp tục học
              </button>
              <button
                class="bg-[#F1F5F9] text-slate-700 font-bold text-[14px] px-8 py-2.5 rounded-full hover:bg-slate-200 transition-colors active:scale-95"
              >
                Chia sẻ hồ sơ
              </button>
            </div>
          </div>
        </div>

        <!-- Rank Card -->
        <div
          class="bg-[#0B3A82] rounded-[28px] p-6 lg:p-8 text-white relative flex flex-col justify-center overflow-hidden shadow-sm min-h-[220px]"
        >
          <!-- Background Decor -->
          <div
            class="absolute -right-6 -bottom-6 w-40 h-40 bg-white/5 rounded-full blur-2xl"
          ></div>

          <div class="relative z-10">
            <h3
              class="text-blue-200 text-[11px] font-extrabold uppercase tracking-wider mb-2"
            >
              HẠNG HIỆN TẠI
            </h3>
            <div
              class="text-[64px] font-black text-white leading-none tracking-tight mb-2"
            >
              #03
            </div>
            <p class="text-[18px] font-medium text-white mb-6">Giải Đấu Gold</p>

            <div
              class="items-center gap-2 text-yellow-300 text-[13px] font-medium bg-yellow-400/10 inline-flex px-3 py-1.5 rounded-lg"
            >
              <i class="fa-solid fa-medal"></i>
              <span>Bạn thuộc top 5% người học tuần này!</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        <!-- Stat Item 1 -->
        <div
          class="bg-[#F8FAFC] rounded-[24px] p-6 flex flex-col items-center justify-center text-center"
        >
          <div
            class="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2"
          >
            TỔNG XP
          </div>
          <div class="text-[28px] font-black text-[#0B3A82] leading-none">
            12,450
          </div>
        </div>
        <!-- Stat Item 2 -->
        <div
          class="bg-[#F8FAFC] rounded-[24px] p-6 flex flex-col items-center justify-center text-center"
        >
          <div
            class="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2"
          >
            THỜI GIAN HỌC
          </div>
          <div class="text-[28px] font-black text-[#0B3A82] leading-none">
            42 giờ
          </div>
        </div>
        <!-- Stat Item 3 -->
        <div
          class="bg-[#F8FAFC] rounded-[24px] p-6 flex flex-col items-center justify-center text-center"
        >
          <div
            class="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2"
          >
            KHÓA HỌC
          </div>
          <div class="text-[28px] font-black text-[#0B3A82] leading-none">
            08
          </div>
        </div>
        <!-- Stat Item 4 -->
        <div
          class="bg-[#F8FAFC] rounded-[24px] p-6 flex flex-col items-center justify-center text-center"
        >
          <div
            class="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2"
          >
            HẠNG GOLD
          </div>
          <div class="text-[28px] font-black text-[#0B3A82] leading-none">
            #03
          </div>
        </div>
      </div>

      <!-- Main Two Columns Context -->
      <div class="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-8 mt-2">
        <!-- Left Column -->
        <div class="flex flex-col gap-10 overflow-hidden">
          <!-- Bạn bè -->
          <section>
            <div class="flex items-center justify-between mb-5 px-1">
              <h2 class="text-[20px] font-bold text-slate-900">Bạn bè</h2>
              <NuxtLink
                to="/ban-be"
                class="text-[13px] font-medium text-[#0B3A82] hover:text-blue-800 transition-colors flex items-center gap-1"
              >
                Tìm thêm bạn
                <i class="fa-solid fa-chevron-right text-[10px] mt-0.5"></i>
              </NuxtLink>
            </div>

            <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <!-- Friend 1 -->
              <div
                class="bg-white rounded-[24px] p-5 flex flex-col items-center shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100 relative group cursor-pointer hover:-translate-y-1 transition-all"
              >
                <span
                  class="absolute top-3 right-3 bg-[#D97706] text-white text-[9px] font-black px-1.5 py-0.5 rounded shadow-sm"
                  >Mới</span
                >
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=2e3c41"
                  alt="Felix Đ."
                  class="w-[60px] h-[60px] rounded-full object-cover shadow-sm mb-3 border-[2.5px] border-slate-50 bg-slate-100"
                />
                <h3 class="text-[14px] font-bold text-slate-900 mb-2">
                  Felix Đ.
                </h3>
                <span
                  class="bg-[#E0E7FF] text-[#4338CA] text-[10px] font-black px-2.5 py-0.5 rounded-full"
                  >HSK 4</span
                >
              </div>

              <!-- Friend 2 -->
              <div
                class="bg-white rounded-[24px] p-5 flex flex-col items-center shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100 relative group cursor-pointer hover:-translate-y-1 transition-all"
              >
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Trang&backgroundColor=1f2937"
                  alt="Trang Linh"
                  class="w-[60px] h-[60px] rounded-full object-cover shadow-sm mb-3 border-[2.5px] border-slate-50 bg-slate-100"
                />
                <h3 class="text-[14px] font-bold text-slate-900 mb-2">
                  Trang Linh
                </h3>
                <span
                  class="bg-[#FEF08A] text-[#854D0E] text-[10px] font-black px-2.5 py-0.5 rounded-full"
                  >HSK 2</span
                >
              </div>

              <!-- Friend 3 -->
              <div
                class="bg-white rounded-[24px] p-5 flex flex-col items-center shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100 relative group cursor-pointer hover:-translate-y-1 transition-all"
              >
                <span
                  class="absolute top-3 right-3 bg-[#D97706] text-white text-[9px] font-black px-1.5 py-0.5 rounded shadow-sm"
                  >Mới</span
                >
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Minh&backgroundColor=0284c7"
                  alt="Quốc Minh"
                  class="w-[60px] h-[60px] rounded-full object-cover shadow-sm mb-3 border-[2.5px] border-slate-50 bg-slate-100"
                />
                <h3 class="text-[14px] font-bold text-slate-900 mb-2">
                  Quốc Minh
                </h3>
                <span
                  class="bg-[#FFEDD5] text-[#C2410C] text-[10px] font-black px-2.5 py-0.5 rounded-full"
                  >HSK 3</span
                >
              </div>

              <!-- Friend 4 -->
              <div
                class="bg-white rounded-[24px] p-5 flex flex-col items-center shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100 relative group cursor-pointer hover:-translate-y-1 transition-all"
              >
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=000000"
                  alt="Sarah J."
                  class="w-[60px] h-[60px] rounded-full object-cover shadow-sm mb-3 border-[2.5px] border-slate-50 bg-slate-100"
                />
                <h3 class="text-[14px] font-bold text-slate-900 mb-2">
                  Sarah J.
                </h3>
                <span
                  class="bg-[#E0E7FF] text-[#4338CA] text-[10px] font-black px-2.5 py-0.5 rounded-full"
                  >HSK 1</span
                >
              </div>
            </div>
          </section>

          <!-- Bài tập đã hoàn thành -->
          <section>
            <h2 class="text-[20px] font-bold text-slate-900 mb-5 px-1">
              Bài tập đã hoàn thành
            </h2>
            <div class="flex flex-col">
              <!-- Task 1 -->
              <div
                class="flex items-center gap-4 py-4 border-b border-slate-100 last:border-0 group cursor-pointer hover:bg-[#F8FAFC] px-3 rounded-2xl transition-colors"
              >
                <div
                  class="w-12 h-12 rounded-full bg-[#F0F5FF] text-[#0B3A82] flex flex-shrink-0 items-center justify-center shadow-sm border border-white"
                >
                  <i class="fa-solid fa-microphone text-[18px]"></i>
                </div>
                <div class="flex-1 min-w-0">
                  <h3
                    class="text-[15px] font-bold text-slate-900 truncate mb-1 group-hover:text-[#0B3A82] transition-colors leading-none"
                  >
                    Giới thiệu bản thân
                  </h3>
                  <p class="text-[12px] font-medium text-slate-500">
                    Luyện nói • HSK 3
                  </p>
                </div>
                <div class="flex flex-col items-end shrink-0">
                  <span class="text-[15px] font-black text-[#0B3A82]"
                    >+45 XP</span
                  >
                  <span
                    class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wide"
                    >Hôm qua</span
                  >
                </div>
              </div>

              <!-- Task 2 -->
              <div
                class="flex items-center gap-4 py-4 border-b border-slate-100 last:border-0 group cursor-pointer hover:bg-[#F8FAFC] px-3 rounded-2xl transition-colors"
              >
                <div
                  class="w-12 h-12 rounded-full bg-[#F0F5FF] text-[#0B3A82] flex flex-shrink-0 items-center justify-center shadow-sm border border-white"
                >
                  <i class="fa-solid fa-microphone text-[18px]"></i>
                </div>
                <div class="flex-1 min-w-0">
                  <h3
                    class="text-[15px] font-bold text-slate-900 truncate mb-1 group-hover:text-[#0B3A82] transition-colors leading-none"
                  >
                    Đặt món ăn tại nhà hàng
                  </h3>
                  <p class="text-[12px] font-medium text-slate-500">
                    Luyện nói • HSK 3
                  </p>
                </div>
                <div class="flex flex-col items-end shrink-0">
                  <span class="text-[15px] font-black text-[#0B3A82]"
                    >+30 XP</span
                  >
                  <span
                    class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wide"
                    >3 ngày trước</span
                  >
                </div>
              </div>

              <!-- Task 3 -->
              <div
                class="flex items-center gap-4 py-4 border-b border-slate-100 last:border-0 group cursor-pointer hover:bg-[#F8FAFC] px-3 rounded-2xl transition-colors"
              >
                <div
                  class="w-12 h-12 rounded-full bg-[#F0F5FF] text-[#0B3A82] flex flex-shrink-0 items-center justify-center shadow-sm border border-white"
                >
                  <i class="fa-solid fa-microphone text-[18px]"></i>
                </div>
                <div class="flex-1 min-w-0">
                  <h3
                    class="text-[15px] font-bold text-slate-900 truncate mb-1 group-hover:text-[#0B3A82] transition-colors leading-none"
                  >
                    Mô tả kỳ nghỉ hè
                  </h3>
                  <p class="text-[12px] font-medium text-slate-500">
                    Luyện nói • HSK 2
                  </p>
                </div>
                <div class="flex flex-col items-end shrink-0">
                  <span class="text-[15px] font-black text-[#0B3A82]"
                    >+50 XP</span
                  >
                  <span
                    class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wide"
                    >Tuần trước</span
                  >
                </div>
              </div>
            </div>
          </section>

          <!-- Tiến độ tuần này -->
          <section>
            <div
              class="bg-white rounded-[32px] p-8 shadow-[0_2px_16px_rgba(0,0,0,0.02)] border border-slate-100 min-h-[300px] flex flex-col relative overflow-hidden"
            >
              <div class="flex items-center justify-between mb-auto">
                <h2 class="text-[18px] font-bold text-slate-900">
                  Tiến độ tuần này
                </h2>
                <div class="flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-[#0B3A82]"></span>
                  <span class="text-[12px] font-medium text-slate-600"
                    >XP Mỗi Ngày</span
                  >
                </div>
              </div>

              <!-- Chart Area Placeholder -->
              <div
                class="h-[180px] w-full flex items-end justify-between px-2 mt-12 gap-2 relative z-10 border-b border-slate-50 pb-2"
              >
                <!-- Grid Lines Behind -->
                <div
                  class="absolute inset-0 flex flex-col justify-between -z-10 h-full w-full opacity-30"
                >
                  <div
                    class="w-full border-t border-dashed border-slate-300"
                  ></div>
                  <div
                    class="w-full border-t border-dashed border-slate-300"
                  ></div>
                  <div
                    class="w-full border-t border-dashed border-slate-300"
                  ></div>
                  <div
                    class="w-full border-t border-dashed border-slate-300"
                  ></div>
                </div>

                <!-- Bars mock -->
                <div
                  class="flex flex-col items-center w-[12%] h-full justify-end group"
                >
                  <div
                    class="w-full max-w-[40px] bg-slate-100 rounded-t-xl group-hover:bg-slate-200 transition-colors"
                    style="height: 35%"
                  ></div>
                </div>
                <div
                  class="flex flex-col items-center w-[12%] h-full justify-end group"
                >
                  <div
                    class="w-full max-w-[40px] bg-slate-100 rounded-t-xl group-hover:bg-slate-200 transition-colors"
                    style="height: 45%"
                  ></div>
                </div>
                <div
                  class="flex flex-col items-center w-[12%] h-full justify-end group"
                >
                  <div
                    class="w-full max-w-[40px] bg-slate-100 rounded-t-xl group-hover:bg-slate-200 transition-colors"
                    style="height: 20%"
                  ></div>
                </div>
                <div
                  class="flex flex-col items-center w-[12%] h-full justify-end group"
                >
                  <div
                    class="w-full max-w-[40px] bg-slate-100 rounded-t-xl group-hover:bg-slate-200 transition-colors"
                    style="height: 60%"
                  ></div>
                </div>
                <div
                  class="flex flex-col items-center w-[12%] h-full justify-end group relative"
                >
                  <div
                    class="absolute -top-10 bg-[#0B3A82] text-white text-[11px] font-bold px-2 py-1 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    1200
                  </div>
                  <div
                    class="w-full max-w-[40px] bg-[#0B3A82] rounded-t-xl transition-all shadow-md group-hover:brightness-110"
                    style="height: 85%"
                  ></div>
                </div>
                <div
                  class="flex flex-col items-center w-[12%] h-full justify-end group"
                >
                  <div
                    class="w-full max-w-[40px] bg-slate-100 rounded-t-xl group-hover:bg-slate-200 transition-colors"
                    style="height: 0%"
                  ></div>
                </div>
                <div
                  class="flex flex-col items-center w-[12%] h-full justify-end group"
                >
                  <div
                    class="w-full max-w-[40px] bg-slate-100 rounded-t-xl group-hover:bg-slate-200 transition-colors"
                    style="height: 0%"
                  ></div>
                </div>
              </div>

              <!-- X-Axis Labels -->
              <div
                class="flex items-center justify-between px-2 mt-4 text-[11px] font-bold text-slate-800"
              >
                <span class="w-[12%] text-center">T2</span>
                <span class="w-[12%] text-center">T3</span>
                <span class="w-[12%] text-center">T4</span>
                <span class="w-[12%] text-center">T5</span>
                <span class="w-[12%] text-center">T6</span>
                <span class="w-[12%] text-center">T7</span>
                <span class="w-[12%] text-center">CN</span>
              </div>
            </div>
          </section>
        </div>

        <!-- Right Column -->
        <div class="flex flex-col gap-10">
          <!-- Huy hiệu đạt được -->
          <section>
            <h2 class="text-[20px] font-bold text-slate-900 mb-5 px-1">
              Huy hiệu đạt được
            </h2>
            <div class="flex flex-col gap-4">
              <!-- Badge 1 -->
              <div
                class="bg-[#F8FAFC] rounded-[24px] p-5 py-6 flex items-center gap-5 group cursor-pointer hover:bg-slate-100 transition-colors border border-transparent hover:border-slate-200"
              >
                <div
                  class="w-14 h-14 rounded-full bg-gradient-to-br from-[#FEF08A] to-[#FDE047] text-[#854D0E] flex shrink-0 items-center justify-center shadow-sm border border-yellow-200"
                >
                  <i class="fa-solid fa-wand-magic-sparkles text-[20px]"></i>
                </div>
                <div class="flex-1 mt-1">
                  <h3 class="text-[14px] font-bold text-slate-800 mb-2.5">
                    Kẻ hủy diệt từ vựng
                  </h3>
                  <div
                    class="w-full h-[6px] bg-slate-200 rounded-full overflow-hidden mb-2"
                  >
                    <div
                      class="h-full bg-[#854D0E] rounded-full"
                      style="width: 80%"
                    ></div>
                  </div>
                  <p
                    class="text-[10px] font-bold text-slate-500 uppercase tracking-widest"
                  >
                    CẤP 4/5 • 80%
                  </p>
                </div>
              </div>

              <!-- Badge 2 -->
              <div
                class="bg-[#F8FAFC] rounded-[24px] p-5 py-6 flex items-center gap-5 group cursor-pointer hover:bg-slate-100 transition-colors border border-transparent hover:border-slate-200"
              >
                <div
                  class="w-14 h-14 rounded-full bg-gradient-to-br from-[#FFEDD5] to-[#FDBA74] text-[#C2410C] flex shrink-0 items-center justify-center shadow-sm border border-orange-200"
                >
                  <i class="fa-solid fa-message text-[20px]"></i>
                </div>
                <div class="flex-1 mt-1">
                  <h3 class="text-[14px] font-bold text-slate-800 mb-2.5">
                    Bậc thầy giao tiếp
                  </h3>
                  <div
                    class="w-full h-[6px] bg-slate-200 rounded-full overflow-hidden mb-2"
                  >
                    <div
                      class="h-full bg-[#C2410C] rounded-full"
                      style="width: 35%"
                    ></div>
                  </div>
                  <p
                    class="text-[10px] font-bold text-slate-500 uppercase tracking-widest"
                  >
                    CẤP 2/5 • 35%
                  </p>
                </div>
              </div>

              <!-- Badge 3 -->
              <div
                class="bg-[#F8FAFC] rounded-[24px] p-5 py-6 flex items-center gap-5 group cursor-pointer hover:bg-slate-100 transition-colors border border-transparent hover:border-slate-200"
              >
                <div
                  class="w-14 h-14 rounded-full bg-gradient-to-br from-[#E0E7FF] to-[#C7D2FE] text-[#4338CA] flex shrink-0 items-center justify-center shadow-sm border border-indigo-200"
                >
                  <i class="fa-solid fa-chalkboard-user text-[20px]"></i>
                </div>
                <div class="flex-1 mt-1">
                  <h3 class="text-[14px] font-bold text-slate-800 mb-2.5">
                    Chuyên gia ngữ pháp
                  </h3>
                  <div
                    class="w-full h-[6px] bg-slate-200 rounded-full overflow-hidden mb-2"
                  >
                    <div
                      class="h-full bg-[#0B3A82] rounded-full"
                      style="width: 100%"
                    ></div>
                  </div>
                  <p
                    class="text-[10px] font-black text-[#0B3A82] uppercase tracking-widest"
                  >
                    CẤP 5/5 • HOÀN THÀNH
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- Mở khóa Scholar Plus -->
          <section class="mt-2">
            <div
              class="bg-[#0B3A82] rounded-[32px] p-8 text-white relative overflow-hidden shadow-lg shadow-blue-900/20 group"
            >
              <!-- Decor -->
              <i
                class="fa-solid fa-star absolute -bottom-12 -right-12 text-[200px] text-white/5 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700"
              ></i>
              <div
                class="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-700 pointer-events-none"
              ></div>

              <div class="relative z-10 flex flex-col h-full">
                <h2
                  class="text-[26px] font-black leading-tight mb-4 tracking-tight"
                >
                  Mở khóa Scholar Plus
                </h2>
                <p
                  class="text-[14.5px] text-blue-100 mb-8 leading-relaxed max-w-[90%] font-medium"
                >
                  Nhận gấp đôi XP, không giới hạn lượt thực hành và nhiều nội
                  dung độc quyền.
                </p>
                <button
                  class="w-max bg-white text-[#0B3A82] font-black text-[15px] px-8 py-3.5 rounded-[18px] hover:bg-slate-100 transition-all shadow-sm active:scale-95 hover:-translate-y-0.5 mt-auto"
                >
                  Nâng cấp ngay
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: "Hồ sơ cá nhân · AI Speaking Assistant",
});
</script>

<style scoped>
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

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
