import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { Tbody, Td, Tr, useToast } from '@chakra-ui/react';

import { setPath } from '../redux/pathSlice';
import { fetchItemsFromDbx } from '../redux/fetchItemsSlice';

import ItemActionsBtn from './ItemActionsBtn';

const TableItem = () => {
    const { items } = useSelector((state) => state.fetchReducer);
    const path = useSelector((state) => state.pathSlice.path);
    const update = useSelector((state) => state.updateFilesSlice.update);

    const dispatch = useDispatch();
    const toast = useToast();

    const openItem = (item, event) => {
        const isTdElement = event.target.tagName.toLowerCase() === 'td';
        if (isTdElement) {
            item['.tag'] === 'folder' ? dispatch(setPath(item.path_lower)) : null;
        }
    };

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
        <>
            {items.map((item) => (
                <Tbody key={item.name}>
                    <Tr onClick={(event) => openItem(item, event)}>
                        <Td>{item.name}</Td>
                        <Td>{item?.client_modified ? item?.client_modified : '--'}</Td>
                        <Td>
                            <ItemActionsBtn itemPath={item.path_lower} />
                        </Td>
                    </Tr>
                </Tbody>
            ))}
        </>
    );
};

export default TableItem;
