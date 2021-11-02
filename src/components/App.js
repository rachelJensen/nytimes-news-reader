import './App.css';
import { useState } from 'react';
import { getStories } from '../apiCalls.js';
import Search from './Search'



function App() {
  // keep subject in App state so navigating between headlines and detailed view doesn't reset the search
  const [category, setCategory] = useState('home');
  const [stories, setStories] = useState([])

  const setFromSearch = (topic) => {
    setCategory(topic);
    getStories(topic)
      .then(data => setStories(data))
  }



  return (
    <div className="App">
      <header className="App-header">
        NY Times News Reader
      </header>
      <Search setFromSearch={setFromSearch}/>
    </div>
  );
}

export default App;
