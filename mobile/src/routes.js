import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './components/pages/Login';
import List from './components/pages/List';
import Booking from './components/pages/Booking';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    List,
    Booking
  })
);

export default Routes;
