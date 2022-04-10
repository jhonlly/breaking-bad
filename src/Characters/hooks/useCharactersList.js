import {useEffect, useState} from 'react';


const useCharactersList = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchCharacters = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('https://www.breakingbadapi.com/api/characters?limit=10&offset=0');
            const data = await response.json();
            setCharacters(data);
        } catch (error) {
            setError(error);
        }

        setLoading(false);
    };

    useEffect(() => {
        fetchCharacters();
    }, []);

    return { characters, loading, error };
};

export  default useCharactersList;
