import React from 'react';
import './App.css';
import Header from './components/Header';
import QuizSpace from './components/QuizSpace';

import { SiteProvider } from './utils/GlobalState';

function App() {
  return (
    <div className="App">
      <SiteProvider>
        <Header />
        <main>
          <QuizSpace />
        </main>
      </SiteProvider>
    </div>
  );
}

export default App;
