import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify, {
    iconfont: 'md',
    theme: {
        primary: '#9652ff',
        success: '#39ff60',
        info: '#3cd1c2',
        warning: '#ffaa2c',
        error: '#f83e70'
    }
});

export default new Vuetify({
});
