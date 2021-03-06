import React, { useEffect } from 'react';
import { useCharactersList } from './hooks';
import { Spinner } from '../Shared/components';
import { SearchField } from './components/SearchField';
import When from '../Shared/components/condicional/When';
import { useTranslations } from '../Shared/context/TranslationsContext';
import CharacterCard  from './components/CharacterCard';
import * as repository from './services/api';

function Characters() {
    const [offset, setOffset]  =  React.useState(0);
    const [limit]  =  React.useState(10);

    const [query, setQuery] = React.useState('');
    const {characters,loading, fetchCharacters,searchCharacters, clearSearch } = useCharactersList({repository});

    const { translations: { translations } } = useTranslations();

    useEffect(() => {
        fetchCharacters({offset, limit});
    }, [offset, limit]);

    const onSearch = (event) => {
        event.preventDefault();
        if(query !== ''){
            searchCharacters({query});
        }else{
            clearSearch();
            fetchCharacters({offset, limit});
        }
    };

    const onChangeSearch = (event) => {
        setQuery(event.target.value);
    };


    const onLoadMorData = () => {
        setOffset(offset + limit);
    };


    const containerStyle = 'mx-auto px-4 grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 ';
    const isDisabled = (offset + limit) > characters?.length;

    return (
        <>
            <SearchField onChange={onChangeSearch} onSearch={onSearch} value={query} placeholder={translations.search}/>
            <When condition={loading}>
                <div className='grid place-content-center place-items-center h-screen col-auto '>
                    <Spinner/>
                </div>
            </When>
            <When condition={!loading}>
                <div className={containerStyle}>
                    {characters?.map(({char_id, name, nickname, img, birthday}) => (
                        <CharacterCard
                            key={char_id}
                            char_id={char_id || 12}
                            img={img}
                            name={name}
                            nickname={nickname}
                            birthday={birthday}
                        />
                    ))}
                </div>
            </When>
            {(!loading )&&
               <button
                   type='button'
                   onClick={onLoadMorData}
                   disabled={isDisabled}
                   className="
                    w-full 
                    border-4 border-black
                    mt-4 rounded-md mb-5 p-2  font-bold disabled:border-gray-300 disabled:text-gray-300">
                   {translations.loadMore}
               </button>
            }
        </>
    );
}

export default Characters;

