import {createStackNavigator} from 'react-navigation-stack';
import RecommendPage from '../pages/recommend/RecommendPage';
import I18n from '../i18n/locales/index';

const routeConfigs = {
  Recommend: {
    screen: RecommendPage,
  },
};

const navTitle = I18n.t('recommend');

const stackNavigatorConfig = {
  initialRouteName: 'Recommend',
  navigationOptions: {
    title: navTitle,
  },
};

const RecommendNavigator = createStackNavigator(
  routeConfigs,
  stackNavigatorConfig,
);

export default RecommendNavigator;
