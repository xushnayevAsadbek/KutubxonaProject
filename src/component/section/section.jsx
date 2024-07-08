import { PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import Search from 'antd/es/transfer/search'
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
            <div className='section-card--box'>
        <div className='section-card--box-wrapper'>
            <h3 className='section-card--box-title'>Lorem ipsum</h3>
            <p className='section-card--box-text'>Lorem ipsum dolor sit amet consectetur. Etiam auctor vitae morbi cursus id non. Cursus id semper ipsum nunc. Adipiscing massa ut morbi mattis proin. Mi id sit vulputate bibendum.</p>
            <div style={{
                display:'flex',
                justifyContent:'space-between',
                paddingTop:'15px'
            }}>
            <p className='section-card--box-author'>
            Eben Upton: 2012-year
            </p>
            <span className='section-card--box-num'>211 pages</span>
            </div>
            <div style={{
                display:'flex',
                gap:'20px',
                justifyContent:'end',
                paddingTop:'15px'
            }}>
            <Button>Edit</Button>
            <Button>Remove</Button>
            </div>
        </div>
        <div className='section-card--box-wrapper'>
        <h3 className='section-card--box-title'>Lorem ipsum</h3>
            <p className='section-card--box-text'>Lorem ipsum dolor sit amet consectetur. Etiam auctor vitae morbi cursus id non. Cursus id semper ipsum nunc. Adipiscing massa ut morbi mattis proin. Mi id sit vulputate bibendum.</p>
            <div style={{
                display:'flex',
                justifyContent:'space-between',
                paddingTop:'15px'
            }}>
            <p className='section-card--box-author'>
            Eben Upton: 2012-year
            </p>
            <span className='section-card--box-num'>211 pages</span>
            </div>
            <div style={{
                display:'flex',
                gap:'20px',
                justifyContent:'end',
                paddingTop:'15px'
            }}>
            <Button>Edit</Button>
            <Button>Remove</Button>
            </div>
        </div>
        <div className='section-card--box-wrapper'>
        <h3 className='section-card--box-title'>Lorem ipsum</h3>
            <p className='section-card--box-text'>Lorem ipsum dolor sit amet consectetur. Etiam auctor vitae morbi cursus id non. Cursus id semper ipsum nunc. Adipiscing massa ut morbi mattis proin. Mi id sit vulputate bibendum.</p>
            <div style={{
                display:'flex',
                justifyContent:'space-between',
                paddingTop:'15px'
            }}>
            <p className='section-card--box-author'>
            Eben Upton: 2012-year
            </p>
            <span className='section-card--box-num'>211 pages</span>
            </div>
            <div style={{
                display:'flex',
                gap:'20px',
                justifyContent:'end',
                paddingTop:'15px'
            }}>
            <Button>Edit</Button>
            <Button>Remove</Button>
            </div>
        </div>
        <div className='section-card--box-wrapper'>
        <h3 className='section-card--box-title'>Lorem ipsum</h3>
            <p className='section-card--box-text'>Lorem ipsum dolor sit amet consectetur. Etiam auctor vitae morbi cursus id non. Cursus id semper ipsum nunc. Adipiscing massa ut morbi mattis proin. Mi id sit vulputate bibendum.</p>
            <div style={{
                display:'flex',
                justifyContent:'space-between',
                paddingTop:'15px'
            }}>
            <p className='section-card--box-author'>
            Eben Upton: 2012-year
            </p>
            <span className='section-card--box-num'>211 pages</span>
            </div>
            <div style={{
                display:'flex',
                gap:'20px',
                justifyContent:'end',
                paddingTop:'15px'
            }}>
            <Button>Edit</Button>
            <Button>Remove</Button>
            </div>
        </div>
        <div className='section-card--box-wrapper'>
        <h3 className='section-card--box-title'>Lorem ipsum</h3>
            <p className='section-card--box-text'>Lorem ipsum dolor sit amet consectetur. Etiam auctor vitae morbi cursus id non. Cursus id semper ipsum nunc. Adipiscing massa ut morbi mattis proin. Mi id sit vulputate bibendum.</p>
            <div style={{
                display:'flex',
                justifyContent:'space-between',
                paddingTop:'15px'
            }}>
            <p className='section-card--box-author'>
            Eben Upton: 2012-year
            </p>
            <span className='section-card--box-num'>211 pages</span>
            </div>
            <div style={{
                display:'flex',
                gap:'20px',
                justifyContent:'end',
                paddingTop:'15px'
            }}>
            <Button>Edit</Button>
            <Button>Remove</Button>
            </div>
        </div>
            </div>
        </div>
        </>
    )}
    export default Section 