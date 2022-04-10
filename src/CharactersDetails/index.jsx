import React from 'react';
import useCharatersDetails from './hooks/useCharacterDetails';
import PropTypes from 'prop-types';

function CharactersDetails({params}) {

    const {details, error, loading} = useCharatersDetails(params.id);
    return (
        <div className="container m-3 grid grid-cols-2">
            {error && <div>{error}</div>}
            {loading && <div>Loading...</div>}
            <div className="container h-50 w-50 accent-green-200">
                <img className="object-cover w-50  " src={details.img}/>
            </div>

            <div className=" w-auto  ">
                <p className="text-5xl font-bold mb-3"> {details.name}</p>
                <div className="font-semibold text-gray-500">
                    <p>{details?.occupation?.map((ocupation, index) => <span key={`${ocupation}-${index}`}>{ocupation}</span>)}</p>
                </div>
                <div>
                    <p>Portrayed: {details.portrayed}</p>
                </div>
            </div>

        </div>
    );
}

CharactersDetails.propTypes = {
    params: PropTypes.shape({
        id: PropTypes.string.isRequired
    })
};

export default CharactersDetails;
