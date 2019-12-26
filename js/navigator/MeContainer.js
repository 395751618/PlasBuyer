import {createStackNavigator} from 'react-navigation-stack';
import MePage from '../pages/me/MePage';
import I18n from '../i18n/locales/index';

const routeConfigs = {
  Me: {
    screen: MePage,
  },
};

const navTitle = I18n.t('me');

const stackNavigatorConfig = {
  initialRouteName: 'Me',
  navigationOptions: {
    title: navTitle,
  },
};

const MeNavigator = createStackNavigator(routeConfigs, stackNavigatorConfig);

export default MeNavigator;
