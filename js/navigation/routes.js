import { createRouter } from '@expo/ex-navigation';

import About from "../scenes/About";
import NavigationLayout from "./NavigationLayout"
import Schedule from "../scenes/Schedule";
const Router = createRouter(() => ({
  about: () => About,
  layout: () => NavigationLayout,
  schedule: () => Schedule
}));

export default Router