import './DetailedView.css';
import { useEffect } from 'react';
import { getDate } from '../utils';
import { useState } from 'react';
import { IPropsToDV } from '../interfaces';

const DetailedView = ({ article, canClose, showArticle, setShowArticle }: IPropsToDV) => {
  const [date, setDate] = useState<string>('')

  useEffect(() => {
    if (canClose) {
      setShowArticle(false)
    }
    const day = getDate(article.created_date)
    setDate(day);
  }, [])
  
  return (
    <article>
      {showArticle && <div>
        <img className='head-image' src={article.multimedia[0].url} alt={article.title}/>
        <h3>{article.title}</h3>
        <h4>{article.byline}</h4>
        <h4>{date}</h4>
        <p>{article.abstract}</p>
        <h5><a className='outside-link' href={article.url} title={article.title}>Read more at the New York Times</a></h5>
        {canClose && <button className='close' onClick={() => setShowArticle(false)}>Close</button>}
      </div>}
    </article>
  )
}

export default DetailedView;