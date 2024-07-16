import {useNavigate} from 'react-router-dom'
import { SlMenu } from "react-icons/sl";
import { AiOutlineLogin } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import Search from "./Search"; // componente para realizar busquedad

/* Pasamos los props que se van a comunicar */
const Header = ({onLoginClick}) => {
    //funcion para navegar mediante react-router
    const navigate = useNavigate();

    const handleLoginClick=()=>{
        onLoginClick();
        navigate('/login')
    }

    return (
        <>
            <div className="header">
                <div className="right-buttons">
                    <button className="button" ><SlMenu/></button>
                </div>
                <div className="search-container">
                    <Search/>                    
                </div>
                <div className="left-buttons">
                    <button onClick={handleLoginClick} className="button">Login
                        <AiOutlineLogin />
                    </button>
                    <button className="button"><IoCartOutline/>
                    </button>
                </div>
            </div>
        </>
    )
}
export default Header