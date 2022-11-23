import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import useCharakters from './hooks/useCharakters';

export default function Data() {

    const {data, loading, error } = useCharakters();
    
    if(loading ) return <div>loading... </div>

    if(error ) return <div>Something went wrong</div>
    return (
        <div className='list'>
            {data.characters.results.map((characters) => {
                return <Link to={`/${characters.id}`} key={characters.id} className="list_child">
                            <img src={characters.image} alt="" />
                            <h2>{characters.name}</h2>
                        </Link>
            })}
        </div>
    )
}
