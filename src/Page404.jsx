import React from 'react'
import { useCharakter } from './hooks/useCharakter';
import './App.css'
import { useParams } from 'react-router';

export default function Page404() {
  const { id } = useParams()
  const { data, loading, error } = useCharakter(id);

  console.log(
    data,
    error,
    loading
  );

  if(error) return <div>Error</div>

  if(loading) return <div>Loading</div>

  return (
    <div className='cheracter_list'>
      <img src={data.character.image} alt="" width={450} height={450}/>
      <div className='character_container'>
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className='episode'>
          {data.character.episode.map(episode => {
            return <div key={episode.name}>
              {episode.name} - <b>{episode.episode}</b>
            </div>
          }) }
        </div>
      </div>

    </div>
  )
}
