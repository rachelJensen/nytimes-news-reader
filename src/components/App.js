import './App.css';
import { useState, useEffect } from 'react';
import { getStories } from '../apiCalls.js';
import Search from './Search';
import Headlines from './Headlines';
import DetailedView from './DetailedView';



function App() {
  // keep subject in App state so navigating between headlines and detailed view doesn't reset the search
  const [category, setCategory] = useState('home');
  const [categoryHead, setCategoryHead] = useState('');
  const [stories, setStories] = useState({});
  const [article, setArticle] = useState({})

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

  console.log("article", article)

  return (
    <div className="App">
      <header className="App-header">
        NY Times News Reader
      </header>
      <Search setFromSearch={setFromSearch}/>
      {stories.status === 'OK' && <Headlines stories={stories} categoryHead={categoryHead} setArticle={setArticle}/>}
      <DetailedView article={article}/>
    </div>
  );
}

export default App;
