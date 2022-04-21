import React from 'react';
import useCharactersList from './hooks/useCharactersList';
import { Spinner } from '../Shared/components';
import { SearchField } from './components/SearchField';
import When from '../Shared/components/condicional/When';
import { useTranslations } from '../Shared/context/TranslationsContext';
import CharacterCard  from './components/CharacterCard';

function Characters() {
    const [offset, setOffset]  =  React.useState(0);
    const [limit]  =  React.useState(10);

    const [search, setSearch] = React.useState('');
    const {characters,loading } = useCharactersList({offset, limit});
    
    const { translations: { translations } } = useTranslations();

    const onSearch = (e) => {
        setSearch(e.target.value);
    };

    const onLoadMorData = () => {
        setOffset(offset + limit);
    };
    const containerStyle = 'mx-auto px-4 grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 ';
    const isDisabled = (offset + limit) > characters?.length;

    return (
        <>
            <SearchField onChange={onSearch} value={search} placeholder={translations.search}/>
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
            {!loading &&
               <button
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

