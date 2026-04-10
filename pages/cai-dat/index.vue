<template>
  <NuxtLayout name="dashboard">
    <div class="flex flex-col gap-6 max-w-7xl mx-auto pb-10">
      <!-- Page Header -->
      <div class="mb-2 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]">
        <h1 class="text-[28px] font-black text-slate-900 mb-2">
          Tùy chỉnh trợ lý của bạn
        </h1>
        <p class="text-[14px] text-slate-500">
          Tùy chỉnh gia sư AI để phù hợp với nhịp độ học tập và tính cách của bạn.
        </p>
      </div>

      <div class="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-8 items-start">
        <!-- LEFT COLUMN -->
        <div class="flex flex-col gap-6 w-full opacity-0 animate-[fadeInLeft_0.5s_ease-out_0.2s_forwards]">
          <!-- AI Preview Avatar Section -->
          <div
            class="bg-slate-50 rounded-[32px] p-8 flex flex-col items-center justify-center min-h-[560px] relative border border-slate-100"
          >
            <!-- Avatar Glow & Image -->
            <div class="relative w-64 h-64 flex items-center justify-center mb-8 mt-4">
              <!-- External glow circles -->
              <div
                class="absolute inset-0 rounded-full bg-cyan-100 opacity-50 blur-xl animate-pulse"
              ></div>
              <div
                class="absolute inset-4 rounded-full bg-white shadow-[0_0_40px_rgba(34,211,238,0.3)] z-10 flex items-center justify-center overflow-hidden border-4 border-white"
              >
                <!-- 3D Panda Placeholder -->
                <img
                  src="~/assets/images/c8baf382-e96b-4010-8c40-b9264ef8606b.jpg"
                  alt="Panda AI"
                  class="w-full h-full object-cover"
                />
              </div>
              <div
                class="absolute top-[30%] right-2 bg-white/90 backdrop-blur-sm text-cyan-600 text-[10px] font-bold px-2 py-0.5 rounded-full z-20 shadow-sm border border-cyan-100"
              >
                AI
              </div>
              <!-- Small mic indicator -->
              <div
                class="absolute bottom-2 right-10 w-8 h-8 bg-[#0F516A] rounded-full border-2 border-white flex items-center justify-center z-20 shadow-md"
              >
                <div class="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-bounce"></div>
              </div>
            </div>

            <!-- Sound Wave Graphic -->
            <div class="flex items-center gap-1.5 h-10 mb-8 opacity-40">
              <div class="w-1.5 h-4 bg-slate-400 rounded-full"></div>
              <div class="w-1.5 h-6 bg-slate-400 rounded-full"></div>
              <div class="w-1.5 h-10 bg-slate-400 rounded-full"></div>
              <div class="w-1.5 h-7 bg-slate-400 rounded-full"></div>
              <div class="w-1.5 h-5 bg-slate-400 rounded-full"></div>
              <div class="w-1.5 h-8 bg-slate-400 rounded-full"></div>
              <div class="w-1.5 h-3 bg-slate-400 rounded-full"></div>
            </div>

            <!-- Speech Bubble -->
            <div
              class="bg-indigo-50/80 border border-indigo-100/50 backdrop-blur-sm px-6 py-4 rounded-2xl text-center w-full max-w-[280px] shadow-sm mb-6"
            >
              <p class="text-[14px] font-semibold text-indigo-900 leading-relaxed">
                "Bạn đã sẵn sàng cho buổi học hôm nay chưa?"
              </p>
            </div>

            <!-- Talk Button -->
            <button
              class="bg-blue-800 hover:bg-blue-900 text-white font-bold px-8 py-3 rounded-xl shadow-lg shadow-blue-800/20 transition-all flex items-center gap-2"
            >
              <i class="fa-solid fa-volume-high"></i>
              你好!
            </button>
          </div>

          <!-- Left Banner (Chuỗi ngày) -->
          <div
            class="bg-[#0B5A7A] rounded-[24px] p-6 flex flex-col md:flex-row items-center gap-5 text-white shadow-md relative overflow-hidden"
          >
            <div
              class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0 z-10"
            >
              <i class="fa-solid fa-user-clock text-[20px]"></i>
            </div>
            <div class="z-10 text-center md:text-left">
              <h4 class="font-bold text-[16px] mb-1">Chuỗi ngày luyện nói</h4>
              <p class="text-[12px] text-cyan-100 opacity-90 leading-snug">
                Hãy tiếp tục luyện tập để phát âm trôi chảy hơn nhé!
              </p>
            </div>
            <!-- Decor -->
            <div class="absolute -right-6 -bottom-6 opacity-10">
              <i class="fa-solid fa-fire text-[100px]"></i>
            </div>
          </div>
        </div>

        <!-- RIGHT COLUMN -->
        <div class="flex flex-col gap-6 w-full opacity-0 animate-[fadeInRight_0.5s_ease-out_0.2s_forwards]">
          <!-- Card 1: Identity -->
          <div class="bg-white rounded-[24px] p-7 shadow-sm border border-slate-100">
            <div class="flex items-center gap-3 mb-6">
              <i class="fa-solid fa-fingerprint text-blue-600 text-lg"></i>
              <h2 class="text-[17px] font-bold text-slate-800">Danh tính</h2>
            </div>

            <!-- AI Name -->
            <div class="mb-6">
              <label
                class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2"
                >TÊN AI</label
              >
              <input
                type="text"
                value="Lumi"
                class="w-full bg-slate-50 border-0 rounded-xl px-4 py-3 text-[14px] text-slate-800 font-semibold focus:ring-2 focus:ring-blue-100 outline-none transition-all"
              />
            </div>

            <!-- Personality -->
            <div>
              <label
                class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3"
                >TÍNH CÁCH AI</label
              >
              <div class="flex flex-col gap-3">
                <!-- Option 1: Active -->
                <div
                  class="bg-blue-800 text-white rounded-xl p-4 flex items-center justify-between cursor-pointer shadow-md shadow-blue-800/10"
                >
                  <div class="flex items-center gap-4">
                    <i class="fa-solid fa-graduation-cap text-[18px] text-blue-200"></i>
                    <div>
                      <h4 class="text-[14px] font-bold mb-0.5">Giáo viên khích lệ</h4>
                      <p class="text-[11px] text-blue-200">
                        Kiên nhẫn và hỗ trợ tận tình
                      </p>
                    </div>
                  </div>
                  <div
                    class="w-5 h-5 bg-white rounded-full flex items-center justify-center"
                  >
                    <i class="fa-solid fa-check text-blue-800 text-[10px]"></i>
                  </div>
                </div>

                <!-- Option 2 -->
                <div
                  class="bg-slate-50 hover:bg-slate-100 rounded-xl p-4 flex items-center gap-4 cursor-pointer transition-colors border border-transparent hover:border-slate-200"
                >
                  <i class="fa-solid fa-message text-[18px] text-slate-400"></i>
                  <div>
                    <h4 class="text-[14px] font-bold text-slate-700 mb-0.5">
                      Bạn bè thân thiết
                    </h4>
                    <p class="text-[11px] text-slate-500">
                      Tiếng lóng và giao tiếp thoải mái
                    </p>
                  </div>
                </div>

                <!-- Option 3 -->
                <div
                  class="bg-slate-50 hover:bg-slate-100 rounded-xl p-4 flex items-center gap-4 cursor-pointer transition-colors border border-transparent hover:border-slate-200"
                >
                  <i
                    class="fa-solid fa-wand-magic-sparkles text-[18px] text-slate-400"
                  ></i>
                  <div>
                    <h4 class="text-[14px] font-bold text-slate-700 mb-0.5">Khác</h4>
                    <p class="text-[11px] text-slate-500">
                      Ghi tính cách bạn muốn đặt cho AI vào đây
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 2: Voice Settings -->
          <div class="bg-white rounded-[24px] p-7 shadow-sm border border-slate-100">
            <div class="flex items-center gap-3 mb-6">
              <i class="fa-solid fa-music text-blue-600 text-lg"></i>
              <h2 class="text-[17px] font-bold text-slate-800">Cài đặt giọng nói</h2>
            </div>

            <!-- Voice Selection Block (Gray background) -->
            <div class="bg-slate-50 rounded-2xl p-5 mb-6">
              <!-- Female Voices -->
              <div class="mb-5">
                <label
                  class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3"
                  >GIỌNG NỮ</label
                >
                <div class="grid grid-cols-3 gap-2">
                  <div
                    class="bg-white border-2 border-blue-600 rounded-xl p-3 flex flex-col items-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <i class="fa-solid fa-robot text-blue-600 text-[20px] mb-1"></i>
                    <span class="text-[13px] font-bold text-blue-800">Linh</span>
                    <span class="text-[10px] text-blue-600/70">Trẻ trung</span>
                  </div>
                  <div
                    class="rounded-xl p-3 flex flex-col items-center gap-1.5 cursor-pointer hover:bg-slate-100 transition-colors"
                  >
                    <i class="fa-solid fa-face-smile text-slate-400 text-[20px] mb-1"></i>
                    <span class="text-[13px] font-bold text-slate-700">Hương</span>
                    <span class="text-[10px] text-slate-500">Ấm áp</span>
                  </div>
                  <div
                    class="rounded-xl p-3 flex flex-col items-center gap-1.5 cursor-pointer hover:bg-slate-100 transition-colors"
                  >
                    <i
                      class="fa-solid fa-face-laugh w-5 h-5 flex items-center justify-center text-slate-400 text-[20px] mb-1"
                    ></i>
                    <span class="text-[13px] font-bold text-slate-700">Mai</span>
                    <span class="text-[10px] text-slate-500">Chuyên nghiệp</span>
                  </div>
                </div>
              </div>

              <!-- Male Voices -->
              <div>
                <label
                  class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3"
                  >GIỌNG NAM</label
                >
                <div class="grid grid-cols-3 gap-2">
                  <div
                    class="rounded-xl p-3 flex flex-col items-center gap-1.5 cursor-pointer hover:bg-slate-100 transition-colors"
                  >
                    <i
                      class="fa-solid fa-face-grin-wide text-slate-400 text-[20px] mb-1"
                    ></i>
                    <span class="text-[13px] font-bold text-slate-700">Tuấn</span>
                    <span class="text-[10px] text-slate-500">Năng động</span>
                  </div>
                  <div
                    class="rounded-xl p-3 flex flex-col items-center gap-1.5 cursor-pointer hover:bg-slate-100 transition-colors"
                  >
                    <i class="fa-solid fa-face-meh text-slate-400 text-[20px] mb-1"></i>
                    <span class="text-[13px] font-bold text-slate-700">Hùng</span>
                    <span class="text-[10px] text-slate-500">Trầm ấm</span>
                  </div>
                  <div
                    class="rounded-xl p-3 flex flex-col items-center gap-1.5 cursor-pointer hover:bg-slate-100 transition-colors"
                  >
                    <i
                      class="fa-solid fa-face-laugh-squint text-slate-400 text-[20px] mb-1"
                    ></i>
                    <span class="text-[13px] font-bold text-slate-700">Minh</span>
                    <span class="text-[10px] text-slate-500">Vui vẻ</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Speaking Speed -->
            <div class="mb-6 border-b border-slate-100 pb-6">
              <div class="flex items-center justify-between mb-4">
                <label
                  class="text-[10px] font-bold text-slate-500 uppercase tracking-widest"
                  >TỐC ĐỘ NÓI</label
                >
                <span
                  class="bg-cyan-100 text-cyan-800 text-[10px] font-bold px-2.5 py-1 rounded-md"
                  >Bình thường (1.0x)</span
                >
              </div>

              <!-- Custom Slider -->
              <div class="relative w-full h-1.5 bg-slate-200 rounded-full mb-2">
                <div
                  class="absolute top-0 left-0 h-full bg-blue-700 rounded-full w-1/2"
                ></div>
                <div
                  class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-700 border-2 border-white rounded-full shadow-md cursor-pointer hover:scale-110 transition-transform"
                ></div>
              </div>
              <div
                class="flex justify-between text-[9px] font-bold text-slate-400 uppercase tracking-widest"
              >
                <span>Chậm</span>
                <span>Nhanh</span>
              </div>
            </div>

            <!-- Auto Translate Toggle -->
            <div class="flex items-center justify-between">
              <label
                class="text-[11px] font-bold text-slate-600 uppercase tracking-widest"
                >DỊCH TỰ ĐỘNG</label
              >
              <!-- Toggle Switch Active -->
              <div
                class="w-10 h-6 bg-[#0B5A7A] rounded-full p-1 cursor-pointer transition-colors"
              >
                <div
                  class="w-4 h-4 bg-white rounded-full translate-x-4 shadow-sm transition-transform"
                ></div>
              </div>
            </div>

            <!-- Horizontal Divider -->
            <div class="w-full h-px bg-slate-100 mt-6 mb-5"></div>

            <!-- Buttons embedded inside the card at bottom right -->
            <div class="flex items-center justify-end gap-3">
              <button
                class="bg-slate-50 hover:bg-slate-100 text-slate-700 px-6 py-2.5 rounded-xl font-bold text-[13px] transition-colors"
              >
                Lưu thay đổi
              </button>
              <button
                class="bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 px-6 py-2.5 rounded-xl font-bold text-[13px] transition-colors"
              >
                Đặt lại
              </button>
            </div>
          </div>

          <!-- Settings Tip -->
          <div class="bg-blue-50/50 rounded-2xl p-6 border border-blue-100 mt-1">
            <div class="flex items-center gap-2 mb-2">
              <i class="fa-solid fa-lightbulb text-blue-600 mb-0.5"></i>
              <h4 class="font-bold text-[15px] text-blue-900">Mẹo nhỏ</h4>
            </div>
            <p class="text-[13px] text-blue-800/80 leading-relaxed">
              Chuyển sang tính cách 'Bạn bè thân thiết' có thể giúp bạn học các từ ngữ
              thông dụng được dùng trong phim ảnh và mạng xã hội hiện nay.
            </p>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
useHead({ title: "Cài đặt · AI Speaking Assistant" });
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInLeft {
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes fadeInRight {
  from { opacity: 0; transform: translateX(30px); }
  to { opacity: 1; transform: translateX(0); }
}
</style>
