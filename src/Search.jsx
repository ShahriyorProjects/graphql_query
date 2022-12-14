import { gql, useLazyQuery } from '@apollo/client';
import React, { useState} from 'react';

const GET_CHARACTER_LOCATIONS = gql`
    query GetCharacterLocations( $name: String! ){
        characters( filter: { name: $name} ) {
            results {
                location{
                    name
                }
            }
        }
    }
`

export default function Search() {
    const [name, setName] = useState("");

    const [getLocations, { loading, error, data, called} ] = useLazyQuery(
        GET_CHARACTER_LOCATIONS,{
            variables: {
                name,
            },
        }
    );

    console.log(
        data,
        loading,
        error
    );

  return (
    <div>
        <input type="text " value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={() => getLocations()}>search</button>
        {loading && <div> Loading...</div>}
        {error && <div> Error...</div>}
        {data && (
            <ul>
                {data.characters.results.map(( character) => {
                    return <li key={character.location.name}>{character.location.name}</li>
                })}
            </ul>
        )}


    </div>
  )
}
