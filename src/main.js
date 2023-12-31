import './style.css'
import './assets/slider.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(faCoffee)
library.add(faInstagram)
library.add(faFacebook)
///library.add(faWhatsApp)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
