import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { Td, Tr } from '@chakra-ui/react';

import { setPath } from '../../redux/slice/pathSlice';
import getSharingLink from '../../redux/actions/getSharingLink';

import ItemActionsBtn from './ItemActionsBtn';
import formatDateTime from '../../helpers/formatDate';

import ImagePicker from './ImagePicker';

/**
 * TableRow Component
 *
 * A component representing a row in the table displaying items from Dropbox.
 * Handles click events to open folders or files in new window.
 *
 * @component
 * @param {Object} item - The item data to display in the row.
 * @returns {JSX.Element} - The rendered TableRow component.
 */
const TableRow = ({ item }) => {
    // State for controlling the visibility of actions menu
    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch();

    /**
     * Handles the opening of folders or getting a sharing link for files.
     * Opens the folder or opens the file in a new tab.
     *
     * @param {Object} item - The item data.
     * @param {Event} event - The click event.
     */
    const openItem = async (item, event) => {
        // Check if the row is already open to prevent other row click issues
        if (isOpen) return;
        // Check if the click is on a clickable element (td) and not an action button, since the handler is on a whole row
        const isClickable = event.target.tagName.toLowerCase() === 'td';
        if (isClickable) {
            if (item['.tag'] === 'folder') {
                // If the item is a folder, update the path and store it in localStorage
                dispatch(setPath(item.path_lower));
                localStorage.setItem('path', item.path_lower);
            } else if (item['.tag'] === 'file') {
                // If the item is a file, get the sharing link and open it in a new tab
                const link = await dispatch(getSharingLink(item.path_lower));
                window.open(link.payload, '_blank');
            }
        }
    };
    return (
        <Tr key={item.name} onClick={(event) => openItem(item, event)} _hover={{ bg: 'gray.100' }}>
            <Td width="100px">
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
