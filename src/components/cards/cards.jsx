import { setCards } from '../../store/catalog/action'
import './cards.scss'
import { useDispatch } from 'react-redux'

const Cards = () => {

const url = 'https://gutendex.com/books?sort=popular '
const dispatch = useDispatch()

fetch(url)
  .then((data) => {
    data.json()
      .then((data) => dispatch(setCards(data.results)))
  })
  .catch((error) => console.log(error))

    return (
      <>
        <main className='container'>
          <h1>Catalog</h1>
        </main>
      </>
    )
  }
  
  export default Cards