import { useEffect, useState } from 'react'
import { setCards } from '../../store/catalog/action'
import { selectCards } from '../../store/catalog/selector'
import './cards.scss'
import { useDispatch, useSelector } from 'react-redux'
import CardItem from './cardItem'
import { selectFilter } from '../../store/filter/selector'
import { selectShowLikes } from '../../store/showFilter/selector'
import { selectLikes } from '../../store/likes/selector'

const Cards = () => {
const url = 'https://gutendex.com/books?sort=popular'
const dispatch = useDispatch()
const showLikes = useSelector(selectShowLikes)
const dataCards = useSelector(selectCards)
const dataCardsLikes = useSelector(selectLikes)

useEffect(() => {
  fetch(url)
    .then((data) => {
      if (data.status !== 200) {
        return null
      } else {
          data.json()
            .then((data) => {
              dispatch(setCards(data.results))
            })
            .catch((error) => console.log(error))
      }
    })
    .catch((error) => console.log(error))  
}, [])
 
    return (
      <>
        <main className='catalog'>
          <div className='container catalog__cards'>
            {Object.keys(dataCards).length !== 0 ?
            Object.entries(showLikes ? dataCardsLikes : dataCards).map(card =>       
            <CardItem 
              key={card[1].id} 
              card={ card[1]} 
              keyCard={card[0]}/>):            
            <div>Data not loaded</div>}
          </div>
        </main>
      </>
    )
  }
  
  export default Cards