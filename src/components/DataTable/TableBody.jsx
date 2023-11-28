import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { Tbody, Td, Tr, useToast } from '@chakra-ui/react';

import { fetchItemsFromDbx } from '../../redux/slice/fetchItemsSlice';

import TableRow from './TableRow';

/**
 * TableBody Component
 *
 * A component responsible for rendering the body of the table with items fetched from Dropbox.
 *
 * @component
 * @returns {JSX.Element} - The rendered TableBody component.
 */
const TableBody = () => {
    // Redux state selectors
    const items = useSelector((state) => state.fetchReducer.items);
    const path = useSelector((state) => state.pathSlice.path);
    const update = useSelector((state) => state.updateFilesSlice.update);

    const dispatch = useDispatch();
    const toast = useToast();

    /**
     * Fetches items from Dropbox based on the current path and updates the state.
     * Displays a toast notification in case of an error.
     */

    useEffect(() => {
        dispatch(fetchItemsFromDbx(path)).then((response) => {
            if (response.error) {
                toast({
                    title: 'Error fetching items',
                    description: response.error.message,
                    status: 'error',
                    duration: 2000,
                    isClosable: true,
                });
            }
        });
    }, [path, update]);

    return (
        <Tbody>
            {items.length > 0 ? (
                // Renders TableRow component for each item in the list
                items.map((item) => <TableRow key={item.name} item={item} />)
            ) : (
                // Displays a message if the folder is empty or error with fetch
                <Tr>
                    <Td h="60vh" colSpan={4} textAlign="center">
                        Folder is empty
                    </Td>
                </Tr>
            )}
        </Tbody>
    );
};

export default TableBody;
