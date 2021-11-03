import './App.css';
import { useState, useEffect } from 'react';
import { getStories } from '../apiCalls.js';
import Search from './Search'
import Headlines from './Headlines';



function App() {
  // keep subject in App state so navigating between headlines and detailed view doesn't reset the search
  const [category, setCategory] = useState('home');
  const [categoryHead, setCategoryHead] = useState('');
  const [stories, setStories] = useState([]);

  useEffect(() => {
    setFromSearch(category)
  }, [])

  const setFromSearch = (topic) => {
    setCategory(topic);
    getStories(topic)
      .then(data => {
        setStories(data)
        setCategoryHead(data.section)
        console.log('cateogry check in APP', category, stories)
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        NY Times News Reader
      </header>
      <Search setFromSearch={setFromSearch}/>
      <Headlines stories={stories} categoryHead={categoryHead}/>
    </div>
  );
}

export default App;
