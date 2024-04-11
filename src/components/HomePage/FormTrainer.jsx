import { useRef } from "react"
import { useDispatch } from "react-redux"
import { setTrainer } from "../../store/states/trainer.slice"
import { useNavigate } from "react-router-dom"
import './style/FormTrainer.css'

const FormTrainer = () => {


    const trainerInput = useRef()

    const dispatch = useDispatch ()

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch (setTrainer(trainerInput.current.value.trim()))
        navigate('/pokedex')

    }


  return (
    <form className="form"onSubmit={handleSubmit}>
        <input className="for_input" ref={trainerInput} type="text" />
        <button className="for_btn">Lets Start</button>
    </form>
  )
}

export default FormTrainer
