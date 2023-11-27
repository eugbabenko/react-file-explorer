import { Tbody, Td, Tr } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import ItemActionsBtn from './ItemActionsBtn';
import { setPath } from '../redux/pathSlice';
import { useDispatch } from 'react-redux';

const TableItem = () => {
    const items = useSelector((state) => state.fetchReducer.items);
    const dispatch = useDispatch();

    const openItem = (item, event) => {
        const isTdElement = event.target.tagName.toLowerCase() === 'td';
        if (isTdElement) {
            item['.tag'] === 'folder' ? dispatch(setPath(item.path_lower)) : null;
        }
    };

    return (
        <>
            {items.map((item) => {
                return (
                    <Tbody key={item.name}>
                        <Tr onClick={(event) => openItem(item, event)}>
                            <Td>{item.name}</Td>
                            <Td>{item?.client_modified ? item?.client_modified : '--'}</Td>
                            <Td>
                                <ItemActionsBtn itemPath={item.path_lower} />
                            </Td>
                        </Tr>
                    </Tbody>
                );
            })}
        </>
    );
};

export default TableItem;
