import './DetailedView.css';
import { useEffect } from 'react/cjs/react.development';
import { getDate } from '../utils';
import { useState } from 'react';

const DetailedView = ({ article, canClose, showArticle, setShowArticle }) => {
  const [date, setDate] = useState('')

  useEffect(() => {
    if (canClose) {
      setShowArticle(false)
    }
    const day = getDate(article.created_date)
    setDate(day);
  }, [])

  // console.log(getDate(article.created_date))

  
  return (
    <article>
      {showArticle && <div>
        <img className='head-image' src={article.multimedia[0].url} alt={article.title}/>
        <h3>{article.title}</h3>
        <h4>{article.byline}</h4>
        <h4>{date}</h4>
        <p>{article.abstract}</p>
        <h5><a href={article.url} title={article.title}>Read more at the New York Times</a></h5>
        {canClose && <button onClick={() => setShowArticle(false)}>Can Close</button>}
      </div>}
    </article>
  )
}

export default DetailedView;