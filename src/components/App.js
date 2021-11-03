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
  const [article, setArticle] = useState({});
  const [size, setSize] = useState(window.innerWidth)

  useEffect(() => {
    setFromSearch(category)
    //add a resize event listener
    window.addEventListener('resize', () => setSize(window.innerWidth) )
  }, [])

  const setFromSearch = (topic) => {
    setCategory(topic);
    getStories(topic)
      .then(data => {
        setStories(data)
        setCategoryHead(data.section)
        setArticle(data.results[0])
        console.log('cateogry check in APP', category, stories)
      })
  }

  // if the screen size is large enough, render both Headlines and DetailedView
  // if the screen is smaller, render Headlines OR DetailedView


  return (
    <div className="App">
      <header className="App-header">
        NY Times News Reader
        <Search setFromSearch={setFromSearch}/>   
      </header>
      {size > 800 
        ?
        <main className='main-large'>
          {stories.status === 'OK' && <Headlines stories={stories} categoryHead={categoryHead} setArticle={setArticle}/>}
          {article.title && <DetailedView article={article}/>}
        </main>
        :
        <main className='main-small'>
          {article.title && <DetailedView article={article}/>}
          {stories.status === 'OK' && <Headlines stories={stories} categoryHead={categoryHead} setArticle={setArticle}/>}
        </main>
      }   
    </div>
  );
}

export default App;
