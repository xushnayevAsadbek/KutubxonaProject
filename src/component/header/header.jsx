import './header.css'
import headerIcon from '../../../public/img/logo.svg'
import { BellOutlined, SearchOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

function Header() {
    return (
      <>
       <header className='header container'>
        <div className='header-box'>
            <a href="#" className='cursor-pointer'><img src={headerIcon} alt="" /></a>
           <button className='header-box--card cursor-pointer'><SearchOutlined  style={{
            fontSize:'20px'
           }}/><p className='header-box__text'>Search for any training you want</p></button>
        </div>
        <div>
        </div>
        <div>
            <Link to="/auth/login"><BellOutlined  style={{
              fontSize:'25px'}}/></Link>
        </div>

       </header>
      </>
    )
  }
  
  export default Header