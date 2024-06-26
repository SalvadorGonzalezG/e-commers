import { CiSearch } from "react-icons/ci";


const Search = () => {
    return (
        <>
            <div>
                <input
                    className="btnsearch"
                    type="search"
                    placeholder="Buscar" />
                <button className="searchbtn"><CiSearch /></button>
            </div>
        </>
    )
}

export default Search