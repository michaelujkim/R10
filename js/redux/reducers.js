import { combineReducers } from "redux";

import { createNavigationEnabledStore, NavigationReducer } from '@expo/ex-navigation';

import AboutReducer from "./about-reducer"
import ScheduleReducer from "./modules/schedule"
export default combineReducers({
  navigation: NavigationReducer,
  about: AboutReducer,
  schedule: ScheduleReducer
  // other reducers
});

