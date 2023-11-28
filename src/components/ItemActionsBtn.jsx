import { CopyIcon, DeleteIcon, DownloadIcon, DragHandleIcon, EditIcon, InfoIcon, LinkIcon } from '@chakra-ui/icons';
import { Box, Divider, IconButton, Menu, MenuButton, MenuGroup, MenuItem, MenuList, useToast } from '@chakra-ui/react';
import { AiOutlineMore } from 'react-icons/ai';

import { useDispatch } from 'react-redux';
import deleteItem from '../redux/actions/deleteItem';
import { updateFiles } from '../redux/slice/updateItemsSlice';

const ItemActionsBtn = ({ itemPath, setIsOpen }) => {
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

    const notImplemented = () => {
        toast({
            title: 'Not implemented',
            description: 'Functionality will be available soon.',
            status: 'info',
            duration: 2000,
            isClosable: true,
        });
    };

    return (
        <Menu>
            <MenuButton
                _hover={{ bg: 'blue.100' }}
                onClick={() => setIsOpen((prev) => !prev)}
                as={IconButton}
                aria-label="Options"
                icon={<AiOutlineMore />}
                variant="outline"
            />
            <MenuList>
                <MenuGroup>
                    <MenuItem onClick={handleDeleteItem} icon={<DeleteIcon />}>
                        Delete
                    </MenuItem>
                </MenuGroup>
                <Divider />
                <Box onClick={notImplemented}>
                    <MenuItem icon={<InfoIcon />}>Item Info</MenuItem>
                    <MenuItem icon={<LinkIcon />}>Copy Link</MenuItem>
                    <MenuItem icon={<DownloadIcon />}>Download</MenuItem>
                    <MenuItem icon={<EditIcon />}>Rename</MenuItem>
                    <MenuItem icon={<DragHandleIcon />}>Move</MenuItem>
                    <MenuItem icon={<CopyIcon />}>Copy</MenuItem>
                </Box>
            </MenuList>
        </Menu>
    );
};

export default ItemActionsBtn;
