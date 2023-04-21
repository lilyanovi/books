import Likes from '../filters/likes/likes'
import Search from '../filters/search/search'
import './header.scss'

const Header = () => {
    
    return (
      <>
        <header className='header'>
            <div className='container header__wrp'>
                <h1>Books</h1>
                <div className='header__btns'>
                    <Search />
                    <Likes />
                </div>
            </div>
        </header>
      </>
    )
  }
  
  export default Header