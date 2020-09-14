import React from 'react';
import './App.css';
import Main from './views/Main';
import { Router } from '@reach/router';
import ProductDetail from './views/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <ProductDetail path="/:id" />
      </Router>
    </div>
  );
}

export default App;
