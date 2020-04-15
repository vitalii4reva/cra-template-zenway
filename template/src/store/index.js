import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";
import monitorReducersEnhancer from "./monitorReducer";
import rootReducer from "./reducers";
import { isProd } from "../helpers";

console.log("isProd(): ", isProd());

const devMiddlewares = () => {
  return isProd() ? [] : [logger];
};

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk, ...devMiddlewares()],
    preloadedState,
    enhancers: !isProd() ? [monitorReducersEnhancer] : [],
  });

  if (!isProd() && module.hot) {
    module.hot.accept("./reducers", () => store.replaceReducer(rootReducer));
  }

  return store;
}
