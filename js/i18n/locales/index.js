import I18n from 'react-native-i18n';
import DeviceInfo from 'react-native-device-info';
import en from './en';
import zh from './zh';

I18n.fallbacks = true;

I18n.defaultLocale = 'en';

I18n.translations = {
  en,
  zh,
};

export default I18n;
