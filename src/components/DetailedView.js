import './DetailedView.css';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

const DetailedView = ({ article, canClose }) => {
  const [show, setShow] = useState(true);
  
  useEffect(() => {
    if (canClose) {
      setShow(false)
    }
  }, [])

  
  return (
    <article >
      {show && <div>
        <h3>{article.title}</h3>
        <h4>{article.byline}</h4>
        <h4>{article.created_date}</h4>
        <p>{article.abstract}</p>
        <img src={article.multimedia[4].url}/>
        {canClose && <button onClick={console.log('button click')}>Can Close</button>}
      </div>}
    </article>
  )
}

export default DetailedView;