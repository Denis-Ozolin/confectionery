import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
// import { jwtMiddleware } from '../middlewares/JWTrefreshMiddleware';
import { authReducer } from "./auth";
import { cartReducer } from "./cart";
import { productsReducer } from "./products/products-slice";

// import { balanceReducer } from './balance';

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token", "refreshTtoken"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  cart: cartReducer,
  products: productsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // .concat(jwtMiddleware),
});

export const persistor = persistStore(store);
