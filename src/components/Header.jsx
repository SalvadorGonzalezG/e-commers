import { SlMenu } from "react-icons/sl";
import { AiOutlineLogin } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import Search from "./Search"; // componente para realizar busquedad

<s></s>
const Header = () => {
    return (
        <>
            <div className="header">
                <div className="right-buttons">
                    <button className="button"><SlMenu/></button>
                </div>
                <div className="search-container">
                    <Search/>                    
                </div>
                <div className="left-buttons">
                    <button className="button">Login
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