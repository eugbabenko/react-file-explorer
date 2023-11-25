import { Tbody, Td, Tr } from '@chakra-ui/react';

import data from '../../test.json';
import ItemActionsBtn from './ItemActionsBtn';

const TableItem = () => {
    return (
        <>
            {data.entries.map((item) => {
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
