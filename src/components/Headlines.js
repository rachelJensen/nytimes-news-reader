import './Headlines.css';

const Headlines = ({ stories, categoryHead, setArticle }) => {
  // use the stories from App to generate a list of headlines
  const headlines = stories.results.map((story, index) => {
    return <li value={index} key={index} onClick={(event) => {handleDetails(event)}}>{story.title}</li>
  })

  // make headlines links to the specific story
  const handleDetails = (event) => {
    //could I set the index as the value, then use the value to pull up the right story in the detailed view?
    event.preventDefault();
    setArticle(stories.results[event.target.value])
  }

  return (
    <section>
      <h2>{`Top Stories from ${categoryHead}`}</h2>
        <ul>
          {headlines}
        </ul>
    </section>
  )
}

export default Headlines;