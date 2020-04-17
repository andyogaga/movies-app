import combineReducers from "./reducers/index";
import { createStore, applyMiddleware } from "redux";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import thunk from 'redux-thunk'
 
const persistConfig = {
  key: 'v002',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, combineReducers)

export default createStore(persistedReducer, applyMiddleware(thunk));