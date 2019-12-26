import {createStackNavigator} from 'react-navigation-stack';
import CategoryPage from '../pages/category/CategoryPage';
import I18n from '../i18n/locales/index';

const routeConfigs = {
  Category: {
    screen: CategoryPage,
  },
};

const navTitle = I18n.t('category');

const stackNavigatorConfig = {
  initialRouteName: 'Category',
  navigationOptions: {
    title: navTitle,
  },
};

const CategoryNavigator = createStackNavigator(
  routeConfigs,
  stackNavigatorConfig,
);

export default CategoryNavigator;
