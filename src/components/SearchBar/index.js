import React, {useState, useEffect, useRef} from 'react';
import './searchbar.css';

const SearchBar = ({setSearchTerm}) => {
    const [state, setState] = useState('');
    const initial = useRef(true);

    useEffect(() => {
        //Skips initial render
        if (initial.current) {
            initial.current = false;
            return;
        }
        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500)
        return () => clearTimeout(timer);
    }, [setSearchTerm, state])

    return(
        <div className="SearchBar">
            <input className="InputBar"
                type="text"
                placeholder="Search City"
                onChange={event => setState(event.currentTarget.value)}
                value={state}
            />
        </div>
    )
}

export default SearchBar;