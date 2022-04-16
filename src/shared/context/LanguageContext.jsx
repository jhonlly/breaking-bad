import React from 'react';
import * as PropTypes from 'prop-types';

const LanguageContext = React.createContext();

const translationsList = {
    es: {
        title: 'Mas personajes',
        characters: 'Personajes',
        character: 'Personaje',
        loadMore: 'Cargar mas',
        quote: 'Cita',
        search: 'Buscar',
        name: 'Nombre',
    },
    en: {
        title: 'More characters',
        characters: 'Characters',
        character: 'Character',
        search: 'Search',
        loadMore: 'Load more',
        quote: 'Quote',
        name: 'Name',
    },
};


function LanguageProvider({children}) {
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
        <LanguageContext.Provider value={{ translations, changeLangue }}>
            {children}
        </LanguageContext.Provider>
    );
}

LanguageProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

function useTranslations() {
    const context = React.useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}

export { LanguageProvider, useTranslations };



