import { createRouter } from '@expo/ex-navigation';

import About from "../scenes/About";
import NavigationLayout from "./NavigationLayout"
import Schedule from "../scenes/Schedule";
import Session from "../scenes/Session"
const Router = createRouter(() => ({
  about: () => About,
  layout: () => NavigationLayout,
  schedule: () => Schedule,
  session: () => Session
}));

export default Router