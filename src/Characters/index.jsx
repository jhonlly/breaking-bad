import React from 'react';
import useCharactersList from './hooks/useCharactersList';
import {Spinner} from '../shared/components';
import {useLocation} from 'wouter';
import {SearchField} from './components/SearchField';


function CharactersList() {

    const {characters,loading } = useCharactersList();
    const [,setLocation] = useLocation();
    const [search, setSearch] = React.useState('');
    const onSearch = (e) => {
        setSearch(e.target.value);
    };

    return (
        <>
            <SearchField onChange={onSearch} value={search}/>
            <div className="mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
                {loading && <Spinner/>}
                {characters.map(({char_id, name, nickname, img, birthday}) => (
                    <div className="flex flex-row h-50 bg-gray-50 rounded shadow-md hover:opacity-90" key={char_id}
                        onClick={() => setLocation(`/characters/${char_id}`)}>
                        <img className="object-contain rounded-tl-md rounded-bl-md h-50 w-40 md:h-auto" src={img}/>
                        <div className="flex flex-col ml-2 mt-1 h-100 bg-amber-50">
                            <p className="text-lg font-bold text-gray-700">{name}</p>
                            <p className="ml-2 italic">{nickname}</p>
                            <p className="self-end bg-amber-200">{birthday}</p>
                        </div>
                    </div>
                ))}

                {!loading && <button className="w-full bg-green-500 rounded-md mb-5 p-2 text-white font-bold">Ver más
                    personajes</button>}
            </div>
        </>
    );
}

export default CharactersList;
