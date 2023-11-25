import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import './App.css';
import Toolbar from './components/Toolbar';
import TableFiles from './components/TableFiles';
import { useDispatch } from 'react-redux';

import { useEffect } from 'react';
import { fetchFilesAsync } from './redux/fetchItemsSlice';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFilesAsync(''));
    }, []);

    return (
        <>
            <InputGroup>
                <InputLeftElement pointerEvents="none">
                    <SearchIcon />
                </InputLeftElement>
                <Input type="text" placeholder="Search" />
            </InputGroup>
            <Toolbar />
            <TableFiles />
        </>
    );
}

export default App;
