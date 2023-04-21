import debounce from 'lodash.debounce'
import './search.scss'
import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCards } from '../../../store/catalog/selector'
import { filterSearch } from '../../../store/filter/action'
import { showLikesFilter } from '../../../store/showFilter/action'
import { selectLikes } from '../../../store/likes/selector'

const Search = () => {
    const [value, setValue] = useState('')
    const [focus, setFocus] = useState(false)
    const cards = useSelector(selectCards)
    const likesCards = useSelector(selectLikes)
    const showLikes = useSelector(showLikesFilter)
    const dispatch = useDispatch()

    const handleSearch = (e) => {
        setValue(e.target.value)
        onChangeInput(e.target.value)
    }

    const onChangeInput = useCallback(
        debounce((value) => {
            if (value) {
                const filterSearchValue = value?.toLowerCase()   
                const filterTitle = Object.values(cards).filter((card) => {
                const cardTitle = card.title.toLowerCase()
            return cardTitle.indexOf(filterSearchValue) !== -1 
            })
            const filterCards = Object.assign(filterTitle)
          //  console.log(filterCards)  
            dispatch(filterSearch(filterCards))
            }
        }, 1000),
        [],
    )

    const handleFocus = (e) => {
        setFocus(true)
    }

    const handleBlur = (e) => {
        setFocus(false)
    }

    const handleClear = (e)=> {
        e.preventDefault()
        setValue('')
        console.log(value)
    }

    return (
        <form className='search'>
            <input 
                type='text' 
                className='search__input'
                name='search'
                placeholder='Search..'
                onChange={(e) => handleSearch(e)}
                onFocus={(e) => handleFocus(e)}
                onBlur={(e) => handleBlur(e)}
                value={value}
                >
            </input>
            {focus ?
            <button 
                className='search__btn search__btn__clear'
                type='button'
                onClick={(e)=>handleClear(e)}
            >
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path  d="M10.4608 10.4601C10.5815 10.3395 10.745 10.2717 10.9156 10.2717C11.0862 10.2717 11.2498 10.3395 11.3704 10.4601L15.0087 14.0984C15.1293 14.219 15.1971 14.3826 15.1971 14.5532C15.1971 14.7238 15.1293 14.8873 15.0087 15.008L11.3704 18.6462C11.2498 18.7669 11.0862 18.8346 10.9156 18.8346C10.745 18.8346 10.5815 18.7669 10.4608 18.6462C10.3402 18.5256 10.2725 18.362 10.2725 18.1915C10.2725 18.0209 10.3402 17.8573 10.4608 17.7367L13.6443 14.5532L10.4608 11.3697C10.3402 11.2491 10.2725 11.0855 10.2725 10.9149C10.2725 10.7443 10.3402 10.5807 10.4608 10.4601Z"/>
                    <path  d="M14.0992 15.008C13.9786 14.8873 13.9109 14.7238 13.9109 14.5532C13.9109 14.3826 13.9786 14.219 14.0992 14.0984L17.7375 10.4601C17.8581 10.3395 18.0217 10.2717 18.1923 10.2717C18.3629 10.2717 18.5265 10.3395 18.6471 10.4601C18.7677 10.5807 18.8355 10.7443 18.8355 10.9149C18.8355 11.0855 18.7677 11.2491 18.6471 11.3697L15.4636 14.5532L18.6471 17.7367C18.7677 17.8573 18.8355 18.0209 18.8355 18.1915C18.8355 18.362 18.7677 18.5256 18.6471 18.6462C18.5265 18.7669 18.3629 18.8346 18.1923 18.8346C18.0217 18.8346 17.8581 18.7669 17.7375 18.6462L14.0992 15.008Z"/>
                </svg>
            </button> :
            <button 
                className='search__btn'
                type='button'
  
            >
                <svg width="15" height="15" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12.2479L9.40284 9.57906M10.8421 6.01226C10.8421 7.35105 10.3236 8.63501 9.40076 9.58168C8.47789 10.5283 7.2262 11.0602 5.92105 11.0602C4.61591 11.0602 3.36422 10.5283 2.44134 9.58168C1.51847 8.63501 1 7.35105 1 6.01226C1 4.67348 1.51847 3.38952 2.44134 2.44285C3.36422 1.49619 4.61591 0.964355 5.92105 0.964355C7.2262 0.964355 8.47789 1.49619 9.40076 2.44285C10.3236 3.38952 10.8421 4.67348 10.8421 6.01226Z" />
                </svg>
            </button>}
        </form>
    )
  }
  
  export default Search