import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import './App.css';
import Toolbar from './components/Toolbar';
import TableFiles from './components/TableFiles';
import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import { fetchFilesAsync } from './redux/fetchItemsSlice';
import PathBreadcrumb from './components/PathBreadcrumb';

function App() {
    const dispatch = useDispatch();
    const path = useSelector((state) => state.pathSlice.path);

    useEffect(() => {
        dispatch(fetchFilesAsync(path));
    }, [path]);

    return (
        <>
            <InputGroup>
                <InputLeftElement pointerEvents="none">
                    <SearchIcon />
                </InputLeftElement>
                <Input type="text" placeholder="Search" />
            </InputGroup>
            <Toolbar />
            <PathBreadcrumb />
            <TableFiles />
        </>
    );
}

export default App;
