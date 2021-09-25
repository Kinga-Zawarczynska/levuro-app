import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';
import { UPDATE_USER } from '../constants/flows';

function SearchBar({ usersData, redirectTo }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState(usersData);
    
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        let results = usersData && usersData.filter(item => item.first_name.toLowerCase().includes(searchTerm.toLowerCase()) || item.last_name.toLowerCase().includes(searchTerm.toLowerCase()) || item.email.toLowerCase().includes(searchTerm.toLowerCase()))
        setSearchResults(results);
      }, [searchTerm, usersData]);

    return (
        <section>
            <input type="text" placeholder="Search" value={searchTerm} onChange={handleChange} className='searchBar' />
            {!searchResults.length && <p>No match for this search.</p>}
            {searchResults.map((item) => <UserCard user={item} key={item.id} onClick={() => redirectTo(UPDATE_USER, item)} />)}
        </section>
    )
}

export default SearchBar;