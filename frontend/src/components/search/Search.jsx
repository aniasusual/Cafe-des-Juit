import React, {useState} from 'react'
import './search.scss'
// import {store, useGlobalState} from 'state-pool'
// import {createGlobalState} from 'react-hooks-global-state';

// const { setGlobalState, useGlobalState } = createGlobalState("");

const Search = () => {

    const [search,setSearch] = useState("");
    // const {search, setSearch} = useGlobalState("");

    return (
        <div id="search">
        <div className="d-flex justify-content-center" role="search">
            <input className="form-control me-2 bg-transparent" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
            {/* <button className="btn btn-outline-warning" type="submit">Search</button> */}
        </div>
    </div>
    )
}

// export {useGlobalState, setGlobalState};

export default Search
