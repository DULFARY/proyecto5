import FormTrainer from "../components/HomePage/FormTrainer"
import './style/HomePage.css'

const HomePage = () => {

  return (

    <div className="home">
      <img className="home_img" src="/imagen.png" alt="" />
    <h2 className="home_trainer">¡Hi trainer!</h2>
    <p className="home_parrafo">To see the information, of the pokemon tell me you trainer name</p>
    <FormTrainer/>
    <div className="padre">
      <div className="rojo"></div>
      <div className="negro "></div>
      <div className="circle"></div>
      <div className="blanco"></div>
    </div>
    </div>
  )

}

export default HomePage


