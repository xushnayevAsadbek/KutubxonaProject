import { BellOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import Search from 'antd/es/transfer/search'
import { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import headerIcon from '../../../public/img/logo.svg'
import './section.css'
function Section() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const [task, setTask] = useState(() => {
    const saveTask = localStorage.getItem('task');
    return saveTask ? JSON.parse(saveTask) : [];
});
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [enrol, setEnrol] = useState('');
const [date, setDate] = useState('');

const addTask = (e) => {
    e.preventDefault();
    const newTask = {
        id: Date.now(),
        name: name,
        email: email,
        enrol:enrol,
        date: date,        
}

setTask([...task , newTask])
console.log(newTask);
console.log(task);
setName('');
setEmail('')
setEnrol('')
setDate('')

}
const removeTask = id => {
let filterTask = task.filter(item => item.id !== id)

setTask(filterTask);
toast.info(`You have deleted your information`, {
    autoClose: 1000,
})
clearForm()

}

const editTask = (id) => {
const updatedName = prompt('Enter task title new:', task.find(item => item.id === id).name);
const updatedEmail = prompt('Enter task author new:', task.find(item => item.id === id).email);
const updatedEnrol = prompt('Enter task puplished new:', task.find(item => item.id === id).enrol);
const updatedDate = prompt('Enter task pages new:', task.find(item => item.id === id).date);

if (updatedName !== null && updatedEmail !== null && updatedEnrol !== null && updatedDate !== null) {
    const updatedTasks = task.map(item => (
        item.id === id ? { ...item, name: updatedName, email: updatedEmail,  enrol: updatedEnrol, date: updatedDate } : item
    ));
    setTask(updatedTasks);
    toast.success('Your information has been updated', {
        autoClose: 1000,
    });
}

}

const clearForm = () => {
setName('');
setEmail('');
setEnrol('');
setDate('');
}

useEffect(() => {
localStorage.setItem('task', JSON.stringify(task));
}, [task]);
    return(
        <>
         <header className='header container'>
        <div className='header-box'>
            <a href="#"><img src={headerIcon} alt="" /></a>
           <button className='header-box--card'><SearchOutlined  style={{
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
        <div className="container">
            <div className='section-card'>
            <p className='section-card__text'>Books</p>
            <div>
                <Button onClick={handleOpenModal}><PlusOutlined /> Create a book</Button>
                {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <p className='modal-text'>
                Create a book
                </p>
            <div>
            <form className="form" onSubmit={(e)=>addTask(e)}>
               <div className="form--card">
               <label htmlFor="task_title" className="w-50 d-block mx-auto">
                    <p className='text-primary fw-bold text-uppercase'>Title</p>
                    <input type="text"
                        id="task_title"
                        placeholder='Enter your title'
                        value={name}
                        onChange={(e => setName(e.target.value))}
                        required
                    />
                </label>
               </div>
               <div className="form--card">
                <label htmlFor="task_email" >
                    <p className='text-primary fw-bold text-uppercase'>Author</p>
                    <input type="text"
                        required
                        id="task_email"
                        placeholder='Enter your author'
                        value={email}
                        onChange={(e => setEmail(e.target.value))}
                    />
                </label>
                </div>
                <div className="form--card">
                <label htmlFor="task_enroll">
                    <p className="text-primary fw-bold text-uppercase">Published</p>
                    <input type="text"
                        required
                        placeholder='Enter your published'
                        id="task_enroll"
                        value={enrol}
                        onChange={(e => setEnrol(e.target.value))}  
                    />
                </label>
                </div>
               <div className="form--card">
               <label htmlFor="task_date">
                    <p className="text-primary fw-bold text-uppercase">Pages</p>
                    <input type="number"
                        required
                        placeholder='Enter your pages'
                        id="task_date"
                        value={date}
                        onChange={(e => setDate(e.target.value))}                   
                    />
                </label>
               </div>
              <div className="form--card-btn">
                <button className="form--card__btn-close"  onClick={handleCloseModal}>Close</button>
              <button  className="form--card__btn" type="sumbit" onChange={()=>newTask()}>Sumbit</button>
              </div>
            </form>
            </div>
          </div>
        </div>
      )}
            </div>
            </div>
            <ToastContainer />
            <div className='section-card--box'>
            {task?.map((item)=>{
                return(
                    <>
        <div className='section-card--box-wrapper'>
          
                    <h3 className='section-card--box-title'>{item.name}</h3>
            <p className='section-card--box-text'>{item.email}</p>
            <div style={{
                display:'flex',
                justifyContent:'space-between',
                paddingTop:'15px'
            }}>
            <p className='section-card--box-author'>
            {item.enrol}
            </p>
            <p className='section-card--box-num'>{item.date} pages</p>
            </div>
            <div style={{
                display:'flex',
                gap:'20px',
                justifyContent:'end',
                paddingTop:'15px'
            }}>
            <Button onClick={() => editTask(item.id)}>Edit</Button>
            <Button onClick={() => removeTask(item.id)}>Remove</Button>
            </div>
        </div>
         </>
         )
     })}

        
            </div>
            
        </div>
        </>
    )}
    export default Section 