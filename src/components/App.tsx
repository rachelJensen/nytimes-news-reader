import './App.css';
import { useState, useEffect } from 'react';
import { getStories } from '../apiCalls';
import { IArticle, IStories } from '../interfaces';
import Search from './Search';
import Headlines from './Headlines';
import DetailedView from './DetailedView';


function App() {
  const [category, setCategory] = useState<string>('home');
  const [categoryHead, setCategoryHead] = useState<string>('');
  const [stories, setStories] = useState<IStories>({} as IStories);
  const [article, setArticle] = useState<IArticle>({} as IArticle);
  const [size, setSize] = useState<number>(window.innerWidth);
  const [showArticle, setShowArticle] = useState<boolean>(true);

  useEffect(() => {
    setFromSearch(category)
    window.addEventListener('resize', defineDisplay)
  }, [])

  const setFromSearch = (topic: string) => {
    setCategory(topic);
    getStories(topic)
      .then(data => {
        setStories(data)
        setCategoryHead(data.section)
        setArticle(data.results[0])
      })
  }

  const defineDisplay = () => {
    setSize(window.innerWidth);
    if (window.innerWidth > 750) {
      setShowArticle(true)
    } else {
      setShowArticle(false)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        NY Times News Reader
        <Search setFromSearch={setFromSearch}/>   
      </header>
      <div className='main-container'>
        {size > 750 
          ?
          <main className='main-large'>
            {stories.status === 'OK' && <Headlines stories={stories} categoryHead={categoryHead} setArticle={setArticle} setShowArticle={setShowArticle} />}
            {article.title && <DetailedView article={article} canClose={false} showArticle={showArticle} setShowArticle={setShowArticle}/>}
          </main>
          :
          <main className='main-small'>
            {article.title && <DetailedView article={article}  canClose={true} showArticle={showArticle} setShowArticle={setShowArticle} />}
            {stories.status === 'OK' && <Headlines stories={stories} categoryHead={categoryHead} setArticle={setArticle} setShowArticle={setShowArticle} />}
          </main>
      } 
      </div>  
    </div>
  );
}

export default App;
