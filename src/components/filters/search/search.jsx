import debounce from 'lodash.debounce'
import './search.scss'
import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCards } from '../../../store/catalog/selector'
import { filterSearch } from '../../../store/filter/action'

const Search = () => {
    const [value, setValue] = useState('')
  //  const cards = useSelector(selectCards)
  //  const dispatch = useDispatch()

    const handleSearch = (e) => {
        setValue(e.target.value)
       // onChangeInput(e.target.value)
    }

   /* const onChangeInput = useCallback(
        debounce((value) => {
            if (value) {
                const filterSearchValue = value?.toLowerCase()   
                const filterTitle = Object.values(cards).filter((card) => {
                const cardTitle = card.title.toLowerCase()
            return cardTitle.indexOf(filterSearchValue) !== -1 
            })
            const filterCards = Object.assign(filterTitle)
            console.log(filterCards)  
            dispatch(filterSearch(filterCards))
            }
        }, 1000),
        [],
    )*/

    return (
        <form className='search'>
            <input 
                type='text' 
                className='search__input'
                name='search'
                placeholder='Search..'
                onChange={handleSearch}
                value={value}
                >
            </input>
            <button 
                className='search__btn'
                type='button'
                onChange={(e)=>handleSearch(e)}
            >
                <svg width="15" height="15" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12.2479L9.40284 9.57906M10.8421 6.01226C10.8421 7.35105 10.3236 8.63501 9.40076 9.58168C8.47789 10.5283 7.2262 11.0602 5.92105 11.0602C4.61591 11.0602 3.36422 10.5283 2.44134 9.58168C1.51847 8.63501 1 7.35105 1 6.01226C1 4.67348 1.51847 3.38952 2.44134 2.44285C3.36422 1.49619 4.61591 0.964355 5.92105 0.964355C7.2262 0.964355 8.47789 1.49619 9.40076 2.44285C10.3236 3.38952 10.8421 4.67348 10.8421 6.01226Z" />
                </svg>
            </button>
        </form>
    )
  }
  
  export default Search