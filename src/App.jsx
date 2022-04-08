import React from 'react';
import CharactersList from './characters';
import { Route} from 'wouter';



function App() {
    return (
        <div>
            <Route path="/" component={CharactersList} />
        </div>
    );
}

export default App;
