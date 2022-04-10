import {useEffect, useState} from 'react';

const useCharatersDetails = (id) => {
    const [details, setDetails] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchCharactersDetails = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://www.breakingbadapi.com/api/characters/${id}`);
            const data = await response.json();
            setDetails(data[0]);
        } catch (error) {
            setError(error);
        }

        setLoading(false);
    };

    useEffect(() => {
        fetchCharactersDetails();
    }, []);

    return { details, loading, error };
};

export  default useCharatersDetails;
