import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { md3 } from 'vuetify/blueprints'

const myCustomLightTheme = {
    dark: false,
    colors: {
      background: '#FFFFFF',
      surface: '#FFFBE6',
      primary: '#356859',
      'primary-darken-1': '#37966F',
      secondary: '#FD5523',
      'secondary-darken-1': '#FFFBE6',
      error: '#B00020',
      info: '#2196F3',
      success: '#B9E4C9',
      warning: '#FB8C00',
    },
  }

const vuetify = createVuetify({
    theme: {
        defaultTheme: 'myCustomLightTheme',
        themes: {
          myCustomLightTheme,
        },
      },
    blueprint: md3,
    components,
    directives,
})

const app = createApp(App).use(store)

app.use(router)
app.use(vuetify)
app.mount('#app')
