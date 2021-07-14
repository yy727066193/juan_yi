import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import {
  clearObject,
  copyObject,
  spliceString,
  filterTimestamp,
  resultFormat,
  setStatusName,
  isEmpty,
} from '@/utils/public';
import enums from '@/utils/enums';
import helper from '@/utils/helper';
import globalConfig from '@/utils/globalConfig';

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');

app.config.globalProperties.clearObject = clearObject;
app.config.globalProperties.copyObject = copyObject;
app.config.globalProperties.spliceString = spliceString;
app.config.globalProperties.filterTimestamp = filterTimestamp;
app.config.globalProperties.resultFormat = resultFormat;
app.config.globalProperties.setStatusName = setStatusName;
app.config.globalProperties.isEmpty = isEmpty;
app.config.globalProperties.enums = enums;
app.config.globalProperties.helper = helper;
app.config.globalProperties.globalConfig = globalConfig;
