import { createRouter } from "@expo/ex-navigation";

import About from "../scenes/About";
import Nav from "./Nav";
import Schedule from "../scenes/Schedule";
import Faves from "../scenes/Faves";
import Speakers from "../scenes/Speakers";
import Session from "../scenes/Session";
const Router = createRouter(() => ({
  about: () => About,
  layout: () => Nav,
  schedule: () => Schedule,
  session: () => Session,
  faves: () => Faves,
  speaker: () => Speakers
}));

export default Router;
