import './DetailedView.css';

const DetailedView = ({ article }) => {
  return (
    <article>
      <h3>{article.title}</h3>
      <h4>{article.byline}</h4>
      <h4>{article.created_date}</h4>
      <p>{article.abstract}</p>
      <img src={article.multimedia[4].url}/>

    </article>
  )
}

export default DetailedView;