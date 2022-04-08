import React  from 'react';
import useCharatersList from './hooks/useCharatersList';

function CharactersList() {

    const {characters,loading, error} = useCharatersList();

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error...</p>}
            {characters.map(character => (
                <div key={character.id}>
                    <h2>{character.name}</h2>
                    <p>{character.nickname}</p>
                </div>
            ))}
        </div>
    );
}

export default CharactersList;
