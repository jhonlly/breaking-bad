import React from 'react';
import CharactersList from './Characters';
import { Route, Switch} from 'wouter';
import CharactersDetails from './CharactersDetails';
import {Title} from './shared/components';


function App() {
    return (
        <div className="container">
            <Title />
            <Switch>
                <Route path="*" component={CharactersList}/>
                <Route path="/" component={CharactersList} />
                <Route path="/characters/:id" component={CharactersDetails} />
            </Switch>
        </div>
    );
}

export default App;
