import React, { useEffect } from 'react';
import useCharactersDetails from './hooks/useCharacterDetails';
import PropTypes from 'prop-types';
import When from '../shared/components/condicional/When';
import {Spinner} from '../shared/components';
import { useTranslations } from '../Shared/context/TranslationsContext';
import BackButton from '../Characters/components/BackButton';
import * as Services from './services/api';


const CharactersDetails = ({params: {id}}) => {

    const { details , quote, error, loading, fetchCharactersDetails } = useCharactersDetails(Services);
    const { translations: { translations: t}} = useTranslations();

    useEffect(() => {
        id && fetchCharactersDetails(id);
    }, []);

    return (
        <div className="container grid place-content-center place-items-center m-3 grid-cols-2">
            <When condition={loading}>
                <Spinner/>
            </When>
            <When condition={error} >
                <div className="text-center">
                    <h1>{error}</h1>
                </div>
            </When>
            <When condition={!loading}>
                <div className="container h-50 w-50 accent-green-200">
                    <img className="object-cover w-50" src={details.img}/>
                </div>
                <div className=" w-auto  ">
                    <p className="text-5xl font-bold mb-3"> {details.name}</p>
                    <div className="font-semibold text-gray-500">
                        <p>{details?.occupation?.map((ocupation, index) => <span key={`${ocupation}-${index}`}>{ocupation}</span>)}</p>
                    </div>
                    <div>
                        <p>{t.portrayed}: {details.portrayed}</p>
                        <div>
                            <p>{t.status}: {details.status}</p>
                        </div>
                        <div>
                            <p>{t.birthday}: {details.birthday}</p>
                        </div>
                        <div>
                            <When condition={quote.length > 0}>
                                <p>{t.quote}: {quote[0]?.quote}</p>
                            </When>
                            <When condition={quote.length === 0}>
                                <p>{t.noQuotes}</p>
                            </When>
                        </div>
                    </div>
                    <BackButton text={t.back}/>  
                </div>
            </When>
        </div>
    );
};

CharactersDetails.propTypes = {
    params: PropTypes.shape({
        id: PropTypes.string.isRequired
    })
};

export default CharactersDetails;
