import { SlMenu } from "react-icons/sl";
import { AiOutlineLogin } from "react-icons/ai";
import { AiOutlineIdcard } from "react-icons/ai";
<s></s>
const Header = () => {
    return (
        <>
            <div className="header">
                <div className="right-buttons">
                    <button className="button"><SlMenu/></button>
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