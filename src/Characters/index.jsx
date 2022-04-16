import React from 'react';
import useCharactersList from './hooks/useCharactersList';
import {Spinner} from '../shared/components';
import {useLocation} from 'wouter';
import {SearchField} from './components/SearchField';
import When from '../shared/components/condicional/When';
import { useTranslations } from '../shared/context/LanguageContext';

function CharactersList() {
    const [offset, setOffset]  =  React.useState(0);
    const [limit]  =  React.useState(10);
    const [,setLocation] = useLocation();
    const [search, setSearch] = React.useState('');
    const {characters,loading } = useCharactersList({offset, limit});
    
    const { translations } = useTranslations();

    const onSearch = (e) => {
        setSearch(e.target.value);
    };

    const onLoadMorData = () => {
        setOffset(offset + limit);
    };

    const isDisabled = (offset + limit) > characters?.length;

    return (
        <>
            <SearchField onChange={onSearch} value={search}/>
            <When condition={loading}>
                <div className='content-center grid col-auto'>
                    <Spinner/>
                </div>
            </When>
            <When condition={!loading}>
                <div className=" mx-auto px-4 grid content-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
                    {characters?.map(({char_id, name, nickname, img, birthday}) => (
                        <div className="container flex flex-col w-60 h-50 bg-gray-50 rounded border-2 border-gray-900 shadow-md hover:opacity-90" key={char_id}
                            onClick={() => setLocation(`/characters/${char_id}`)}>
                            <img loading="lazy" className="object-contain rounded-t-sm h-50   md:h-auto" src={img}/>
                            <div className="flex flex-col ml-2 mt-1 h-100 bg-amber-50">
                                <p className="text-lg font-bold text-gray-700">{name}</p>
                                <p className="ml-2 italic">{nickname}</p>
                                <p className="self-end bg-amber-200">{birthday}</p>
                            </div>
                        </div>
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
                   {translations.translations.loadMore}
               </button>
            }
        </>
    );
}

export default CharactersList;
