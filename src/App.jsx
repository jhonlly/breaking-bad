import React from 'react';
import Characters from './Characters';
import { Route, Switch} from 'wouter';
import CharactersDetails from './CharactersDetails';
import {Title} from './shared/components';
import { LanguageProvider } from './shared/context/LanguageContext';


function App() {
    return (
        <div className="container">
            <LanguageProvider>
                <Title />
                <Switch>
                    <Route path="*" component={Characters}/>
                    <Route path="/" component={Characters} />
                    <Route path="/characters/:id" component={CharactersDetails} />
                </Switch>
            </LanguageProvider>
        </div>
    );
}

export default App;
