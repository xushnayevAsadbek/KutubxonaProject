import './header.css'
import headerIcon from '../../../public/img/logo.svg'
import { BellOutlined, SearchOutlined } from '@ant-design/icons'

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
            <a href="#"><BellOutlined  style={{
              fontSize:'25px'}}/></a>
        </div>

       </header>
      </>
    )
  }
  
  export default Header