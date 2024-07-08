import { PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import './section.css'
function Section() {
    return(
        <>
        <div className="container">
            <div className='section-card'>

            
            <p className='section-card__text'>Books</p>
            <div>
                <Button><PlusOutlined /> Create a book</Button>
            </div>
            </div>
            <div className='sect'>

            </div>
        </div>
        </>
    )}
    export default Section 