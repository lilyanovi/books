import { useEffect } from 'react'
import { setCards } from '../../store/catalog/action'
import { selectCards } from '../../store/catalog/selector'
import './cards.scss'
import { useDispatch, useSelector } from 'react-redux'
import CardItem from './cardItem'

const Cards = () => {

const url = 'https://gutendex.com/books?sort=popular '
const dispatch = useDispatch()

useEffect(() => {
  fetch(url)
    .then((data) => {
      if (data.status !== 200) {
        return null
      } else {
          data.json()
            .then((data) => {
              dispatch(setCards(data.results))  
              return
            })
            .catch((error) => console.log(error))
      }
    })
    .catch((error) => console.log(error))  
}, [])
 
  const dataCards = useSelector(selectCards)
  //const copy = Object.assign(dataCards)
 // const cards = Object.entries(copy)
 // console.log(cards)
 //<div key={key}>{dataCards[key].id}</div>
    return (
      <>
        <main className='catalog'>
          <div className='container catalog__cards'>
            {dataCards ?
            Object.keys(dataCards).map(key =>       
            <CardItem key={dataCards[key].id} card={dataCards[key]}/>
            ):
            <div>Данные не загружены</div>}
          </div>
        </main>
      </>
    )
  }
  
  export default Cards