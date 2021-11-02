import './Search.css';
import { categories, categoriesEng } from '../utils';

const Search = ({ setFromSearch }) => {
  // write a function that generates all the topics from an array and populates the select element options
  const options = categories.map((category, index) => {
    return <option id={index} value={category} key={index}>{categoriesEng[index]}</option>
  })

  
  // on selection call setFromSearch and pass it the selected option
  const handleChange = () => {
    const selection = document.getElementById('selection').value
    setFromSearch(selection)
  }

  return(
    <select id='selection' onChange={handleChange}>
      {options}
    </select>
  )
}

export default Search;
