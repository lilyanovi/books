import { useDispatch } from 'react-redux'
import './cardItem.scss'
import { deleteCard } from '../../store/catalog/action'

const CardItem = (prop) => {

const card = prop.card
const dispatch = useDispatch()

const handleDeleteCard = (e, id) => {
  
    dispatch(deleteCard(id))
}

    return (
      <>
        <div className='card-item'>
           <div className='card-item__btn'>
                <button 
                    className='card-item__btn__like'
                    type='submit'
                >
                    <svg viewBox="0 0 18 18" >
    <path d="M16.4997 3.82C15.8297 2.445 13.8997 1.32 11.6547 1.975C10.5819 2.28487 9.64595 2.9494 8.99969 3.86C8.35343 2.9494 7.41746 2.28487 6.34469 1.975C4.09469 1.33 2.16969 2.445 1.49969 3.82C0.559689 5.745 0.94969 7.91 2.65969 10.255C3.99969 12.09 5.91469 13.95 8.69469 16.11C8.78254 16.1785 8.89077 16.2157 9.00219 16.2157C9.11361 16.2157 9.22183 16.1785 9.30969 16.11C12.0847 13.955 14.0047 12.11 15.3447 10.255C17.0497 7.91 17.4397 5.745 16.4997 3.82Z" />
                    </svg>
                </button>
                <button
                    className='card-item__btn__del'
                    type='submit'
                    onClick={(e) => handleDeleteCard(e, card.id)}
                ></button>
           </div>
           <div className='card-item__img'>
                <img  
                    src={card.formats['image/jpeg']} 
                    alt='name'
                />
           </div>
            {Object.keys(card.authors).map((key, i)=> 
            <p key={i}>{card.authors[key].name}</p>
            )}
            <h3>{card.title}</h3>
            <button className='card-item__read'>
                <a 
                    href={card.formats['text/html']}
                    target='_blank'
                    rel="noopener noreferrer"
                    >Read</a>
            </button>
        </div>
      </>
    )
  }
  
  export default CardItem