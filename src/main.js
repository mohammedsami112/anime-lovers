import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import CoreuiVue from '@coreui/vue'
import CIcon from '@coreui/icons-vue'
import { iconsSet as icons } from '@/assets/icons'
import DocsExample from '@/components/DocsExample'
import loadingSpinner from '@/components/shared/loadingSpinner.vue'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import 'primevue/resources/themes/lara-light-indigo/theme.css'
import 'primeicons/primeicons.css'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(CoreuiVue)
app.use(PrimeVue)
app.use(ToastService)

app.provide('icons', icons)
app.component('CIcon', CIcon)
app.component('DocsExample', DocsExample)
app.component('loadingOverlay', loadingSpinner)

app.mount('#app')
