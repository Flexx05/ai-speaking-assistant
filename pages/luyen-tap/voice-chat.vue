<template>
  <NuxtLayout name="dashboard">
    <div class="flex gap-5 h-[calc(100vh-57px-48px)] min-h-0">
      <!-- ===== CHAT AREA ===== -->
      <div
        class="flex-1 min-w-0 flex flex-col bg-white rounded-[20px] overflow-hidden shadow-[0_1px_4px_rgba(0,0,0,0.06)]"
      >
        <!-- Chat Header -->
        <div
          class="flex items-center gap-3 px-5 py-3.5 border-b border-slate-100 shrink-0"
        >
          <NuxtLink
            to="/luyen-tap"
            class="w-[34px] h-[34px] flex items-center justify-center rounded-full text-slate-500 unstyled transition-colors hover:bg-slate-100"
          >
            <i class="pi pi-arrow-left"></i>
          </NuxtLink>
          <div class="flex flex-col gap-px">
            <span class="text-[15px] font-bold text-slate-800"
              >Luyện tập giọng nói</span
            >
            <span class="text-[11px] text-slate-500 font-medium"
              >Tiếng Trung · HSK 3</span
            >
          </div>
          <div class="flex gap-1 ml-auto">
            <button
              class="w-[34px] h-[34px] flex items-center justify-center rounded-full text-slate-500 text-[14px] transition-colors bg-transparent border-none cursor-pointer hover:bg-slate-100"
              title="Cài đặt"
            >
              <i class="fa-solid fa-sliders"></i>
            </button>
            <button
              class="w-[34px] h-[34px] flex items-center justify-center rounded-full text-slate-500 text-[14px] transition-colors bg-transparent border-none cursor-pointer hover:bg-slate-100"
              title="Kết thúc phiên"
            >
              <i class="fa-solid fa-phone-slash text-red-500"></i>
            </button>
          </div>
        </div>

        <!-- Messages Area -->
        <div
          class="flex-1 overflow-y-auto p-5 flex flex-col gap-[18px] scroll-smooth custom-scrollbar"
          ref="messagesEl"
        >
          <!-- Session info chip -->
          <div
            class="flex items-center gap-1.5 self-center text-[11px] font-semibold text-slate-500 bg-slate-50 border border-slate-200 rounded-full px-3.5 py-1.5 animate-slide-up opacity-0"
          >
            <i class="fa-solid fa-circle-play text-blue-500"></i>
            <span>Phiên luyện tập bắt đầu · Chủ đề: Cuộc sống hàng ngày</span>
          </div>

          <!-- AI Message 1 -->
          <div class="flex items-end gap-2.5 animate-slide-up opacity-0 delay-100">
            <div
              class="w-[34px] h-[34px] rounded-full flex items-center justify-center text-[13px] shrink-0 bg-blue-100 text-blue-700"
            >
              <i class="fa-solid fa-robot"></i>
            </div>
            <div
              class="max-w-[520px] rounded-[18px] p-3 px-4 relative bg-slate-50 rounded-bl-sm"
            >
              <p
                class="text-[10px] font-bold text-blue-700 uppercase tracking-widest m-0 mb-1"
              >
                GIA SƯ AI
              </p>
              <p class="text-[17px] font-bold text-slate-800 m-0 mb-1">
                你好！今天过得怎么样?
              </p>
              <p class="text-[13px] text-slate-500 m-0 mb-1.5">
                Chào bạn! Ngày hôm nay của bạn thế nào?
              </p>
              <button
                class="absolute top-2.5 right-3 w-7 h-7 flex items-center justify-center rounded-full bg-blue-50 text-blue-700 text-[12px] transition-colors hover:bg-blue-100 border-none cursor-pointer"
                title="Nghe phát âm"
              >
                <i class="fa-solid fa-volume-high"></i>
              </button>
            </div>
          </div>

          <!-- User message -->
          <div class="flex items-end gap-2.5 justify-end animate-slide-up opacity-0 delay-200">
            <div
              class="max-w-[520px] rounded-[18px] p-2.5 px-4 relative bg-blue-700 rounded-br-sm text-white"
            >
              <!-- Waveform in user bubble -->
              <div class="flex items-end gap-0.5 h-8 mb-1">
                <span
                  v-for="(h, i) in userWave"
                  :key="'uw' + i"
                  class="w-[3px] bg-white/65 rounded-full"
                  :style="{ height: h + 'px' }"
                ></span>
              </div>
              <p class="text-[11px] text-blue-300 m-0 text-right">0:04</p>
            </div>
            <div
              class="w-[34px] h-[34px] rounded-full flex items-center justify-center text-[13px] shrink-0 bg-orange-500 text-white"
            >
              <i class="fa-solid fa-user"></i>
            </div>
          </div>

          <!-- Transcript -->
          <div class="flex justify-end pr-12 animate-slide-up opacity-0 delay-300">
            <p class="text-[12px] text-slate-400 italic m-0 -mt-2.5">
              「我今天很忙...」(Wǒ jīntiān hěn máng...)
            </p>
          </div>

          <!-- AI Message 2 -->
          <div class="flex items-end gap-2.5 animate-slide-up opacity-0 delay-400">
            <div
              class="w-[34px] h-[34px] rounded-full flex items-center justify-center text-[13px] shrink-0 bg-blue-100 text-blue-700"
            >
              <i class="fa-solid fa-robot"></i>
            </div>
            <div
              class="max-w-[520px] rounded-[18px] p-3 px-4 relative bg-slate-50 rounded-bl-sm"
            >
              <p
                class="text-[10px] font-bold text-blue-700 uppercase tracking-widest m-0 mb-1"
              >
                GIA SƯ AI
              </p>
              <p class="text-[17px] font-bold text-slate-800 m-0 mb-1">
                我很遗憾听到你很忙。希望你今晚可以好好休息！
              </p>
              <!-- Feedback badge -->
              <div
                class="flex items-start gap-2 bg-green-50 border border-green-200 rounded-xl p-2 px-3 mt-2"
              >
                <i class="fa-solid fa-circle-check text-green-500 mt-0.5"></i>
                <p class="text-[12px] text-slate-700 m-0 leading-relaxed">
                  <span class="font-bold text-green-700">Phản hồi:</span>
                  Độ chính xác thanh điệu đạt 88%. Rất tốt!
                </p>
              </div>
              <p class="text-[12px] text-slate-500 m-0 mt-1.5">
                Phát âm của bạn cho từ 忙 (<button
                  @click="showToneDetail = true"
                  class="text-blue-700 font-bold underline cursor-pointer hover:text-blue-900 bg-transparent border-none p-0"
                >
                  máng</button
                >) rất sắc bén.
              </p>
            </div>
          </div>

          <!-- AI is thinking -->
          <div class="flex items-end gap-2.5" v-if="isThinking">
            <div
              class="w-[34px] h-[34px] rounded-full flex items-center justify-center text-[13px] shrink-0 bg-blue-100 text-blue-700"
            >
              <i class="fa-solid fa-robot"></i>
            </div>
            <div
              class="max-w-[520px] rounded-[18px] p-3.5 px-4 relative bg-slate-50 rounded-bl-sm flex items-center gap-1.5"
            >
              <span
                class="w-1.5 h-1.5 rounded-full bg-slate-400 animate-[bounce_1.2s_infinite_ease-in-out]"
              ></span>
              <span
                class="w-1.5 h-1.5 rounded-full bg-slate-400 animate-[bounce_1.2s_infinite_ease-in-out] delay-[200ms]"
              ></span>
              <span
                class="w-1.5 h-1.5 rounded-full bg-slate-400 animate-[bounce_1.2s_infinite_ease-in-out] delay-[400ms]"
              ></span>
            </div>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div
          class="px-5 py-3.5 border-t border-slate-100 flex items-center justify-between gap-4 shrink-0 bg-white"
        >
          <div class="flex items-center gap-1.5">
            <span
              class="flex items-center gap-1.5 text-[12px] font-semibold text-slate-500"
            >
              <i class="fa-solid fa-language"></i>
              Tiếng Trung (Phổ Thông)
            </span>
          </div>

          <button
            class="flex flex-col items-center justify-center gap-1.5 w-[130px] h-[64px] rounded-full text-white transition-all duration-200 cursor-pointer border-none outline-none hover:scale-[1.03]"
            :class="[
              isRecording
                ? 'bg-red-600 shadow-[0_4px_20px_rgba(220,38,38,0.4)] animate-pulse-ring'
                : 'bg-blue-700 hover:bg-blue-800 shadow-[0_4px_20px_rgba(29,78,216,0.35)]',
            ]"
            @mousedown="startRecording"
            @mouseup="stopRecording"
            @touchstart.prevent="startRecording"
            @touchend.prevent="stopRecording"
          >
            <span
              v-if="!isRecording"
              class="flex flex-col items-center gap-[3px]"
            >
              <i class="fa-solid fa-microphone text-[22px]"></i>
              <span class="text-[10px] font-bold tracking-wider opacity-85"
                >Giữ để nói</span
              >
            </span>
            <span v-else class="flex flex-col items-center gap-[3px]">
              <div class="flex items-center gap-0.5 h-7">
                <span
                  v-for="(h, i) in liveWave"
                  :key="'lw' + i"
                  class="w-[3px] bg-white/80 rounded-full transition-[height] duration-100 ease-in-out"
                  :style="{ height: h + 'px' }"
                ></span>
              </div>
              <span class="text-[10px] font-bold tracking-wider opacity-100"
                >Đang ghi âm...</span
              >
            </span>
          </button>

          <div class="flex items-center gap-1.5">
            <button
              class="w-[34px] h-[34px] flex items-center justify-center rounded-full text-slate-500 text-[14px] transition-colors bg-transparent border-none cursor-pointer hover:bg-slate-100"
              title="Đổi ngôn ngữ"
            >
              <i class="fa-solid fa-globe"></i>
            </button>
            <button
              class="w-[34px] h-[34px] flex items-center justify-center rounded-full text-slate-500 text-[14px] transition-colors bg-transparent border-none cursor-pointer hover:bg-slate-100"
              title="Thêm"
            >
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- ===== SIDEBAR PANEL ===== -->
      <aside
        class="w-[260px] shrink-0 flex flex-col gap-3.5 overflow-y-auto custom-scrollbar pr-1 animate-slide-left opacity-0"
      >
        <!-- Session Stats -->
        <div
          class="bg-white rounded-[16px] p-4 shadow-[0_1px_4px_rgba(0,0,0,0.05)]"
        >
          <h4
            class="text-[13px] font-bold text-slate-800 m-0 mb-3 flex items-center gap-2"
          >
            <i class="fa-solid fa-chart-simple text-blue-600"></i>
            Thống kê phiên
          </h4>
          <div class="grid grid-cols-2 gap-2.5">
            <div
              class="flex flex-col items-center gap-[3px] bg-slate-50 rounded-xl p-2.5"
            >
              <span
                class="text-[20px] font-extrabold text-blue-700 leading-none"
                >88%</span
              >
              <span class="text-[10px] text-slate-400 font-semibold text-center"
                >Độ chính xác</span
              >
            </div>
            <div
              class="flex flex-col items-center gap-[3px] bg-slate-50 rounded-xl p-2.5"
            >
              <span
                class="text-[20px] font-extrabold text-orange-500 leading-none"
                >6</span
              >
              <span class="text-[10px] text-slate-400 font-semibold text-center"
                >Lượt nói</span
              >
            </div>
            <div
              class="flex flex-col items-center gap-[3px] bg-slate-50 rounded-xl p-2.5"
            >
              <span
                class="text-[20px] font-extrabold text-green-600 leading-none"
                >3:24</span
              >
              <span class="text-[10px] text-slate-400 font-semibold text-center"
                >Thời gian</span
              >
            </div>
            <div
              class="flex flex-col items-center gap-[3px] bg-slate-50 rounded-xl p-2.5"
            >
              <span
                class="text-[20px] font-extrabold text-purple-600 leading-none"
                >2</span
              >
              <span class="text-[10px] text-slate-400 font-semibold text-center"
                >Từ mới</span
              >
            </div>
          </div>
        </div>

        <!-- Context Tips -->
        <div
          class="bg-blue-50 border border-blue-200 rounded-[16px] p-4 shadow-[0_1px_4px_rgba(0,0,0,0.05)]"
        >
          <div class="flex items-center gap-2 mb-2">
            <span class="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span
              class="text-[10px] font-bold text-blue-700 uppercase tracking-widest"
              >Mẹo ngữ cảnh</span
            >
          </div>
          <p class="text-[12px] text-slate-600 leading-relaxed m-0">
            Thử giải thích <em class="not-italic opacity-80">"tại sao"</em> bạn
            bận hôm nay bằng cách dùng <strong>「因为...」</strong> (Yīnwèi... —
            Bởi vì) để luyện tập từ nối.
          </p>
        </div>

        <!-- Vocabulary -->
        <div
          class="bg-white rounded-[16px] p-4 shadow-[0_1px_4px_rgba(0,0,0,0.05)]"
        >
          <h4
            class="text-[13px] font-bold text-slate-800 m-0 mb-3 flex items-center gap-2"
          >
            <i class="fa-solid fa-book-open text-orange-500"></i>
            Từ vựng trong phiên
          </h4>
          <ul class="list-none p-0 m-0 flex flex-col gap-2">
            <li
              v-for="word in vocabList"
              :key="word.cn"
              class="flex items-center justify-between p-2 px-2.5 bg-slate-50 rounded-[10px]"
            >
              <div>
                <span class="text-[15px] font-bold text-slate-800 mr-1.5">{{
                  word.cn
                }}</span>
                <span class="text-[11px] text-slate-400">{{
                  word.pinyin
                }}</span>
              </div>
              <span class="text-[11px] text-slate-500 font-medium">{{
                word.vi
              }}</span>
            </li>
          </ul>
        </div>

        <!-- Progress -->
        <div
          class="bg-white rounded-[16px] p-4 shadow-[0_1px_4px_rgba(0,0,0,0.05)]"
        >
          <h4
            class="text-[13px] font-bold text-slate-800 m-0 mb-3 flex items-center gap-2"
          >
            <i class="fa-solid fa-bullseye text-green-600"></i>
            Tiến độ hôm nay
          </h4>
          <div class="flex flex-col gap-1.5">
            <div class="flex justify-between">
              <span class="text-[11px] text-slate-400 font-semibold"
                >Mục tiêu ngày</span
              >
              <span class="text-[12px] font-bold text-orange-500">32%</span>
            </div>
            <div class="h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                class="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full transition-[width] duration-500 ease-out"
                style="width: 32%"
              ></div>
            </div>
          </div>
        </div>
      </aside>
    </div>

    <!-- ===== TONE DETAIL MODAL ===== -->
    <Transition name="modal">
      <div
        v-if="showToneDetail"
        class="fixed inset-0 z-[99] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
        @click.self="showToneDetail = false"
      >
        <div
          class="bg-white rounded-[20px] w-[320px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
        >
          <!-- Modal header -->
          <div
            class="flex items-center justify-between p-4 px-5 border-b border-slate-100"
          >
            <h3 class="text-[15px] font-bold text-blue-700 m-0">
              Chi tiết ngữ âm: /máng/
            </h3>
            <button
              @click="showToneDetail = false"
              class="w-[34px] h-[34px] flex items-center justify-center rounded-full text-slate-500 text-[14px] transition-colors bg-transparent border-none cursor-pointer hover:bg-slate-100"
            >
              <i class="pi pi-times"></i>
            </button>
          </div>

          <!-- Tone diagram -->
          <div class="p-4 px-5">
            <div
              class="relative bg-slate-50 rounded-[14px] h-[140px] mb-3 overflow-hidden flex items-center justify-center"
            >
              <svg viewBox="0 0 200 100" class="absolute inset-0 w-full h-full">
                <path
                  d="M 30 20 Q 100 20 170 80"
                  fill="none"
                  stroke="#94a3b8"
                  stroke-width="3"
                  stroke-dasharray="6 4"
                />
                <path
                  d="M 30 80 Q 100 60 170 20"
                  fill="none"
                  stroke="#f97316"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <circle cx="170" cy="20" r="6" fill="#f97316" />
              </svg>
              <div
                class="absolute left-2 top-2 bottom-2 flex flex-col justify-between"
              >
                <span class="text-[10px] text-slate-400 font-semibold">5</span>
                <span class="text-[10px] text-slate-400 font-semibold">4</span>
                <span class="text-[10px] text-slate-400 font-semibold">3</span>
                <span class="text-[10px] text-slate-400 font-semibold">2</span>
                <span class="text-[10px] text-slate-400 font-semibold">1</span>
              </div>
            </div>
            <p
              class="text-[13px] text-slate-600 text-center leading-relaxed m-0"
            >
              Thanh điệu lên: Nâng nhẹ phần cuống lưỡi khi bạn phát âm âm mũi
              "ng".
            </p>
          </div>

          <!-- Actions -->
          <div class="grid grid-cols-2 gap-3 px-5 pb-5">
            <button
              class="flex items-center justify-center gap-2 bg-blue-700 text-white font-bold text-[13px] p-3 rounded-xl border-none cursor-pointer transition-colors hover:bg-blue-800"
            >
              <i class="fa-solid fa-volume-high"></i>
              Nghe chuẩn
            </button>
            <button
              class="flex items-center justify-center border-2 border-blue-700 text-blue-700 font-bold text-[13px] p-3 rounded-xl bg-transparent cursor-pointer transition-colors hover:bg-blue-50"
              @click="showToneDetail = false"
            >
              Thử lại
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </NuxtLayout>
</template>

<script setup>
useHead({ title: "Voice Chat · Luyện tập giọng nói" });
import { onBeforeUnmount, ref } from "vue";

const showToneDetail = ref(false);
const isRecording = ref(false);
const isThinking = ref(false);

const messagesEl = ref(null);

const userWave = [10, 18, 28, 20, 24, 16, 22, 18, 12, 20, 14, 22];
const liveWave = ref([8, 14, 20, 16, 24, 18, 14, 20, 10, 16, 8, 12]);

let waveInterval = null;

function startRecording() {
  isRecording.value = true;
  waveInterval = setInterval(() => {
    liveWave.value = liveWave.value.map(
      () => Math.floor(Math.random() * 22) + 4,
    );
  }, 120);
}

function stopRecording() {
  isRecording.value = false;
  clearInterval(waveInterval);
  isThinking.value = true;
  setTimeout(() => {
    isThinking.value = false;
  }, 2000);
}

onBeforeUnmount(() => clearInterval(waveInterval));

const vocabList = [
  { cn: "忙", pinyin: "máng", vi: "Bận rộn" },
  { cn: "今天", pinyin: "jīntiān", vi: "Hôm nay" },
  { cn: "休息", pinyin: "xiūxi", vi: "Nghỉ ngơi" },
  { cn: "遗憾", pinyin: "yíhàn", vi: "Tiếc nuối" },
];
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #e2e8f0;
  border-radius: 4px;
}

@keyframes pulse-ring {
  0%,
  100% {
    box-shadow: 0 4px 20px rgba(220, 38, 38, 0.4);
  }
  50% {
    box-shadow: 0 4px 32px rgba(220, 38, 38, 0.7);
  }
}
.animate-pulse-ring {
  animation: pulse-ring 1.2s infinite;
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.25s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.92);
}

/* Animations */
@keyframes slide-left {
  from { opacity: 0; transform: translateX(30px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes slide-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-slide-left { animation: slide-left 0.8s ease-out forwards; }
.animate-slide-up { animation: slide-up 0.6s ease-out forwards; }

.delay-100 { animation-delay: 100ms; }
.delay-200 { animation-delay: 200ms; }
.delay-300 { animation-delay: 300ms; }
.delay-400 { animation-delay: 400ms; }
.opacity-0 { opacity: 0; }
</style>
