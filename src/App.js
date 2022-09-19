import React from 'react';
import './App.css';
import Header from './components/Header';
import QuizSpace from './components/QuizSpace';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <QuizSpace />
      </main>
    </div>
  );
}

export default App;
