import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import store from './redux/store';
import NewsPage from './pages/NewsPage/NewsPage';
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { ROUTES } from './consts/routes';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter ROUTES={ROUTES} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
