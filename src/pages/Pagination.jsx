import { useRef } from 'react'
import './style/Pagination.css'
import next from '/next.png'
import prev from '/prev.png'

const Pagination = ({setpage, page, setpages, pages, setCounter, counter}) => {

    const handleStar = () => {
      setpages(0)
      setCounter(0)
    }
    const handleprev = () => {
      setCounter(counter--)
      const Prev = page*counter
      setpages(Prev)
    }
    const handleNext = () => {
      setCounter(counter++)
      const next = page*counter
      setpages(next)
  
    }
    const handleEnd = () => {
      const end = (Math.ceil/(1302 / page)-1)*page
      setpages(end)
  
    }
    const number_card =useRef(20)
    const handleSubmit= e => {
      e.prevenDefaul()
      setpage[number_card.current.value]
  
    }
  
    return (
      <div className='nav'>
        <div className='nav_pag'>
          <img onClick={handleStar} className= "nav_start"src="" alt="" />
          <img onClick={handleprev} className= "nav_prev"src={prev} alt="" />
          <img onClick={handleNext} className= "nav_next"src={next} alt="" />
          <img onClick={handleEnd} className= "nav_end"src="" alt="" />
        </div>
        <form className='nav_form'>
          <label className='nav_label'>card</label>
          <input className='nav_input' type="number" ref={number_card} placeholder={page} />
          <button className='nav_btn' onClick={handleSubmit}>submit</button>
  
        </form>
  
      </div>
    )
  }
  
  export default Pagination 