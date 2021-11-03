import './Headlines.css';

const Headlines = ({ stories, categoryHead }) => {
  // use the stories from App to generate a list of headlines
  const headlines = stories.results.map((story, index) => {
    return <li onClick={(event) => {handleDetails(event)}}>{story.title}</li>
  })

  // make headlines links to the specific story
  const handleDetails = (event) => {
    //could I set the index as the value, then use the value to pull up the right story in the detailed view?
    
    console.log('butts')
  }

  return (
    <section>
      <h2>{`Top Stories from ${categoryHead}`}</h2>
      {headlines && 
        <ul>
          {headlines}
        </ul>}
    </section>
  )
}

export default Headlines;