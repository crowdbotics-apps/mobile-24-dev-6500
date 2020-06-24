import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Messaging6614Navigator from '../features/Messaging6614/navigator';
import Messaging6613Navigator from '../features/Messaging6613/navigator';
import EmailAuth6612Navigator from '../features/EmailAuth6612/navigator';
import CalendarView6611Navigator from '../features/CalendarView6611/navigator';
import CalendarView6610Navigator from '../features/CalendarView6610/navigator';
import EmailAuth6609Navigator from '../features/EmailAuth6609/navigator';
import Messaging6608Navigator from '../features/Messaging6608/navigator';
import Messaging6607Navigator from '../features/Messaging6607/navigator';
import EmailAuth6606Navigator from '../features/EmailAuth6606/navigator';
import CalendarView6605Navigator from '../features/CalendarView6605/navigator';
import CalendarView6604Navigator from '../features/CalendarView6604/navigator';
import EmailAuth6603Navigator from '../features/EmailAuth6603/navigator';
import Messaging6602Navigator from '../features/Messaging6602/navigator';
import EmailAuth16590Navigator from '../features/EmailAuth16590/navigator';
import CalendarView6589Navigator from '../features/CalendarView6589/navigator';
import EmailAuth6588Navigator from '../features/EmailAuth6588/navigator';
import Messaging6587Navigator from '../features/Messaging6587/navigator';
import CalendarView6586Navigator from '../features/CalendarView6586/navigator';
import EmailAuth6585Navigator from '../features/EmailAuth6585/navigator';
import Messaging6584Navigator from '../features/Messaging6584/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Messaging6614: { screen: Messaging6614Navigator },
Messaging6613: { screen: Messaging6613Navigator },
EmailAuth6612: { screen: EmailAuth6612Navigator },
CalendarView6611: { screen: CalendarView6611Navigator },
CalendarView6610: { screen: CalendarView6610Navigator },
EmailAuth6609: { screen: EmailAuth6609Navigator },
Messaging6608: { screen: Messaging6608Navigator },
Messaging6607: { screen: Messaging6607Navigator },
EmailAuth6606: { screen: EmailAuth6606Navigator },
CalendarView6605: { screen: CalendarView6605Navigator },
CalendarView6604: { screen: CalendarView6604Navigator },
EmailAuth6603: { screen: EmailAuth6603Navigator },
Messaging6602: { screen: Messaging6602Navigator },
EmailAuth16590: { screen: EmailAuth16590Navigator },
CalendarView6589: { screen: CalendarView6589Navigator },
EmailAuth6588: { screen: EmailAuth6588Navigator },
Messaging6587: { screen: Messaging6587Navigator },
CalendarView6586: { screen: CalendarView6586Navigator },
EmailAuth6585: { screen: EmailAuth6585Navigator },
Messaging6584: { screen: Messaging6584Navigator },
Messenger: { screen: MessengerNavigator },
Calendar: { screen: CalendarNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
