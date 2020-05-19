import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './modules';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [
    'app',
    'auth',
    'chats',
    'messages',
    'entities',
    'products',
    'viewer',
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(thunk),
);

export const persistor = persistStore(store);