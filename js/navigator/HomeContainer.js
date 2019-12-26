import {createStackNavigator} from 'react-navigation-stack';
import HomePage from '../pages/home/HomePage';
import I18n from '../i18n/locales/index';

const routeConfigs = {
  Home: {
    screen: HomePage,
    navigationOptions: () => ({
      title: I18n.t('home'),
      headerBackTitle: null,
    }),
  },
};

const stackNavigatorConfig = {
  initialRouteName: 'Home',
  navigationOptions: {
    headerTintColor: '#fff000',
  },
};

const HomeNavigator = createStackNavigator(routeConfigs, stackNavigatorConfig);

export default HomeNavigator;
