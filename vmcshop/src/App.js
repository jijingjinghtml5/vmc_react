import React from 'react';
import './App.css';
import route from './Config/Route'; //路由配置
import 'antd-mobile/dist/antd-mobile.css';

function App() {
  return (
    <div className="App">
        {route}
    </div>
  );
}

export default App;
