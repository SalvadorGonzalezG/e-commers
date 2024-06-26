import { SlMenu } from "react-icons/sl";
import { AiOutlineLogin } from "react-icons/ai";
import { AiOutlineIdcard } from "react-icons/ai";
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
                    <button className="button">register
                        <AiOutlineIdcard />
                    </button>
                </div>
            </div>
        </>
    )
}
export default Header