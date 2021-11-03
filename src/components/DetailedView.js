import './DetailedView.css';
import { useEffect } from 'react/cjs/react.development';

const DetailedView = ({ article, canClose, showArticle, setShowArticle }) => {
  useEffect(() => {
    if (canClose) {
      setShowArticle(false)
    }
  }, [])

  
  return (
    <article >
      {showArticle && <div>
        <h3>{article.title}</h3>
        <h4>{article.byline}</h4>
        <h4>{article.created_date}</h4>
        <p>{article.abstract}</p>
        <img src={article.multimedia[4].url} alt={article.title}/>
        {canClose && <button onClick={() => setShowArticle(false)}>Can Close</button>}
      </div>}
    </article>
  )
}

export default DetailedView;