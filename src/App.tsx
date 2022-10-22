import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import NewsPage from './pages/NewsPage/NewsPage';

function App() {
  return (
    <Provider store ={store}>
      <NewsPage />
    </Provider>
  );
}

export default App;
