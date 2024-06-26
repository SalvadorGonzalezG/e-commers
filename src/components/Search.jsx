import { CiSearch } from "react-icons/ci";


const Search = () => {
    return (
        <>
            <div>
                <input
                    type="search"
                    placeholder="Buscar" />
                <button className="searchbtn"><CiSearch /></button>
            </div>
        </>
    )
}

export default Search