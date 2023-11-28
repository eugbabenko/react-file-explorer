import { Box } from '@chakra-ui/react';

import './App.css';
import Toolbar from './components/Toolsbar';
import TableFiles from './components/DataTable';
import PathBreadcrumb from './components/PathBreadcrumb';
import SearchBar from './components/SearchBar';

function App() {
    return (
        <Box width="100%" minHeight="100vh">
            <SearchBar />
            <Toolbar />
            <PathBreadcrumb />
            <TableFiles />
        </Box>
    );
}

export default App;
