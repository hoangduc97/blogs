import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import './search.scss';

function Search(props) {
    return (
        <div className="search">
            <AiOutlineSearch className="search__icon" />
            <input type="text" name="search"  ref={props.begin_focus} required placeholder="search" />
        </div>
    );
}

export default Search;
