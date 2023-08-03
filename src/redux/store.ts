import { combineReducers, configureStore } from "@reduxjs/toolkit";

import {
	persistReducer,
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { basketReducer } from "./basketSlice";
import { productListReducer } from "./productListSlice";

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['basket'],
}

const reducer = combineReducers({
  basket: persistReducer(persistConfig, basketReducer),
  productList: productListReducer,
});

export const store = configureStore({
	reducer,
	middleware: (getDefaultMiddleware) =>
	getDefaultMiddleware({
		serializableCheck: {
		ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		},
	}),
});

export const persistor = persistStore(store);