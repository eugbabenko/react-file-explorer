import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { Tbody, Td, Tr, useToast } from '@chakra-ui/react';

import { fetchItemsFromDbx } from '../../redux/slice/fetchItemsSlice';

import TableRow from './TableRow';

const TableBody = () => {
    const { items } = useSelector((state) => state.fetchReducer);
    const path = useSelector((state) => state.pathSlice.path);
    const update = useSelector((state) => state.updateFilesSlice.update);

    const dispatch = useDispatch();
    const toast = useToast();

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
                items.map((item) => <TableRow key={item.name} item={item} />)
            ) : (
                <Tr>
                    <Td h="60vh" colSpan={3} textAlign="center">
                        Folder is empty
                    </Td>
                </Tr>
            )}
        </Tbody>
    );
};

export default TableBody;
