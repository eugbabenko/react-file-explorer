import { Tbody, Td, Tr } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import ItemActionsBtn from './ItemActionsBtn';

const TableItem = () => {
    const items = useSelector((state) => state.fetchReducer.items);
    console.log(items);
    return (
        <>
            {items.map((item) => {
                return (
                    <Tbody key={item.name}>
                        <Tr>
                            <Td>{item.name}</Td>
                            <Td>{item?.client_modified ? item?.client_modified : '--'}</Td>
                            <Td>
                                <ItemActionsBtn />
                            </Td>
                        </Tr>
                    </Tbody>
                );
            })}
        </>
    );
};

export default TableItem;
