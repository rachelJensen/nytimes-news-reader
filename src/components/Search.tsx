import './Search.css';
import { categories, categoriesEng } from '../utils';
import { ISearch } from '../interfaces';


const Search = ({ setFromSearch }: ISearch) => {
  const options = categories.map((category, index) => {
    return <option value={category} key={index}>{categoriesEng[index]}</option>
  })

  const handleChange = () => {
    const selection: any = document.getElementById('selection')
    setFromSearch(selection.value)
  }

  return(
    <select id='selection' onChange={handleChange}>
      {options}
    </select>
  )
}

export default Search;