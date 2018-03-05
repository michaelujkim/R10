import { combineReducers } from "redux";

import {
  createNavigationEnabledStore,
  NavigationReducer
} from "@expo/ex-navigation";

import AboutReducer from "./about-reducer";
import ScheduleReducer from "./modules/schedule";
import SpeakerReducer from "./modules/speaker";
import FavesReducer from "./modules/faves";
export default combineReducers({
  navigation: NavigationReducer,
  about: AboutReducer,
  schedule: ScheduleReducer,
  speakers: SpeakerReducer,
  faves: FavesReducer
  // other reducers
});
