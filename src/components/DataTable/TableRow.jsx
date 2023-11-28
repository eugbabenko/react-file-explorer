import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { Td, Tr } from '@chakra-ui/react';

import { setPath } from '../../redux/slice/pathSlice';
import getSharingLink from '../../redux/actions/getSharingLink';

import ItemActionsBtn from '../ItemActionsBtn';
import formatDateTime from '../../helpers/formatDate';

import ImagePicker from './ImagePicker';

const TableRow = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch();

    const openItem = async (item, event) => {
        if (isOpen) return;
        const isClickable = event.target.tagName.toLowerCase() === 'td';
        if (isClickable) {
            if (item['.tag'] === 'folder') {
                dispatch(setPath(item.path_lower));
                localStorage.setItem('path', item.path_lower);
            } else if (item['.tag'] === 'file') {
                const link = await dispatch(getSharingLink(item.path_lower));
                window.open(link.payload, '_blank');
            }
        }
    };
    return (
        <Tr key={item.name} onClick={(event) => openItem(item, event)} _hover={{ bg: 'gray.100' }}>
            <Td maxWidth="30px">
                <ImagePicker itemType={item['.tag']} />
            </Td>
            <Td>{item.name}</Td>
            <Td>{item?.client_modified ? formatDateTime(item?.client_modified) : '--'}</Td>
            <Td>
                <ItemActionsBtn setIsOpen={setIsOpen} itemPath={item.path_lower} />
            </Td>
        </Tr>
    );
};

export default TableRow;
