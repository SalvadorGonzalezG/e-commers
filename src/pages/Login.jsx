import { FiLogIn } from "react-icons/fi";
import Register from "./Register";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  
  const clickRegister=()=>{
    navigate('/register')
  }
  return (
    <div className="login--container">
      <div>
        <form action="" className="form-login">
          <h1>Login <FiLogIn/></h1>
          
          <label htmlFor="">Ingresa tu correo:</label>
          <input type="email" name="" id="" placeholder="ejemplo@mail.com" required/> <br />
          
          <label htmlFor="">Confirma tu contraseña: </label>
          <input type="text" placeholder="Confirma tu contraseña" /> <br />
          <button type="submit">enviar</button> 
          <div className="register">
          <p > Si no te tienes una cuneta da click aqui
          </p>
          <a onClick={clickRegister} >
            register
            </a>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Login