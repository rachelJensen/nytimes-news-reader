import './Headlines.css';
import { IPropsToHeadline } from '../interfaces';



const Headlines = ({ stories, categoryHead, setArticle, setShowArticle }: IPropsToHeadline) => {
  const headlines = stories.results.map((story, index) => {
    return (<button value={index} key={index} onClick={(event) => {handleDetails(event)}}>{story.title}</button>)
  })

  const handleDetails = (event: any) => {
    event.preventDefault();
    setArticle(stories.results[event.target.value])
    setShowArticle(true)
  }

  return (
    <nav className='headlines'>
      <h2>{`Top Stories from ${categoryHead}`}</h2>
      {headlines}
    </nav>
  )
}

export default Headlines;