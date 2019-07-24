import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Home from './containers/Home'
import ProjectList from './components/ProjectList';

function App() {
  return (
    <div className="App">
     <Nav />
     <Home />
     <ProjectList />
     <ProjectList />
     <ProjectList />
    </div>
  );
}

export default App;
