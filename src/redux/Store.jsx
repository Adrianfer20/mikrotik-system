
// store.js
import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers/reducers';
import { Provider } from 'react-redux';
import asyncMiddleware from './Middleware';



const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(asyncMiddleware)
});

const StoreProvider = ({children}) => {
    return <Provider store={store}>
        {children}
    </Provider>
}

export default StoreProvider;
