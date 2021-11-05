import './Headlines.css';
import { IPropsToHeadline } from '../interfaces';



const Headlines = ({ stories, categoryHead, setArticle, setShowArticle }: IPropsToHeadline) => {
  // use the stories from App to generate a list of headlines
  const headlines = stories.results.map((story, index) => {
    return (<button value={index} key={index} onClick={(event) => {handleDetails(event)}}>{story.title}</button>)
  })

  // make headlines links to the specific story
  const handleDetails = (event: any) => {
    //could I set the index as the value, then use the value to pull up the right story in the detailed view?
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