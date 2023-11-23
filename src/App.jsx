import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import './App.css';
import Toolbar from './components/Toolbar';

function App() {
    return (
        <>
            <InputGroup>
                <InputLeftElement pointerEvents="none">
                    <SearchIcon />
                </InputLeftElement>
                <Input type="text" placeholder="Search" />
            </InputGroup>
            <Toolbar />
        </>
    );
}

export default App;
