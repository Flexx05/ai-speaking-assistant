import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import Ripple from 'primevue/ripple'
import ToastService from 'primevue/toastservice'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(
    PrimeVue,
    {
      theme: {
        preset: Aura
      },
      ripple: true
    }
  )

  nuxtApp.vueApp.use(ToastService)
  nuxtApp.vueApp.directive('ripple', Ripple)
})

