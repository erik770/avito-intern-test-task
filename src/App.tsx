import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import NewsPage from './pages/NewsPage/NewsPage';
import Header from './components/Header/Header';

function App() {
  return (
    <Provider store ={store}>
      <Header />
      <NewsPage />
    </Provider>
  );
}

export default App;
