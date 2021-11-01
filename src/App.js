import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Feed from './Feed/Feed';
import "./App.css";
import Widgets from './Widgets/Widgets';
import { Button } from '@material-ui/core'

function App() {
  return (
    // BEM
    <div className="app">
      {/* Sidebar */}
      <Sidebar />

      {/* Feed */}
      <Feed />

      {/* Widgets */}
      <Widgets />

    </div>
  );
}

export default App;