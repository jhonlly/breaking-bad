import React from 'react';
import Characters from './Characters';
import { Route, Switch} from 'wouter';
import CharactersDetails from './CharactersDetails';
import {Title} from './Shared/components';
import { TranslationsProvider } from './Shared/context/TranslationsContext';


function App() {
    return (
        <div className="container">
            <TranslationsProvider>
                <Title />
                <Switch>
                    <Route path="*" component={Characters}/>
                    <Route path="/" component={Characters} />
                    <Route path="/characters/:id" component={CharactersDetails} />
                </Switch>
            </TranslationsProvider>
        </div>
    );
}

export default App;
