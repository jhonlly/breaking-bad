import React from 'react';
import * as PropTypes from 'prop-types';

const TranslationsContext = React.createContext();

const translationsList = {
    es: {
        title: 'Mas personajes',
        characters: 'Personajes',
        character: 'Personaje',
        loadMore: 'Cargar mas',
        quote: 'Cita',
        noQuotes: 'No hay citas',
        status: 'Estado',
        birthday: 'Fecha de nacimiento',
        search: 'Buscar',
        name: 'Nombre',
        portrayed: 'Representado por',
        back: 'Volver',
    },
    en: {
        title: 'More characters',
        characters: 'Characters',
        character: 'Character',
        search: 'Search',
        loadMore: 'Load more',
        quote: 'Quote',
        noQuotes: 'No quotes',
        status: 'Status',
        birthday: 'Birthday',
        portrayed: 'Portrayed by',
        name: 'Name',
        back: 'Back',
    },
};


const TranslationsProvider = ({children}) => {
    const [translations, setTranslations] = React.useState({
        langue: 'es',
        translations: translationsList.es,
    });

    const changeLangue = (lang) => {
        
        setTranslations({
            lang,
            translations: translationsList[lang],
        });
    };

    return (
        <TranslationsContext.Provider value={{ translations, changeLangue }}>
            {children}
        </TranslationsContext.Provider>
    );
};

TranslationsProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

const useTranslations = () => {
    const context = React.useContext(TranslationsContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a TranslationProvider');
    }
    return context;
};

export { TranslationsProvider, useTranslations };



