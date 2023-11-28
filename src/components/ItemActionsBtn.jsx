import { AddIcon, EditIcon, ExternalLinkIcon, RepeatIcon } from '@chakra-ui/icons';
import { Divider, IconButton, Menu, MenuButton, MenuItem, MenuList, useToast } from '@chakra-ui/react';
import { AiOutlineMore } from 'react-icons/ai';

import { useDispatch } from 'react-redux';
import { deleteItem } from '../redux/deleteItemSlice';
import { getSharingLink } from '../redux/getSharingLinkSlice';
import { updateFiles } from '../redux/updateItemsSlice';

const ItemActionsBtn = ({ itemPath }) => {
    const dispatch = useDispatch();
    const toast = useToast();

    const handleDeleteItem = async () => {
        await dispatch(deleteItem(itemPath)).then((response) => {
            if (response.payload.error) {
                toast({
                    title: 'Error deleting item',
                    description: response.payload.error,
                    status: 'error',
                    duration: 4000,
                    isClosable: true,
                });
            } else {
                toast({
                    title: 'Item deleted',
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                });
            }
        });
        dispatch(updateFiles());
    };

    const handleDownloadItem = async () => {
        const link = await dispatch(getSharingLink(itemPath));
        window.open(link.payload, '_blank');
        console.log(link);
    };

    return (
        <Menu>
            <MenuButton as={IconButton} aria-label="Options" icon={<AiOutlineMore />} variant="outline" />
            <MenuList>
                <MenuItem icon={<AddIcon />}>Item Info</MenuItem>
                <MenuItem icon={<ExternalLinkIcon />}>Share</MenuItem>
                <MenuItem icon={<RepeatIcon />}>Copy Link</MenuItem>
                <MenuItem onClick={handleDownloadItem} icon={<EditIcon />}>
                    Download
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleDeleteItem} icon={<AddIcon />}>
                    Delete
                </MenuItem>
                <MenuItem icon={<AddIcon />}>Rename</MenuItem>
                <MenuItem icon={<AddIcon />}>Move</MenuItem>
                <MenuItem icon={<AddIcon />}>Copy</MenuItem>
            </MenuList>
        </Menu>
    );
};

export default ItemActionsBtn;
