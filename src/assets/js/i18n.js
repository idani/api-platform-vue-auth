import Vue from 'vue';
import VueI18n from 'vue-i18n';
import enMessages from './locales/en';
import jaMessage from './locales/ja'

Vue.use(VueI18n);

export default new VueI18n({
    locale: process.env.VUE_APP_I18N_LOCALE || 'en',
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
    messages: {
        en: enMessages,
        ja: jaMessage
    }
});