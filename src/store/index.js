import combineReducers from "./reducers/index";
import { createStore, applyMiddleware } from "redux";
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import thunk from 'redux-thunk'
 
const persistConfig = {
  key: 'v001',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, combineReducers)

const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store)
export default store;