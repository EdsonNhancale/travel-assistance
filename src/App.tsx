import React from 'react';
import './App.css';
import SearchFields from './components/searchFields/SearchFields';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <SearchFields />
      </div>
    </RecoilRoot>
  );
}

export default App;
