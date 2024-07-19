import { FiLogIn } from "react-icons/fi";
import Register from "./Register";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  
  const clickRegister=()=>{
    navigate('/Register')
  }
  return (
    <div className="login--container">
      <div>
        <form action="" className="form-login">
          <h1>Login <FiLogIn/></h1>
          <label htmlFor="">Nombre: </label>
          <input type="text" placeholder="Escribe tu nombre" /> <br />
          <label htmlFor="">Apellidos: </label>
          <input type="text" placeholder="Apellidos" /> <br />
          <label htmlFor="">Fecha de nacimiento:</label>
          <input type="date" name="" id="" /> <br />
          <label htmlFor="">Ingresa tu correo:</label>
          <input type="email" name="" id="" placeholder="ejemplo@mail.com" required/> <br />
          <label htmlFor="">Ingresa una contraseña: </label>
          <input type="password" name="" id="" placeholder="crea una contraseña" /><br />
          <label htmlFor="">Confirma tu contraseña: </label>
          <input type="text" placeholder="Confirma tu contraseña" /> <br />
          <button type="submit">enviar</button> 
          <p className="register"> Si no te tienes una cuneta da click aqui
          </p>
          <a onClick={clickRegister} className="register" >
            <Register/>
            </a>

        </form>
      </div>
    </div>
  )
}

export default Login