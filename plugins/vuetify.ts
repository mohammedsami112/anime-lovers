import { createVuetify } from "vuetify";
import { ar } from 'vuetify/locale'
import { VTextField } from 'vuetify/components/VTextField'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'



export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        locale: {
            locale: 'ar',
            fallback: 'ar',
            messages: {ar},
            rtl: {ar: true},
        },
        defaults: {
            VTextField: {
                color: 'primary'
            },
        },
        theme: {
            themes: {
                light: {
                    colors: {
                        primary: "#00c897"
                    }
                }
            }
        },
        components,
        directives
    });

    nuxtApp.vueApp.use(vuetify);
})