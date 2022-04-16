import React from 'react';
import useCharactersDetails from './hooks/useCharacterDetails';
import PropTypes from 'prop-types';
import When from '../shared/components/condicional/When';
import {Spinner} from '../shared/components';

function CharactersDetails({params: {id}}) {

    const { details , quote, error, loading } = useCharactersDetails(id);
    console.warn({error});
    return (
        <div className="container m-3 grid grid-cols-2">
            <When condition={loading}>
                <Spinner/>
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
                        <p>Portrayed: {details.portrayed}</p>
                        <div>
                            <p>Status: {details.status}</p>
                        </div>
                        <div>
                            <p>Fecha de nacimiento: {details.birthday}</p>
                        </div>
                        <div>
                            <When condition={quote.length > 0}>
                                <p>{quote[0]?.quote}</p>
                            </When>
                            <When condition={quote.length === 0}>
                                <p>No hay quotes</p>
                            </When>
                        </div>
                    </div>
                </div>
            </When>
        </div>
    );
}

CharactersDetails.propTypes = {
    params: PropTypes.shape({
        id: PropTypes.string.isRequired
    })
};

export default CharactersDetails;
